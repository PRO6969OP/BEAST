const Discord = require("discord.js")
module.exports = {
    name: 'quick-embed',
    
    description: 'embedgen',
  
    run: async(client, message, args) => {
       
        try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send("Reply `skip` or `no` for next question, Reply `cancel` to stop the command.");
    
            //===============================================================================================
            // Getting Title
            message.channel.send("So, Do you want your embed to have any title?");
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);
    
            //===============================================================================================
            // Getting Description
            message.channel.send("great, now o you want your embed to have any Description?");
            let Description = await message.channel.awaitMessages(filter, options);
            if (Description.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);
    
            //===============================================================================================
            // Getting Footer
            message.channel.send("So, Do you want your embed to have any Footer?");
            let Footer = await message.channel.awaitMessages(filter, options);
            if (Footer.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled. ')
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content); 
    
            //===============================================================================================
            // Getting URL
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') {
                message.channel.send("So, Do you want your embed to have any masked link on title?, say `no` if you do not have set title");
                let URL = await message.channel.awaitMessages(filter, options);
                if (URL.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
                if (URL.first().content !== 'skip' && URL.first().content !== 'cancel') embed.setURL(URL.first().content);
            }
    
            //===============================================================================================
            // Getting Color
            message.channel.send("So, Do you want your embed to have any specifci color? Default is Black");
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")
    
            //===============================================================================================
            // Getting Author Field
            message.channel.send("So, Do you want your embed to have any Author Field?");
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);
    
            //===============================================================================================
            // Getting TimeStamp
            message.channel.send("So, Do you want your embed to have any TimeStamp? Reply `yes` or `no`");
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send('Embed Generator Cancelled.')
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();
    
            message.channel.send(embed)
        } catch (error) {
            console.error(error);
        }
    }
}
    
