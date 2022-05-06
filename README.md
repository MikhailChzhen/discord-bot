# discord-bot

How to set up the bot:

1. Create a Discord account if necessary and be in a server where you have administrator permissions
2. Go to https://discord.com/developers/applications (the Discord Developper Portal) and click "New Application" and enter a name for the application
3. Click the "Bot" tab on the left, and in the Build-a-Bot section and click "Add Bot" and confirm doing so in the confirmation pop-up
4. Find the Tokens section under the new bot and generate a token and copy it into your clipboard or a text document as the token cannot be revealed again without resetting
5. Go to the file mshBot/index.js and put the token inside of the single quotation on the last line (should look something like this: client.login('TOKEN HERE'); )
6. Go back to the tab with the newly-created application in the Discord Developper Portal and click on "OAuth2" tab on the left and click the "URL Generator" sub-tab
7. Within the "Scopes" section select "bot", and in the "Bot Permissions" section which will appear select "Administrator"
8. Copy and go to the generated URL and select the server you want to use the bot in
9. Launch the code for the bot in this file using the command 'node .'
10. The bot should be fully functional now

Additional help for getting the token: https://www.writebots.com/discord-bot-token/

Commands:

!ping - Checks if bot is online. If so, the bot should reply with "Pong!"
!play - Joins your voice channel and plays the top result of your argument when entered into YouTube
!pause - Pauses/resumes the bot
!skip - Ends the current video playing
!leave - Makes the bot leave the voice channel
