const { ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scan')
		.setDescription('detect other computer linked'),
	async execute(interaction, client) {
		const channel = client.channels.cache.get('1071047084230316045');
		const member = await client.users.fetch('144531366606929921');
		channel.permissionOverwrites.edit(interaction.user.id, { ViewChannel: true });
		console.log('member user',member  );
		channel.permissionOverwrites.edit(member.id, { ViewChannel: true });

		await interaction.reply(`scan ok pour ${interaction.user.username} #${interaction.user.id}`);
	},
};