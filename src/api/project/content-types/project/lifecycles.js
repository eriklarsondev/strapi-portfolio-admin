module.exports = {
  async beforeCreate(event) {
    const { params } = event
    params.data.slug = formatQueryParam(params.data.name)
  },

  async beforeUpdate(event) {
    const { params } = event
    params.data.slug = formatQueryParam(params.data.name)
  }
}

function formatQueryParam(slug) {
  slug = slug.replace(/[^\w\s]/gi, '')
  return slug.trim().replace(/ +/g, '-').toLowerCase()
}
