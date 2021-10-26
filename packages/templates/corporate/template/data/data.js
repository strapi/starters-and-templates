const { global, pages } = require("./en");
const { globalFR, pagesFR } = require("./fr");
const { leadFormSubmissions } = require("./lead-form-submissions.json");

module.exports = {
  globals: [global, globalFR],
  pages: [...pages, ...pagesFR],
  leadFormSubmissions,
};
