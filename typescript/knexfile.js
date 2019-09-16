// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'admin',
      database: 'admin',
      password: 'password'
    }
  },
  migrations: {
    directory: __dirname + '/migrations',
  },

};
