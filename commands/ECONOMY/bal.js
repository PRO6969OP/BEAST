const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require('discord.js');

module.exports = {
   name: 'bal',
   description: '',
   aliases: '',
   usage: '',
   timeout: '',
   cooldown: '',
   run: async (client, message, args) => {
       const target = message.author || message.mentions.members.first();
       const bal = await client.bal(target.id)
       const embed = new MessageEmbed();
       embed.setTitle(`Balance of ${target.username}`)
       embed.setDescription(`${target} has \``+ bal + '\` 🪙')
       embed.setColor(`BLUE`)
       message.channel.send(embed);

   } 
} 