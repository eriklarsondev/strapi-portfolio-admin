'use strict'

/**
 * team-member router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::team-member.team-member', {
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
