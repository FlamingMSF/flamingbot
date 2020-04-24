const commando = require("discord.js-commando")
const discord = require('discord.js')
const RichEmbed = require("discord.js")
const bot = new commando.Client();

const token = require('./token.json');
var prefix = token.botPrefix
var owner = token.ownerID

bot.on("message", message => {
    if (message.content === `${prefix}ping` && (message.author.id === owner))
        message.channel.send("Ping!").then(m =>{
            let ping =m.createdTimestamp - message.editedTimestamp
            m.edit(`Pong! \`${ping}ms\``)
    })
})
bot.on("message", message => {
    const args = message.content.split(" ").slice(1)
    const text = args.join(" ")
    if (message.content.startsWith(`${prefix}cfam`) && message.author.id === owner){
        if (text === "members"){
            const role = message.guild.roles.cache.find(r => r.name === "Gosu's Fams")
            const gosuRole = (role.members.map(user => user))
            let color = ((1 << 24) * Math.random() | 0).toString(16); 
            const embed = new discord.MessageEmbed()
                .setTitle("Members in Gosu's Fams")
                .addField("​", gosuRole)
                .setColor(`#${color}`)
                .setTimestamp();
            message.channel.send({embed: embed})
        }
        else if (text === "random"){
            const role = message.guild.roles.cache.find(r => r.name === "Gosu's Fams")
            const gosuRole = (role.members.map(user => user))
            const gosuRoleRand = gosuRole[Math.floor(Math.random() * gosuRole.length)]
            let color = ((1 << 24) * Math.random() | 0).toString(16); 
            const embed = new discord.MessageEmbed()
                .setTitle("Random Member in Gosu's Fams")
                .addField("​", gosuRoleRand)
                .setColor(`#${color}`)
                .setTimestamp();
            message.channel.send({embed: embed})
        }
        else{
            let color = ((1 << 24) * Math.random() | 0).toString(16); 
            const embed = new discord.MessageEmbed()
                .setTitle("Error")
                .setColor(`#${color}`)
                .setTimestamp();
            message.channel.send({embed: embed})    
        }
    }
})
bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}members`
    const text = args.join(" ");
    if (message.content.startsWith(arg) && (message.author.id === owner)){
    const role = message.guild.roles.cache.find(role => role.name === `${text}`)
    const mem = role.members.map(user => user).slice(0, 20)
    const embed = new discord.MessageEmbed()
        .setTitle("Members in " + text)
        .addField("​", mem, true)
        .addField("Member Count", role.members.size)
        .setTimestamp();
    message.channel.send({embed: embed})
    }
})

bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}membercount`
    const text = args.join(" ");
    if (message.content.startsWith(arg) && (message.author.id === owner) && (text === "online" || text === "idle" || text === "dnd" || text === "offline")){
        var presenceCount = message.guild.members.cache.filter(m => m.presence.status === `${text}`).size;
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        const embed = new discord.MessageEmbed()
            .addField(`${capitalize(text)} Count`, presenceCount)
            .setTimestamp();
        message.channel.send({embed: embed})
    }
    else if (message.content.startsWith(arg) && (message.author.id === owner) && (text !== "server")){
    const role = message.guild.roles.cache.find(role => role.name === `${text}`)
    const embed = new discord.MessageEmbed()
        .addField("Member Count", role.members.size)
        .setTimestamp();
    message.channel.send({embed: embed})
    }
    else if (message.content.startsWith(arg) && (message.author.id === owner) && (text === "server")){
    const embed = new discord.MessageEmbed()
        .addField("Server Member Count", message.guild.memberCount)
        .setTimestamp();
    message.channel.send({embed: embed})
    }
})

bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}status`
    const text = args.join(" ");
    if (message.content.startsWith(arg) && (message.author.id === owner)){
        if (text === "main"){
        const embed = new discord.MessageEmbed().setTitle("Main Bots' Status");
            if (text === "main"){
            const mainBot = message.guild.roles.cache.find(r => r.name === "Main Bot")
            mainBot.members.forEach((member) => {   
            if (member.presence.status === "online"){
                embed.addField(member.user.username,"<:online:688436294162186299> " + member.presence.status, true);
            }
            else if (member.presence.status === "idle"){
                embed.addField(member.user.username,"<:idle:688436257113768057> " + member.presence.status, true);
            }
            else if (member.presence.status === "dnd"){
                embed.addField(member.user.username, "<:dnd:688436211710427170> " + member.presence.status,true);
            }
            else if (member.presence.status === "offline"){
                embed.addField(member.user.username,"<:offline:688441593233014951> " + member.presence.status, true);
            }
            })
            }
        message.channel.send({embed: embed})
        }
        else if (text === "norm"){
        const embed = new discord.MessageEmbed().setTitle("Normal Bots' Status");    
            if (text === "norm"){
                const normBot = message.guild.roles.cache.find(r => r.name === "Bot")
                normBot.members.forEach((member) => {   
            if (member.presence.status === "online"){
                embed.addField(member.user.username,"<:online:688436294162186299> " + member.presence.status, true);
                }
            else if (member.presence.status === "idle"){
                embed.addField(member.user.username,"<:idle:688436257113768057> " + member.presence.status, true);
                }
            else if (member.presence.status === "dnd"){
                embed.addField(member.user.username, "<:dnd:688436211710427170> " + member.presence.status, true);
                }
            else if (member.presence.status === "offline"){
                    embed.addField(member.user.username,"<:offline:688441593233014951> " + member.presence.status, true);
                    }
            })    
        }
        message.channel.send({embed: embed})
    }
        else if (text === "music"){
        const embed = new discord.MessageEmbed().setTitle("Music Bots' Status");    
            if (text === "music"){
                const musicBot = message.guild.roles.cache.find(r => r.name === "Music Bots")
                musicBot.members.forEach((member) => {   
            if (member.presence.status === "online"){
                embed.addField(member.user.username,"<:online:688436294162186299> " + member.presence.status, true);
                }
            else if (member.presence.status === "idle"){
                embed.addField(member.user.username,"<:idle:688436257113768057> " + member.presence.status, true);
                }
            else if (member.presence.status === "dnd"){
                embed.addField(member.user.username, "<:dnd:688436211710427170> " + member.presence.status, true);
                }
            else if (member.presence.status === "offline"){
                embed.addField(member.user.username,"<:offline:688441593233014951> " + member.presence.status, true);
                }
            })
        }
        message.channel.send({embed: embed})
    }
        else{
        const embed = new discord.MessageEmbed().setTitle("Error")
        message.channel.send({embed: embed})
        }
}})
//const normBot = message.guild.roles.cache.find(r => r.name === `Bots`)
bot.on('message', message => {
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}embed`
    const text = args.join(" ");
    let color = ((1 << 24) * Math.random() | 0).toString(16); 
    if(message.content.startsWith(arg) && (message.author.id === owner)){
    const embed = new discord.MessageEmbed()
        .addField('Message', '\n \`\`\`' + text + '\`\`\`')
        .setAuthor(message.author.username + '\'s Embed', message.author.displayAvatarURL())
        .setColor(`#${color}`)
        .setTimestamp();
  message.delete()
  message.channel.send({embed: embed})
    }
});
bot.on('message', message => {
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}randomcolor`
    const text = args.join(" ");
    let color = ((1 << 24) * Math.random() | 0).toString(16); 
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    if(message.content.startsWith(arg) && (message.author.id === owner)){
    const embed = new discord.MessageEmbed()
        .setTitle('Random Color')
        .addField("Hex", `#${color}`)
        .addField("RGB", hexToRgb(`#${color}`).r + ", " + hexToRgb(`#${color}`).g + ", " + hexToRgb(`#${color}`).b)
        .setColor(`#${color}`)
        .setTimestamp();
    message.delete()
    message.channel.send({embed: embed})
    }
});

bot.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if (message.author.bot) return;
    if(message.content.startsWith(`${prefix}say`)){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
});

