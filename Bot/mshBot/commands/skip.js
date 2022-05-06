const discordVoice = require('@discordjs/voice');

module.exports = 
{
    name: 'skip',
    description: "Skips the current song",
    async execute(client, message, args, Discord, player)
    {
        if (player.state.status === discordVoice.AudioPlayerStatus.Playing || discordVoice.AudioPlayerStatus.Paused)
        {
            player.stop();
            await message.reply('Video skipped!')
        }
        else
        {
            message.channel.send('No music playing!')
        }
    }
}