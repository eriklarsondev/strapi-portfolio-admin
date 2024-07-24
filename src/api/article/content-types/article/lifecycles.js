module.exports = {
  async beforeCreate(event) {
    const { params } = event

    if (params.data.title) {
      params.data.slug = formatQueryParam(params.data.title)
    }
  },

  async beforeUpdate(event) {
    const { params } = event

    if (params.data.title) {
      params.data.slug = formatQueryParam(params.data.title)
    }
  }
}

function formatQueryParam(slug) {
  slug = slug.replace(/[^\w\s]/gi, '')
  return slug.trim().replace(/ +/g, '-').toLowerCase()
}
