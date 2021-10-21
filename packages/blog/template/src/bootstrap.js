"use strict";

const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const {
  categories,
  homepage,
  writers,
  articles,
  global,
} = require("../data/data.json");

async function isFirstRun() {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

async function setPublicPermissions(newPermissions) {
  // Find the ID of the public role
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({
      where: {
        type: "public",
      },
    });

  // Create the new permissions and link them to the public role
  const allPermissionsToCreate = [];
  Object.keys(newPermissions).map(controller => {
    const actions = newPermissions[controller];
    const permissionsToCreate = actions.map(action => {
      return strapi.query("plugin::users-permissions.permission").create({
        data: {
          action: `api::${controller}.${controller}.${action}`,
          role: publicRole.id,
        },
      });
    });
    allPermissionsToCreate.push(...permissionsToCreate);
  });
  await Promise.all(allPermissionsToCreate);
}

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
}

function getFileData(fileName) {
  const filePath = `./data/uploads/${fileName}`;

  // Parse the file metadata
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = mime.lookup(ext);

  return {
    path: filePath,
    name: fileName,
    size,
    type: mimeType,
  };
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry, files }) {
  try {
    const createdEntry = await strapi.query(model).create(entry);
    if (files) {
      await strapi.entityService.uploadFiles(createdEntry, files, {
        model,
      });
    }
  } catch (e) {
    console.log("model", entry, e);
  }
}

async function importCategories() {
  return Promise.all(
    categories.map((category) => {
      return createEntry({ model: "category", entry: category });
    })
  );
}

async function importHomepage() {
  const files = {
    "seo.shareImage": getFileData("default-image.png"),
  };
  await createEntry({ model: "homepage", entry: homepage, files });
}

async function importWriters() {
  return Promise.all(
    writers.map(async (writer) => {
      const files = {
        picture: getFileData(`${writer.email}.jpg`),
      };
      return createEntry({
        model: "writer",
        entry: writer,
        files,
      });
    })
  );
}

// Randomly set relations on Article to avoid error with MongoDB
function getEntryWithRelations(article, categories, authors) {
  const isMongoose = strapi.config.connections.default.connector == "mongoose";

  if (isMongoose) {
    const randomRelation = (relation) =>
      relation[Math.floor(Math.random() * relation.length)].id;
    delete article.category.id;
    delete article.author.id;

    return {
      ...article,
      category: {
        _id: randomRelation(categories),
      },
      author: {
        _id: randomRelation(authors),
      },
    };
  }

  return article;
}

async function importArticles() {
  const categories = await strapi.query("category").find();
  const authors = await strapi.query("writer").find();

  return Promise.all(
    articles.map((article) => {
      // Get relations for each article
      const entry = getEntryWithRelations(article, categories, authors);

      const files = {
        image: getFileData(`${article.slug}.jpg`),
      };

      return createEntry({
        model: "article",
        entry,
        files,
      });
    })
  );
}

async function importGlobal() {
  const files = {
    favicon: getFileData("favicon.png"),
    "defaultSeo.shareImage": getFileData("default-image.png"),
  };
  return createEntry({ model: "global", entry: global, files });
}

async function importSeedData() {
  // Allow read of application content types
  await setPublicPermissions({
    global: ["find"],
    homepage: ["find"],
    article: ["find", "findone"],
    category: ["find", "findone"],
    writer: ["find", "findone"],
  });

  // Create all entries
  await importCategories();
  await importHomepage();
  await importWriters();
  await importArticles();
  await importGlobal();
}

module.exports = async () => {
  const shouldImportSeedData = await isFirstRun();

  if (shouldImportSeedData) {
    try {
      console.log("Setting up the template...");
      await importSeedData();
      console.log("Ready to go");
    } catch (error) {
      console.log("Could not import seed data");
      console.error(error);
    }
  }
};
