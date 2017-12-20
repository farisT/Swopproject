const env = {
  PORT: 5432, 
  // DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_NAME: 'swop',
  DATABASE_HOST: 'localhost',
  DATABASE_USERNAME: 'postgres',
  DATABASE_PASSWORD: 'biggles',
  DATABASE_DIALECT: 'postgres',
  WEBPORT: 3000
}

module.exports = env