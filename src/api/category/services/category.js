'use strict'

/**
 * category service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::category.category', ({ strapi }) => ({
  async fetch() {
    let categories = await strapi.query('api::category.category').findMany({
      populate: {
        articles: {
          where: { publishedAt: { $notNull: true } }
        }
      },
      orderBy: { name: 'asc' }
    })
    return categories
  },

  async fetchById(id) {
    let category = await strapi.query('api::category.category').findOne({
      where: { slug: id },
      populate: {
        articles: {
          where: { publishedAt: { $notNull: true } },
          populate: ['categories', 'author.image']
        },
        seo: true
      }
    })
    return category
  }
}))
