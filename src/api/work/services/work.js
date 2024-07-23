'use strict'

/**
 * work service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::work.work', ({ strapi }) => ({
  async fetch() {
    let experience = await strapi.query('api::work.work').findMany({
      orderBy: { startYear: 'desc' }
    })

    experience.forEach(job => {
      if (job.technologies) {
        job.technologies = job.technologies.split(',').map(item => item.trim())
      }
    })

    return experience
  }
}))
