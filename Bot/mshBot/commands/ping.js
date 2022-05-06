module.exports = 
{
    name: 'ping',
    description: "Standard testing command, pong!",
    execute(client, message, args, Discord, player)
    {
        message.channel.send('pong!');
    }
}