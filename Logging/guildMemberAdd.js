const Discord = require('discord.js')
module.exports = async (member) => {
  const Guild = require('../models/guild');
        const guildDB = await Guild.findOne({
            guildID: member.guild.id
        }, async (err, guild) => {
            if (err) console.error(err);
            
            if (!guild) {
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: member.guild.id,
                    guildName: member.guild.name,
                    prefix: process.env.PREFIX,
                    logChannelID: null
                });

                await newGuild.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));
            };
        });

        const logChannel = member.guild.channels.cache.get(guildDB.logChannelID);

          if (!logChannel) {
            return
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Guild Member Add ${member.username}`)
                
                .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                .setDescription(`${member} Joined The server`)
                .setTimestamp();

            return logChannel.send(embed);
          }
  
}
