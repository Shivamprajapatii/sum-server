module.exports = {
  apps: [
    {
      name: "sum-server",
      script: "index.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8000
      }
    }
  ]
};
