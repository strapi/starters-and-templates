"use strict";

const boostrap = require('./bootstrap');

module.exports = {
  async bootstrap() {
    await boostrap();
  },
}
