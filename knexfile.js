module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sonar-survey'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
