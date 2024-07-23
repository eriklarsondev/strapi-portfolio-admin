'use strict'

/**
 * service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::service.service', {
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
