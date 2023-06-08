"use strict";

const bootstrap = require('./bootstrap');

module.exports = {
  async bootstrap() {
    await bootstrap();
  },
}
