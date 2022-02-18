module.exports = {
    name: "add",
    cooldown: 6,
    aliases: ['get-in'],

    run: async function(client, message, args) {
        if (!message.channel.name.includes("ticket-")) {
            message.channel.send({
                embed: {
                    title: `**❌**`,
                    description: `This Is Not A Ticket Channel`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.send({
                embed: {
                    title: `**❌**`,
                    description: `You Need Permissions To Use This Command.`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        var member = message.mentions.members.first() ||
            message.guild.members.cache.find(u => u.id == args[0]) ||
            message.guild.members.cache.find(u => u.user.username == args[0]) ||
            message.guild.members.cache.find(u => u.nickname == args[0]) ||
            message.guild.roles.cache.find(r => r.id == args[0]) ||
            message.guild.roles.cache.find(r => r.name == args[0]) ||
            message.mentions.roles.first();
        if (!args[0]) {
            message.channel.send({
                embed: {
                    title: `**❌**`,
                    description: `You Have To Specify The \`Role/Member\` You Wont To Make Him Join's The Ticket !`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        var txt;
        var mem = member.name;
        if (!mem || mem == null || mem == undefined) {
            txt = '<@!' + member.id + '>'
        } else {
            txt = '<@&' + member.id + '> role'
        }
        message.channel.overwritePermissions([{
            id: require('quick.db').fetch(`TicketControl_${message.channel.id}`),
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        }, {
            id: member.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
        }, {
            id: require('quick.db').fetch(`TicketAdminRole_${message.guild.id}`),
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }, {
            id: message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        }]).then(() => {
            message.channel.send({
                embed: {
                    title: '✅',
                    description: `${txt} Has Been Added To This Ticket.`,
                    color: 0x00D700
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
        })
    }
}

/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/