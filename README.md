# discordbot
nodejs
avoir installer discord.js dans le meme repertoire que l'install d'origine de nodejs
npm install -g discord.js
npm install mysql 
( mysql npm est juste un driver ) il faut installer et lancer wamp ou autre mysql en plus



deployer les nouvelles   commands / du bot via :
node deploy-commands

et lancer le bot via
node index.js dans le dossier du bot


config.js :
 clientid = /* clientid du bot setting/Oauth2 */
 guildid = /* identifiant du salon a rejoindre */
 
 enregistrement du bot dans le salon  clientid du bot setting/Oauth2 :
 https://discord.com/api/oauth2/authorize?client_id=889204644792897546&permissions=405874670592&scope=bot%20applications.commands
 
 https://discord.com/developers/applications/889204644792897546/oauth2/general
 
 guide discord.js : 
 https://discordjs.guide/#before-you-begin
