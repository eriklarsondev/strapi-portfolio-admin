module.exports = {
  async beforeCreate(event) {
    const { params } = event
    params.data.slug = formatQueryParam(params.data.fullName)
  },

  async beforeUpdate(event) {
    const { params } = event
    params.data.slug = formatQueryParam(params.data.fullName)
  }
}

function formatQueryParam(slug) {
  slug = slug.replace(/[^\w\s]/gi, '')
  return slug.trim().replace(/ +/g, '-').toLowerCase()
}
