const { REST, Routes } = require('discord.js') ;
require('dotenv').config();

const commands = [
  {
    name: 'swop',
    description: 'About Swop!',
  },
  {
    name: 'ethprice',
    description: 'Responsd with current ETH price!'
  },
  {
    name: 'user',
    description: 'Respond with user joining date!'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_ID);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