bot.on('message', message => {
    const args = message.content.split(" ").slice(1)
    const text = args.join(" ")
    let jk = bot.guilds.cache.get('493164609591574528')
    let emote_req = jk.channels.cache.get('692086660929683506');
    if (message.content.startsWith("f!request")){
        message.delete()
        if (args.length > 2 || args.length <= 1){
            const embed = new discord.MessageEmbed()
                .setTitle(`Command: f!request`)
                .addField("​", "**Usage:** f!request [emoji name] [link]\n**Example:** f!request uwu https://cdn.discordapp.com/emojis/511583505168203806.png?v=1")
                .setTimestamp();
            message.channel.send({embed: embed})
        }
        else{
            const isValidUrl = (string) => {
                try {
                new URL(string);
                return true;
                } catch (_) {
                return false;  
                }
            }
            if (isValidUrl(args[1]) === false){
            const embed = new discord.MessageEmbed()
                .setTitle(`Command: f!request`)
                .addField("​", "**Usage:** f!request [emoji name] [link]\n**Example:** f!request uwu https://cdn.discordapp.com/emojis/511583505168203806.png?v=1")
                .setTimestamp();
            message.channel.send({embed: embed})
            }
            else{
            const embed = new discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setTitle(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setImage(`${args[1]}`)
                .setTimestamp();
            emote_req.send({embed: embed})
            message.channel.send("Request has been processed")
            }
        }
    }
})
bot.on('message', message =>{
    const args = message.content.split(" ").slice(1);
    const arg = `${prefix}famcolor`
    const text = args.join(" ");
    let color = ((1 << 24) * Math.random() | 0).toString(16); 
    if(message.content.startsWith(arg) && (message.author.id === owner)){
    const gosuFams = message.guild.roles.cache.find(r => r.name === "Gosu's Fams")
    const gosuFamsColor = gosuFams.color.toString(16)
    const gosuFamsNewColor = gosuFams.setColor(`${color}`)
    const embed = new discord.MessageEmbed()
        .addField('Previous Color', gosuFamsColor)
        .addField('New Color', `${color}`)
        .setAuthor('Gosu\'s Fams Color')
        .setColor(`#${color}`)
        .setTimestamp();
  message.delete()
  message.channel.send({embed: embed})
    }
})

bot.on('message', message => {
    const args = message.content.split(" ").slice(1)
    const text = args.join(" ")
    if((message.content.startsWith(`${prefix}temp`))  && (message.author.id === owner)){
        message.channel.send(args)
        if(text === "create"){
            message.guild.channels.create( 'temp', { type: 'text'});
        }
        else if(text === "delete"){
            message.guild.channel.delete
        }
    }
})

bot.on('message', message => {
    if (message.content === 'f!restart') {
    if (message.author.id !== owner) return;
    message.channel.send('Restarted.').then(() => {
    process.exit(1)
    bot.login(token.token)
        })
    }
});
//https://discordapp.com/oauth2/authorize?client_id=475114835059933186&permissions=18432&scope=bot&permissions=2134207679

bot.on('message', message => {
    if (message.content === 'f!invite') {
    if (message.author.id !== owner) return;
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=475114835059933186&permissions=18432&scope=bot&permissions=2134207679.')
    }
});

bot.on('message', message => {
    if (message.content === `${prefix}end`) {
    if (message.author.id !== '274909438366973953') return;
    message.channel.send('Ended.').then(() => {
    process.exit(1);
        })
    }
});
bot.on('message', message => {
    const args = message.content
    let afkLogs = message.guild.channels.cache.get("687075634064916501")
    if (message.content.startsWith("?a")){
        const embed = new discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Used \`afk\` command in ${message.channel}\n${args}`)
            .setColor("#2874CC")
        afkLogs.send({embed: embed})
    }
})
bot.on('message', function(message){
    const args = parseInt(message.content.split(" ").slice(1))
    if(message.content.startsWith(`${prefix}prune`))
    message.channel.messages.fetch({ limit: args+1 })
    .then(fetched => {
      const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
  
      message.channel.bulkDelete(notPinned, true);
    })
    .catch(console.error);
});
bot.on('ready', function(){
    console.log("Ready")
});
bot.login(TOKEN)
