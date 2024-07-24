'use strict'

/**
 * article service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::article.article', ({ strapi }) => ({
  async fetch(limit) {
    let articles = await strapi.query('api::article.article').findMany({
      where: {
        publishedAt: { $notNull: true }
      },
      limit: limit ? limit : 3,
      populate: ['categories', 'author.image']
    })
    return articles
  },

  async fetchById(id) {
    let article = await strapi.query('api::article.article').findOne({
      where: {
        slug: id,
        publishedAt: { $notNull: true }
      },
      populate: ['categories', 'author.image', 'seo']
    })
    return article
  }
}))
