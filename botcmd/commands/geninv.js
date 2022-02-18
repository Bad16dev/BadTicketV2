const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`810262257447469116`)) return  message.reply('**ONLY MY OWNER CAN USE THIS COMMAND!**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite Bad Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [here]()**\n\n**Note: _Only My Owner Can Invite Me !_**`)
  .setColor(`#0x2F3136`));
	}
};


/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/