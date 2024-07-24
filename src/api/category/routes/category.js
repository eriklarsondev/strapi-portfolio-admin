'use strict'

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::category.category', {
  only: ['find', 'findOne'],
  config: {
    find: {
      auth: false
    },
    findOne: {
      auth: false
    }
  }
})
