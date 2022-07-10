# Kyuta Bot - Minecraft ChatBridge

<p align="center"> 
    <img src="https://cdn.discordapp.com/attachments/967294984216797204/994828596013170698/unknown.png?size=4096">
</p>


Kyuta is discord chat-bridge integration for minecraft based on the [bedrock-protocol](https://github.com/PrismarineJS/bedrock-protocol) library and functions similarly to [! Pixel](https://github.com/0x506978656c)'s BDScord. Simply put we are attaching a dummy client to the selected multiplayer server and using that dummy account to intercept incoming and outgoing packets to read them and transmit their data. While application such as BDScord have more server modding capibilities, Kyuta can be used on any server desipte whether you have access to server files or not.


# Commands - Usage
After [installing the bot](https://github.com/Sierrawastaken/kyuta-bot#installation) to get started all you simply have to do is run `k!help` to get a list of all the commands and how to use them. Here is a more detailed description of the useful commands:
* Listen
    
    To iniate listening to a server run the command `k!listen` followed by the host, port, and version of the server you wish to connect to. A fully completed command will look like this: `k!listen 127.0.0.1 19132 1.17.40` . No commas need to be added inbetween paramaters.
    
    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994855342984933446/unknown.png?size=4096">
    </p>

    Once listening to a server Kyuta will bridge all messages inbetween the discord channel and Mincraft. Using the prefix `%runraw%` before any minecraft command will run it ingame just as normal, for example sending the message `%runraw%summon creeper 1 20 1`, will summon a creeper at 1, 20, 1. (This works well in tandem with [TrapDoor](https://github.com/hhhxiao/TrapDoor) to be able to see farm rates / server performance without having to be ingame!)

* Ping

    To ping a server simply run `k!ping` with the same paramaters as listen, except the version isnt needed. The ping command will return basic information about the queried server such as: the Header, Players Online, Max PLayers, Gamemode, Server ID, and Protocol

* Register

    The Register command is an optional command that will register information on the user running the command to an internal database to personalize their webhooks. To use the command properly nickname yourself as your ingame name and run the command. Your nickname, username, highest role colour, and your profile picture will be stored to customize your webhooks and help people know who is who. These two pictures below demonstate this, the first is without registration and the second is with registration

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994854298787774494/WithoutRegistraion.png?size=4096">
    </p>

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994854304173269062/WithRegistration.png?size=4096">
    </p>
    
    As you can see the webhook will change to be more personalized with the registration. Server Admins can also manually register user with the following syntax: `k!register manual nickname avatarURL hexcolour`

Once you gave finished the setup you are ready to work! Here are a few extra tidbits i dont know where else to put:

* Sadly there are no ways currently to send an image ingame so this will have to suffice

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994856293410025472/unknown.png?size=4096">
    </p>

* Replying is just translated like this so no one gets confused about who is speaking to who

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994856675255259146/unknown.png?size=4096">
    </p>

* Markdowns are translated both to discord and from discord, unfortunately underlining and strikethrough dont work minecraft side cause of [this annoying bug](https://bugs.mojang.com/browse/MCPE-41729). (Please upvote!)
    
    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994857571003404410/unknown.png?size=4096">
    </p>

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994857639760642068/unknown.png?size=4096">
    </p>

* Other basic features such as leaving, joining, and dying are all displayed aswell - commands are logged internally or can be output if  `"sendCommands"` is set to true.

    <p align="center"> 
        <img src="https://cdn.discordapp.com/attachments/967294984216797204/994858512616276009/unknown.png?size=4096">
    </p>

# Installation

To start the instalation setup download the latest [release](https://github.com/Sierrawastaken/Kyuta-bot/releases) and unzip it. Then once inside the folder create a new file called `config.json` and create a new config file using this format - you dont have to copy the comments though as they will throw some errors.
    
    {   
        // fill these values out with yours
        "token": "YOUR BOT TOKEN HERE",
        "webhook": "YOUR WEBHOOK LINK HERE",
        "botAv": "YOUR BOT AVATAR LINK HERE",
        "adminRoleId": "YOUR ADMIN ROL ID HERE",

        // you can change these whenever this is just the default
        "prefix": "k!",
        "runRawPrefix":"%runraw%",

        // if set to true DynamicListening will ask for a new host everytime
        // rather than using whats set in the config - useful if non-hosters are
        // setting up / using it
        "DynamicListening": true,
        
        // if set to true commands run will be output to the discord
        // through the webhook
        "sendCommands": true,

        // Set to true if you have TrapDoor injected - it changes command parsing
        "TapdoorInjected": false,

        // this will be used if DynamicListening is set to false
        // or if you enter no paramaters
        "host": "127.0.0.1",
        "port": 19132,
        "version": "1.17.40"
    }

Once you have created your config file you can run your bot. First open up a terminal (make sure you are in the right directory) and run `npm install`. This will install all the required packages from the `packages.json` file. After thats finished installing you should be all ready to run the bot - simply run `npm start` to start it up. You should see the terminal log `logged in as Kyuta` or whatever you named your bot. Thats it! Its all set up, simply run `k!help` or read above to use it from there.

### Made by Sierra#7079 with love :lovethat:
Join [Auxo](https://discord.gg/zqaptYWChM) or [Stratos](https://discord.gg/fcfGwZva8d) if you need help with anything!