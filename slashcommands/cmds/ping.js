module.exports = {
    name: 'ping',
    description: 'Ping LOL',
    commandOptions: null,
    global: true,

    async execute (interaction, client)  {
   client.api.interactions(interaction.id, interaction.token).callback.post({data: {
            type: 4,
            data: {
                    content: `:ping_pong: Pong: ${client.ws.ping}ms!`
                }
            }
        })
    },
}
