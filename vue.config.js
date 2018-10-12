module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/test-task-checkout/'
    : '/',

  lintOnSave: false
}