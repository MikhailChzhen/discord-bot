const discordVoice = require('@discordjs/voice');

module.exports = 
{
    name: 'leave',
    description: "Leaves the voice channel",
    async execute(client, message, args, Discord, player)
    {
        const connection = discordVoice.getVoiceConnection(message.member.voice.channel.guild.id);
        if (connection)
        {
            connection.destroy();
        }
        else
        {
            message.channel.send('Not in a voice channel!')
        }
    }
}