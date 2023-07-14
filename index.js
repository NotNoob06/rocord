const express = require('express');

const app = express();

const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: "r.",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    guildOnly: false,
    respondToBots: true,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    },
    respondOnEdit: {
      commands : true
  },
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")


bot.variables({

    // account related
    uname: "",
    pword: "",
    avt: "",
    tscode: '',
    // status
    reqsending: false,
    connected: false,
    tsvcheck: false,
    
});

app.get('/', (req, res) => {
  res.send('sup')
});

app.listen(3000, () => {
  console.log('server started');
});
