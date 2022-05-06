const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const discordVoice = require('@discordjs/voice');

module.exports = 
{
    name: 'play',
    description: "Plays music from YouTube",
    async execute(client, message, args, Discord, player)
    {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel');

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.channel.send('I have insufficient permissions');

        if(!args.length) return message.channel.send('Please enter an argument')

        const connection = await discordVoice.joinVoiceChannel({channelId: voiceChannel.id, guildId: voiceChannel.guild.id, adapterCreator: voiceChannel.guild.voiceAdapterCreator,});

        const videoFinder = async(query) =>
        {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        connection.subscribe(player);
        const video = await videoFinder(args.join(' '));
        if (video)
        {
            const resource = discordVoice.createAudioResource(ytdl(video.url));
            player.play(resource);

            await message.reply(`Now playing ${video.title}`)
        }
        else
        {
            message.channel.send('Couldn\'t find any results')
        }
    }
}