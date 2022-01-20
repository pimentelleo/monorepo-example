module.exports = {
  apps: [
    {
      script: 'npm start',
      cwd: 'backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'npm start',
      cwd: 'frontend/',
      name: 'Frontend',
      watch: true
    }
  ]
}
