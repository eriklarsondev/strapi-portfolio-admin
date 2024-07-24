'use strict'

/**
 * project service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::project.project', ({ strapi }) => ({
  async fetch(featured) {
    let projects = await strapi.query('api::project.project').findMany({
      where: { featured: featured },
      populate: ['image'],
      orderBy: { name: 'asc' }
    })

    projects.forEach(project => {
      if (project.technologies) {
        project.technologies = project.technologies.split(',').map(item => item.trim())
      }
    })
    return projects
  },

  async fetchById(id) {
    let project = await strapi.query('api::project.project').findOne({
      where: { slug: id },
      populate: ['image', 'seo']
    })

    if (project) {
      if (project.technologies) {
        project.technologies = project.technologies.split(',').map(item => item.trim())
      }
    }
    return project
  }
}))
