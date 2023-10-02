import { Client, GatewayIntentBits } from 'discord.js';
import { fetchData } from './ETHPrice';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();
const api = "https://api.coinranking.com/v2/coin/razxDUgYGNAdQ";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'swop') {
    await interaction.reply('Swop is a useful tool for content creators to share their work and connect with their audience!');
  } else if (interaction.commandName === 'ethprice') {
    const price = await fetchData(api); 
    await interaction.reply(`The Current price of Ethereum is ${price}`);
  } else if (interaction.commandName === 'user') {
    await interaction.reply(`Hellow, ${interaction.user.username}, you joined this server on ${interaction.member.joinedAt}.`);
  }
});

client.login(process.env.TOKEN);