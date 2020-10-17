module.exports = {
  apps: [
    {
      name: "test",
      script: "npm",
      args: "start",
      env: {
        DATABASE_HOST:     'database-1.cgqp0nyqkqvt.eu-west-3.rds.amazonaws.com',
        DATABASE_NAME:     'strapidatabase',
        DATABASE_PASSWORD: 'PostGres99',
        DATABASE_PORT:     5432,
        DATABASE_USERNAME: 'postgres',
      }
    }
  ],
};