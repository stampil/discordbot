const fs = require('node:fs');
const path = require('node:path');
const mysql = require('mysql');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const db = mysql.createConnection({   host: "localhost",   user: "root",   password: "", database:"" });
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données MySQL!"); });
db.query("SELECT * from hs_chapitre",
 function (err, result) {
		if (err) throw err;
		for(var tab in result){
			//console.log(result[tab].nom);
		}    
	}
); 

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {

	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isStringSelectMenu()) return;

	const selected = interaction.values.join(', ');

	await interaction.update(`The user selected ${selected}!`);
});



client.login(token);
