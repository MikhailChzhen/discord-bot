const discordVoice = require('@discordjs/voice');

module.exports = 
{
    name: 'pause',
    description: "Pauses or resumes music from YouTube",
    async execute(client, message, args, Discord, player)
    {
        if (player.state.status === discordVoice.AudioPlayerStatus.Playing)
        {
            player.pause();
            await message.reply('Video paused!')
        }
        else if (player.state.status === discordVoice.AudioPlayerStatus.Paused)
        {
            player.unpause();
            await message.reply('Video resumed!')
        }
        else
        {
            message.channel.send('No music playing!')
        }
    }
}