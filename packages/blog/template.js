module.exports = function(scope) {
  return {
    package: {
      dependencies: {
        "mime-types": "^2.1.27",
        "@strapi/plugin-graphql": scope.strapiVersion,
      }
    }
  }
}
