module.exports = [{
name: 'connect',
aliases: 'conn',
code: `
$author[$username[$authorID];$userAvatar[$authorID]]
$thumbnail[https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png]
$description[
# Connect To Roblox Account

***Welcome! We’re excited to have you on board.***
To get started, we’ll need you to provide your **Roblox** information so that our manager can control your account, namely:
- **Username**
- **Password**

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thank you for choosing us!

Click on the **Connect** button below to start.
]
$footer[Rocord]
$addtimestamp
$color[Blue]

$addButton[1;Connect;primary;conn_$authorID;false]

$onlyif[$getGlobalUserVar[reqsending]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Already Have 1 Request Sending!}{description:
You have a request to connect to account name **$getGlobalUserVar[uname]** which was still in action.
You can cancel the request by \`cancelreq\` command.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

$onlyif[$getGlobalUserVar[connected]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Have Already Connected!}{description:
You have connected with account name **$getGlobalUserVar[uname]**.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[Connect To Roblox Account!;connsent;
{actionRow:
{textInput:Username:1:unameinput:true:roblox username}
}
{actionRow:
{textInput:Password:1:pwordinput:true:roblox password}
}
]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"embeds" : "{newEmbed:{description:Not Your Button!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==conn;]
`
},{
name: "connsent",
type: "interaction",
prototype: "modal",
code: `

$ifAwaited[$getObjectProperty[data[0]]==undefined;{execute:notfound};{execute:found}]

$let[rbxav;$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$getObjectProperty[data[0].id]&size=720x720&format=Png&isCircular=false;data[0].imageUrl]]

$createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$textinputvalue[unameinput]"],"excludeBannedUsers":true};;content-Type:text/json]]

$onlyif[$getGlobalUserVar[reqsending]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Already Have 1 Request Sending!}{description:
You have a request to connect to account name **$getGlobalUserVar[uname]** which was still in action.
You can cancel the request by \`cancelreq\` command.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

$onlyif[$getGlobalUserVar[connected]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Have Already Connected!}{description:
You have connected with account name **$getGlobalUserVar[uname]**.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

`
}, {
name: "notfound",
type: "awaited",
code: `
$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# No Roblox Account Found!
Please Enter A Valid Account!
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}
]

`
},{
name: "found",
type: "awaited",
code: `

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Account Name $textinputvalue[unameinput] Found!

Check again if this is your account!
If its correct, click on the **Send Request** button below to send your connection request.
}
{field:Username:\`\`\`
$getObjectProperty[data[0].name]
\`\`\`:false}
{field:Display Name:\`\`\`
$getObjectProperty[data[0].displayName]
\`\`\`:false}
{image:$get[rbxav]}
{footer:Rocord}
{timestamp}
{color:#00ff00}};
{actionRow:{button:Send Request:success:sendreq_$interactionData[author.id]:false}}
]

$setGlobalUserVar[avt;$get[rbxav];$interactionData[author.id]]
$setGlobalUserVar[uname;$getObjectProperty[data[0].name];$interactionData[author.id]]
$setGlobalUserVar[pword;$textinputvalue[pwordinput];$interactionData[author.id]]

$onlyif[$getGlobalUserVar[connected;$interactionData[author.id]]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Have Already Connected!}{description:
You have connected with account name **$getGlobalUserVar[uname;$interactionData[author.id]]**.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

`
},{
type: "interaction",
prototype: "button",
code: `

$channelSendMessage[1127828796947578910;
{newEmbed:
{author:$username:$userAvatar}
{thumbnail:$get[rbxav]}
{title:New Connection Request!}
{description:
**Username:**
\`\`\`
$getglobaluservar[uname]
\`\`\`
**Password:**
\`\`\`
$getglobaluservar[pword]
\`\`\`
}
{footer:Rocord}
{timestamp}
{color:#ffffff}}
{actionRow:{button:Connected:success:connected_$interactionData[author.id]:false} 
{button:U/P Wrong:danger:upwrong_$interactionData[author.id]:false}
{button:2-Step:secondary:2sv_$interactionData[author.id]:false}}
]

$setglobaluservar[avt;$get[rbxav];$interactionData[author.id]]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:Request Sent!}
{description:
*** Your request to connect with your account name __$getGlobalUserVar[uname]__ has been sent.***
*Please wait for your request to be approved. You will be announce if the connection is success or there is some problem*

**The connection will be fail if:**
- Wrong **Username** or **Password** provided
- Some technical issue from the bot

**You will need to provide more information if:**
- 2-Step Verification code (if you have 2-step verify turned on)
...

}
{field:Username:\`\`\`
$getObjectProperty[data[0].name]
\`\`\`:false}
{field:Display Name:\`\`\`
$getObjectProperty[data[0].displayName]
\`\`\`:false}
{image:$get[rbxav]}
{footer:Rocord}
{timestamp}
{color:#00ff00}
}
]

$let[rbxav;$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$getObjectProperty[data[0].id]&size=720x720&format=Png&isCircular=false;data[0].imageUrl]]

$createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$getGlobaluservar[uname]"],"excludeBannedUsers":true};;content-Type:text/json]]

$setGlobalUserVar[reqsending;true]

$onlyif[$isUserDmEnabled[$interactionData[author.id]]==true;{
"embeds" : "{newEmbed:{description:You must enable your DM so that you could get the announcement of your request!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyif[$getGlobalUserVar[connected;$interactionData[author.id]]==false;{newEmbed:
{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:You Have Already Connected!}{description:
You have connected with account name **$getGlobalUserVar[uname;$interactionData[author.id]]**.
}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}]

$onlyif[$getGlobalUserVar[reqsending;$interactionData[author.id]]==false;{
"embeds" : \`{newEmbed:{author:$username:$userAvatar}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}{title:You Already Have 1 Request Sending!}{description:
You have a request to connect to account name **$getGlobalUserVar[uname;$interactionData[author.id]]** which was still in action.
You can cancel the request by \`cancelreq\` command.
}{footer:Rocord}{timestamp}{color:#ff0000}
}\`,
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"embeds" : "{newEmbed:{description:Not Your Button!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sendreq;]
`
}]

