require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong');
  }
});
