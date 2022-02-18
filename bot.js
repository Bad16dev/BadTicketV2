const { Client, Collection } = require("discord.js");
const Discord = require('discord.js');
const emoji = require('./botconfig/emoji.json')

const client = new Client();
require('discord-buttons')(client);
const chalk = require("chalk");
const fs = require("fs");

client.commands = new Collection();

fs.readdir(__dirname + "/botcmd/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let event = require(__dirname + "/botcmd/events/" + file);
        let eventName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading event ") + chalk.magenta.bold(`"${eventName}"`)
        );
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir(__dirname + "/botcmd/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(__dirname + "/botcmd/commands/" + file);
        let commandName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading command ") + chalk.red.bold(`"${commandName}"`)
        );
        client.commands.set(commandName, props);
    });
});

client.login(require("./config/bot").token).catch(err => console.log(chalk.red.bold(err)))
require("http").createServer((_, res) => res.end("Made By Odqin Hope.#3890\n\nTo Make The Bot Online 24h Join Discord Server Below..\n\n\nhttps://discord.gg/CkXfzjYVJw")).listen(8080)


/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/