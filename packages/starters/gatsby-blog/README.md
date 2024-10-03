# Strapi Starter Gatsby Blog

Gatsby starter for creating a blog with Strapi.

This starter allows you to try Strapi with Gatsby with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!

This starter uses the [Strapi blog template](https://github.com/strapi/starters-and-templates/tree/main/packages/templates/blog)

## Getting started

Use our `create-strapi-starter` CLI to create your project.

```sh
# Using Yarn
yarn create strapi-starter my-project gatsby-blog

# Or using NPM
npx create-strapi-starter my-project gatsby-blog
```

The CLI will create a monorepo, install dependencies, and run your project automatically. However, this will fail for the first time. You will need to manually create a full access [API token](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html) in Strapi. Once it's created, save it as `STRAPI_TOKEN` in your environment variables.

1. Start Strapi backend alone executing `yarn develop` in `./backend`
2. Go to Settings -> API Tokens and create a new full access token
3. Copy `.env` file for gatsby: `cp ./frontend/.env.example ./frontend/.env.development`
4. Adjust `STRAPI_TOKEN=...` in this file

After that, you can run `yarn develop` in the project's root folder (or in `./frontend` to run the Gatsby frontend alone).

The Gatsby frontend server will run here => [http://localhost:8000](http://localhost:8000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Gatsby](https://www.gatsbyjs.com/docs/deploying-and-hosting/)

Enjoy this starter!
