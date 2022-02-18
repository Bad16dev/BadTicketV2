const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'transcript',
	category: 'Ticket',
	description: 'Trascripts a specified ticket.',
	aliases: [],
	usage: 'transcript',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('An Error Occurred, Please Try Again.');
					}
message.react('887650847327158343');
					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					message.reply('The Transcript Is Complete. Please Click The Link Below To View The Transcript.', embed);
				});
			}
		}
		else {
			return message.reply(
				'You Cannot Use This Command Here. Please Use This Command In A Open Ticket.',
			);
		}
	},
};

/**********************************************************
 * Bot Coded by Odqin Hope.#3890 | https://discord.gg/CkXfzjYVJw
 *********************************************************/