# Strapi Starter Next.js E-commerce

Next.js starter for creating a simple e-commerce website with Strapi **v4**.

In case you need the corresponding starter with strapi v3, you can check [strapi-starter-next-ecommerce](https://github.com/strapi/strapi-template-ecommerce).

This starter allows you to try Strapi with Next.js with the example of a simple e-commerce website where you can buy dev stickers. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!

This starter uses the [Strapi E-commerce template](https://github.com/strapi/starters-and-templates/tree/main/packages/templates/ecommerce)

Check out all of our starters [here](https://github.com/strapi/starters-and-templates)

## Features

- 1 Component
- 2 Collection types: Product, Category
- 27 Created products
- 6 Created categories
- Permissions set to `true` for product and category
- Responsive design using Tailwind css
- Slug system
- Publication system (draft & published)
- Role based access controls
- Payments handled with Snipcart

This starter is using [Snipcart](https://snipcart.com/) which allows you setup a shopping cart on any website. They wrote a [tutorial](https://snipcart.com/blog/strapi-nuxt-ecommerce-tutorial) teaching you how to create this website but selling cupcakes!

Payment will not work on localhost, we are redirecting you to this [tutorial](https://snipcart.com/blog/develop-a-snipcart-powered-website-locally-using-ngrok) if you want to test payment locally.

## Getting started

Use our `create-strapi-starter` CLI to create your project.

```sh
npx create-strapi-starter my-site next-ecommerce
```

The CLI will create a monorepo, install dependencies, and run your project automatically.

The Next frontend server will run here => [http://localhost:3000](http://localhost:3000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Next](https://nextjs.org/docs/deployment)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required:
- `NEXT_PUBLIC_STRAPI_API_URL`: URL of your Strapi backend, without trailing slash


Enjoy this starter!
