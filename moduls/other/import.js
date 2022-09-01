module.exports = client => {
    require("./autodelete")(client)
    require("./autoreact")(client)
    require("./feedback_system")(client)
    require("./selfrolles")(client)
    require("./status_rollen")(client)
    require("./ticket_updatemessage")(client)
    require("./welcome")(client)
    require("./guess_the_number")(client)
    require("../ticketsystem/main")(client)
    require("../spielersuche/index")(client)
    //require("./nodestats")(client)
}
/**
 * @Creator
 * made byGamerDave08#4154
 * @Information
 * Sag nicht das du den bot geschrieben hast 
 * @Github
 * https://github.com/gamerdave08/ce-main-bot
 */