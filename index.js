const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong');
  }
});

client.login('MTIxNjAzMjkxNDIyNDA1ODM4OA.GPtTuc.4jvoPmccvlS7VIg9H44f92TCKl57txH4aCw-tw');
