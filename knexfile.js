// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/car-dealer.db3' // path for db
    },
    migrations: {
      directory: './data/migrations' // path for migrations folder
    },
    seeds: {
      directory: './data/seeds' // path for seeds folder
    }
  }

};
