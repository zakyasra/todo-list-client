module.exports = {
  apps: [
    {
      name: "pkss",
      script: "npm",
      args: "start",
      exec_mode: "fork",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "188.166.189.147",
      path: "/root/pkss",
      repo: "git@github.com:goentdev/pkss-client.git",
      ref: "origin/main",
      key: "~/.ssh/id_rsa",
      "post-deploy": "npm i; npx next build; pm2 reload ecosystem.config.js",
    },
  },
};
