module.exports = {
  apps: [
    {
      script: 'npm',
      args: 'start',
      cwd: './backend/',
      name: 'Backend',
      watch: true
    },
    {
      script: 'npm',
      args: 'start',
      cwd: './frontend/',
      name: 'Frontend',
      watch: true
    }
  ]
}
