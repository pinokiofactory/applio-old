module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          //"git clone https://github.com/IAHispano/Applio applio",
          "git clone https://github.com/cocktailpeanut/Applio applio",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "applio",
        message: [
          "pip install --upgrade setuptools",
          "pip install -r ../requirements.txt",
        ],
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "applio",
        }
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "applio/env"
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
