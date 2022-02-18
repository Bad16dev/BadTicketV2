const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "cmds"],
 
run: async (bot, message, args) => { 
 
      message.react('887650847327158343');


                const embed = new Discord.MessageEmbed()
                .setTitle(`Bad Tickets`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`__**Click On The Select Menu Below To Swap Help Pages**__\n > 🏡 - Home Page\n > ✉️ - Tickets Commands\n > ✨ - Premium Features\n > 📔 - About Me`)
                .setColor(`#0x2F3136`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Ticket Commands`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Commands:__**\n\`setup\` : To setup ticket system \n\`transcript\` : To transcript a ticket \n\`rename\` : To change name of a ticket \n\`remove\` : To remove any one in the ticket \n\`ping\` : To see your ping \n\`open\` : To open a ticket fast \n\`close\` : To close a ticket \n\`prefix\` : To change the bot prefix \n\`add\` : To add someone in the ticket`)
                .setColor(`#0x2F3136`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`My Premium Features`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**I Have One Feature And Its I Made By [Bad](https://www.youtube.com/channel/UCKh6D-uY87Bb0y0w7XqUlzQ/).**`)
                .setColor(`#0x2F3136`)

                const embed4 = new Discord.MessageEmbed()
                .setTitle(`About Me`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**I was Made by, \`Odqin Hope.#3890\`!\n\nJoin My Support [Server](https://discord.gg/CkXfzjYVJw).**`)
                .setColor(`#0x2F3136`)

                
        let option1 = new MessageMenuOption()
        .setLabel('Home Page')
        .setValue('option1')
        .setEmoji("🏡")
        .setDescription('View All Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("✉️")
        .setDescription('View Bad Ticket Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Features')
        .setValue('option3')
        .setEmoji("✨")
        .setDescription('View My Premium Features')
  
      let option4 = new MessageMenuOption()
        .setLabel('About Me')
        .setValue('option4')
        .setEmoji("📔")
        .setDescription('View My About')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Ticket Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type The Help Command\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("This Help Menu Is Expired! Please Retype The \`Help Command\`")
        .setFooter("Powered By Bad"))
    })

    }
}

/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/