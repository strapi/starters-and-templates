module.exports = function(scope) {
  return {
    package: {
      dependencies: {
        "@strapi/plugin-graphql": scope.strapiVersion,
        "lodash.set": "^4.3.2",
        "mime-types": "^2.1.27",
      }
    }
  }
}