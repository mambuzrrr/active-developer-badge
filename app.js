const config = require('./config.json');

const { Client, GatewayIntentBits } = require(config.modules[0]);
const { REST } = require(config.modules[1]);
const { Routes } = require(config.modules[2]);
const { SlashCommandBuilder } = require(config.modules[3]);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

const commands = [
  new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display help information.')
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
  Routes.applicationGuildCommands(config.clientId, config.guildId),
  { body: commands },
);

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'help') {
    await interaction.reply('Here is the help information.'); // Here is the response to "/help".
  }
});

client.login(config.token);
