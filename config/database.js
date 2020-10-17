module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env('DATABASE_HOST'),
        port: env('process.env.DATABASE_PORT'),
        database: env('process.env.DATABASE_NAME'),
        username: env('process.env.DATABASE_USERNAME'),
        password: env('process.env.DATABASE_PASSWORD'),
      },
    },
  },
});
