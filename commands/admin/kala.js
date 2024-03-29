const blacklist = require('../../models/blacklist')
const { Message } = require('discord.js')

module.exports = {
    name : 'kala',
    
    run : async(client, message, args) => {
        if(message.author.id !== '844825143381590016') return message.channel.send('This is an owner only command.')
        const User = message.mentions.members.first();
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`Is alredy blacklisted has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User} has been added to blacklist.`)
            }
           
        })
    }
}
