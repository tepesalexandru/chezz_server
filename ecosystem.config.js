module.exports = {
  apps: [
    {
      name: "test",
      script: "npm",
      args: "run develop",
      env: {
        DATABASE_HOST:     'ec2-54-211-169-227.compute-1.amazonaws.com',
        DATABASE_NAME:     'd3ibr7t6039d9q',
        DATABASE_PASSWORD: '1c82fb8067629b15715ec5553916862c233563f10419f99045260f1a4cbd0426',
        DATABASE_PORT:     5432,
        DATABASE_USERNAME: 'raliredeffelyz',
      }
    }
  ],
};