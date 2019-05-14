const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'hawk') {
    msg.reply('efendim  ');
  }
});
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
  }
});
client.on('message', msg => {
  if (msg.content === 'nasılsın') {
    msg.reply('iyi sen ');
  }
});
client.on('message', msg => {
  if (msg.content === 'bu barın sahibi kim ') {
    msg.reply('meliodas bende yardımcısı');
  }
});
client.on('message', msg => {
  if (msg.content === 'menu') {
    msg.reply('biri menu mu dedi hhhh ');
  }
});
client.on('message', msg => {
  if (msg.content === 'keserim seni') {
    msg.reply('ozaman kacar ben ::F   ');
  }
});
client.on('message', msg => {
  if (msg.content === 'garson') {
    msg.reply('yemek geldi geldi konusan domuz gordune sasırma:D');
  }
});
client.login(process.env.BOT_TOKEN);
