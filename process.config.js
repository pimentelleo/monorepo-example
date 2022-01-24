module.exports = {
  apps: [
    {
      script: 'app.js',
      cwd: 'backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'server.js',
      cwd: 'frontend/',
      name: 'Frontend',
      watch: true
    }
  ]
}
