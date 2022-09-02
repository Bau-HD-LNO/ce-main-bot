# ce-main-bot
Ein Discord Bot der Fast alles was man braucht kann

<b>Schritt 1 (ändern der configurationen)</b>

<p>Die Datei befindet sich unter /botconfig/config.json</p>

<p style="text-align:center ;">consfig.json</p>

```json
{
    "token":"Discord Bot token",
    "welcchannel":"Willkommens channel id",
    "owner":[""],
    "prefix":".",
    "Statusrollen":{
        "statustxt1":"dsc.gg/chilleckede",
        "statustxt2":"chillecke",
        "guildid":"993154733659390022",
        "roleid":"1002525394802581574"
    },
    "selfroles": {
        "farbe":{
            "Red":"996376009052012646",
            "Purple":"996376009593065482",
            "Green":"996376009718902805",
            "Pink":"996376010675212380",
            "Orange":"996376011065282581",
            "Yellow":"996376011279192085",
            "Blue":"996376012155781220"
        },
        "herkunft": {
            "Europe":"996376092694818877",
            "North_America":"996376093294592010",
            "South_America":"996376093814685736",
            "Asia":"996376094330597416",
            "Oceania":"996376094712266822",
            "Africa":"996376095232364554"
        },
        "plattform":{
            "PC":"996376043403362305",
            "XBOX":"996376044460310588",
            "Playstation":"996376048063221851",
            "Switch":"996376048876916846",
            "Mobile":"996376049602539620"
        }
    },
    "servers": {
    },
    "passwords": {
    },
    "usernames": {
    }
}
```

<p style="text-align:center ;">Settings.json</p>

```json

{
    "chilleckegid":"Deine Server ID",
    "ads_channel":"werbe channel id",
    "autodeletechannel":"Auto delete channel id",
    "vemojis":["emoji 1","emoji 2","emoji 2"],
    "feedbackchannel":"feedback channel id",
    "feedback_emojis":["🥰", "🤩", "😎", "😇", "😍", "🙃", "💝", "❤️", "👀", "🟢", "✅", "🔥", "🌊", "✨", "💫", "💯", "👑", "💓", "💞", "🙏"],
    "ticket_umsg":{
        "guild":"993154733659390022",
        "chid":"996856753113288856",
        "msgid":"1002726536006357003",
        "supportid":"998671714386976788"
    },
    "paypal":{
        "clientconfig":{
             "clientsecret":"",
             "clientid":""
            },
        "Discord":{
            "guildid":"",
            "logchannel":"",
            "adminlogs":""
        }
       
    },
    "guess_the_number":{
        "channel":"guess the number channel id"
    },
    "ticketsystem":{
        "supportrole":"supporter rollen id für das ticket System",
        "parentid":"Kategory Id für das Ticket system"
    }
}
```

<b>Schritt 2 (Instalation von packages)</b>
`npm i `

`node .`
<hr>
<h2>Optionale Einstellungen</h2>
<details>
  <summary>Node Stats</summary>
    <h2>Ersetze die js Datei in /moduls/other/import.js durch </h2>
    
    <h2>Und trage die server in /botconfig/config.json ein</h2>
    
    ```json 
     "servers": {
    "node1":"ipadresse",
    "node2":"ipadresse"
    },
    "passwords": {
    "node1":"serverpasswort",
    "node2":"serverpasswort"
    },
    "usernames": {
    "node1":"username"
    "node2":"username"
    }
    ```
    
</details>
                                    
<hr>
<h5>Diese readme wurde wegen <a href="https://discord.com/users/925802573506674729">HyperGaming</a> angelegt, da er es nicht selber schafft</h5>
<h1>Viel Spaß mit dem bot</h1>
