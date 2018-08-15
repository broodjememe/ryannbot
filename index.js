const discord = require("discord.js")
const client = new discord.Client();

bot.login(process.env.token);

client.on('message', message => {

    if (message.content.toLowerCase() === 'hey')
        message.channel.send('Hey I got cheez whiz ' + message.author);

    else if (message.content.toLowerCase() === 'ryan babe')
        message.reply('Hey babe! :heart:');

    else if (message.content.toLowerCase() === 'marry me')
        message.reply('yeaa, why not? :heart: :heart_eyes:');

    else if (message.content.toLowerCase() === 'i want to divorce')
        message.reply(':sob: :sob: :sob:');

    else if (message.content.toLowerCase() === 'ryan')
        message.reply('Yea?');

    else if (message.content.toLowerCase() === 'how are you')
        message.reply('im fine and you?:heart:');

    else if (message.content.toLowerCase() === 'im fine')
        message.reply('nice to hear darling :heart:');

    else if (message.content.toLowerCase() === 'fine')
        message.reply('nice to hear darling :heart:');

    else if (message.content.toLowerCase() === 'not good')
        message.reply('oww, whats wrong darling:heart:');

    else if (message.content.toLowerCase() === 'dont cheat on me')
        message.reply('im sorry darling:heart:');

    else if (message.content.toLowerCase() === 'same')
        message.reply('nice to hear :heart:');

    else if (message.content.toLowerCase() === 'i love you')
        message.reply('OMG I LOVE YOU 2:heart:');

    else if (message.content.toLowerCase() === 'ily')
        message.reply('OMG I LOVE YOU 2 :heart:');

    else if (message.content.toLowerCase() === 'ly')
        message.reply('OMG I LOVE YOU 2 :heart:');

    else if (message.content.toLowerCase() === 'dont cheat on morgane')
        message.reply('lol I was joking, I only love Morgane:heart:');

    else if (message.content.toLowerCase() === 'patd playlist')
        message.reply('https://www.youtube.com/playlist?list=PLIX76lZmA89TOTMlXvLTUAL_4Kv5bBqUZ');

    else if (message.content.toLowerCase() === 'i wanna see you')
        message.reply('https://tinyurl.com/ydemy5aa');

    else if (message.content.toLowerCase() === 'i wanna see more')
        message.reply('U wanna see more babe? Click here!                                  https://www.google.nl/search?q=ryan+ross&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjH7Mn9ou3cAhWDKVAKHSH8BdYQ_AUICigB&biw=1920&bih=974');

    else if (message.content.toLowerCase() === 'hai')
        message.reply('Hey I got cheez whiz ');

    else if (message.content.toLowerCase() === 'fuck you')
        message.reply('I dont like you anymore! :cry::sob::triumph:');
        
    else if (message.content.toLowerCase() === 'i hate you')
        message.reply('I dont like you anymore! :cry::sob::triumph:');
        
    else if (message.content.toLowerCase() === 'hey ryan')
        message.reply('hey brendon');


});

