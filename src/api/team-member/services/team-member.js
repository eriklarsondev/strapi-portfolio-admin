'use strict'

/**
 * team-member service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::team-member.team-member', ({ strapi }) => ({
  async fetch() {
    let team = await strapi.query('api::team-member.team-member').findMany({
      populate: ['image', 'links'],
      orderBy: { fullName: 'asc' }
    })
    return team
  },

  async fetchById(id) {
    let member = await strapi.query('api::team-member.team-member').findOne({
      where: { slug: id },
      populate: {
        image: true,
        articles: {
          where: { publishedAt: { $notNull: true } },
          populate: ['categories', 'author.image']
        },
        seo: true
      }
    })
    return member
  }
}))
