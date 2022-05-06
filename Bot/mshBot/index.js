const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]});

const fs = require('fs');

const discordVoice = require('@discordjs/voice');
const player = new discordVoice.AudioPlayer;

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

const handlers = ['commandHandler', 'eventHandler'];
handlers.forEach(handler => 
    {
        require(`./handlers/${handler}`)(client, Discord, player);
    })

client.login('');
