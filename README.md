## Devluxe's Discord Bot (DDB)
A Discord bot that is updated daily for you. You can use it as is or modify it according to your needs. I want to provide "inexperienced" people with a Discord bot with a few commands :).

> [!NOTE]
> We start with the first condition you need to fulfill before starting the bot.
> We are using the **discord.js** version `@14.14.1` for this Discord bot, That means you need to download the required packages for our Discord bot in your project folder.
> You do this with the following command: `npm install discord.js@14.14.1`

> [!IMPORTANT]
> The bot is currently in progress, and new packages will be added in the future. Please check this occasionally to stay up to date.

<details>
      <summary>Spoiler</summary>

      This Discord Bot can be used to get the Discord Active Developer badge. (if you run the bot, and executed the /help command, wait 24 hours and go to this site: https://discord.com/developers/active-developer)
</details>


# Bot development:
- We have now written the first functions to make the bot run and respond to a slash command like `/help`.
- We have stored all the packages in the config.json file.
- The **bot ID**, **Guild ID**, and the **Client ID** (Bot ID) are stored in the config.json file.

# What do I need to do?:
- 1.) First, you need to create a bot application here: https://discord.com/developers/applications
- 2.) Once you have done this, go to the "General Information" tab, where you will find the Application ID (Client ID) and the Bot Token for your project.
- 3.) Then go to the "Bot" tab and enable 3 intents: PRESENCE INTENT, SERVER MEMBERS INTENT, and MESSAGE CONTENT INTENT.
- 4.) Download the required files from Github (Download in ZIP archive).
- 5.) Unpack the ZIP file on your system (Under Linux, use the command: `unzip <file>`).
- 6.) Once you have the files `app.js`, `config.json` in your directory where the Discord modules are (which you installed earlier with `npm install discord.js@14.14.01`), you can now edit the `config.json` (Guild ID (Server ID), Client ID (Bot ID).
- 7.) If you done that, you can start the Bot now with the command: `node app.js`.
