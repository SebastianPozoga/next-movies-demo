const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  env: {
    SERVER_URL: isDev
      ? 'http://localhost:3000/'
      : 'https://next-movies-demo.prog255.now.sh',
    OMDB_KEY: process.env.OMDB_KEY
  }
}
