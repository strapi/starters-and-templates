'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  count(ctx) {
    if (ctx.query._q) {
      return strapi.services["lead-form-submissions"].countSearch(ctx.query);
    }
    return strapi.services["lead-form-submissions"].count(ctx.query);
  },
};
