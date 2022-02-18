const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Bad Ticket")));
 await console.log(chalk.green.bold("."))
 await console.log(chalk.green.bold(".."))
 await console.log(chalk.green.bold("..."))

 await console.log(chalk.green.bold("Bad Start"))
 await console.log(chalk.green.bold("Bad Start."))

 await console.log(chalk.green.bold("Bad Start.."))

    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Bad Is Ready"));

}

/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/