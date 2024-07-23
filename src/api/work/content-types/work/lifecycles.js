module.exports = {
  async beforeCreate(event) {
    const { params } = event
    params.data.duration = setDuration(params.data.startYear, params.data.endYear)
  },

  async beforeUpdate(event) {
    const { params } = event
    params.data.duration = setDuration(params.data.startYear, params.data.endYear)
  }
}

function setDuration(startYear, endYear) {
  let duration = (endYear ? endYear : new Date().getFullYear()) - startYear
  if (duration < 1) {
    duration = 1
  }
  return duration !== 1 ? (duration += ' years') : (duration += ' year')
}
