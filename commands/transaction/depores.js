module.exports = [{
name: "SUCCESS",
code: `


$sendDm[{
    newEmbed:
    {author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
    {title:Depo Successfully!}
    {description:
    You Have Successfully Depo $message[2]!
    Now You Have $getGlobalUserVar[rocoin;$message[1]]
    }
    {color:#00ff00}
    {footer:Rocord}
    {timestamps}
};$message[1]]
$onlyif[$isUserDmEnabled[$message[1]]==true;]

$setGlobalUserVar[rocoin;$math[$getGlobalUserVar[rocoin;$message[1]]+$message[2]];$message[1]]

$onlyForIDs[1128899042081001502;]

`
},
{
name: "FAIL",
code: `
$sendDm[{
    newEmbed:
    {author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
    {title:Depo Failed!}
    {description:
    Your $message[2] Depo Have Failed!
    Please Check Again If You Have Enough Robux To Depo
    Reason:
    $replaceText[$message;$message[1] $message[2];]
    }
    {color:#ff0000}
    {footer:Rocord}
    {timestamps}
};$message[1]]
$onlyif[$isUserDmEnabled[$message[1]]==true;]

$onlyForIDs[1128899042081001502;]
`
},
{
name: "ERROR",
code: `
$sendDm[{
    newEmbed:
    {author:$username[$interactionData[author.id]]:$userAvatar[$interactionData[author.id]]}{thumbnail:https://media.discordapp.net/attachments/938792218037198868/1127442461573255168/image.png}
    {title:Depo Failed!}
    {description:
    Your $message[2] Depo Have Failed!
    Please Check Again If You Have Provide A Valid Cookie!
    Reason:
    $replaceText[$message;$message[1] $message[2];]
    }
    {color:#ff0000}
    {footer:Rocord}
    {timestamps}
};$message[1]]
$onlyif[$isUserDmEnabled[$message[1]]==true;]

$onlyForIDs[1128899042081001502;]
`
}]


/**
 * r.SUCCESS uid amo tt reason: rs purchased? t/f
              1   2  3    4
    r.SUCCESS ${uid} 5 ${jayson.title} reason: ${jayson.reason} purchased? ${jayson.purchased}
    ERROR 686810200732467250 ammount undefined reason: undefined purchased? undefined
 */