let serverGame = server.game;
let statFilePath = "Database/stats.json";

addEventHandler("OnResourceStart", function(event, resource) {
    if (serverGame !== GAME_GTA_III && serverGame !== GAME_GTA_VC && serverGame !== GAME_GTA_SA) {
        console.error("Not running GTA III, GTA VC, or GTA San Andreas");
        return;
    }

    
    const existingData = loadTextFile(statFilePath);
    if (existingData === null) {
        const file = createFile(statFilePath);
        if (file) {
            file.close();
            // console.log("stats.json file created successfully.");
        } else {
            console.error("Failed to create stats.json file.");
        }
    } else {
        // console.log("stats.json file already exists.");
    }

});

function addEntry(entry) {
    const existingData = loadTextFile(statFilePath);
    let entries = [];

    if (existingData !== null && existingData.trim() !== "") {
        try {
            entries = JSON.parse(existingData);
        } catch (error) {
            console.error("Failed to parse existing data:", error);
            return;
        }
    }

    const existingEntryIndex = entries.findIndex(e => e.player === entry.player);
    if (existingEntryIndex !== -1) {
        // Replace existing entry
        entries[existingEntryIndex] = entry;
    } else {
        // Add new entry
        entries.push(entry);
    }

    saveTextFile(statFilePath, JSON.stringify(entries));
}



function getPlayerStats(playerName) {
    const existingData = loadTextFile(statFilePath);

    if (existingData === null) {
        console.log("stats.json file not found or empty.");
        return null;
    }

    if(existingData.trim() !== "") {
        return;
    }

    let entries = [];
    try {
        entries = JSON.parse(existingData);
    } catch (error) {
        //console.error("Failed to parse existing data:", error);
        return null;
    }

    const playerStats = entries.find(entry => entry.player === playerName);
    if (!playerStats) {
        console.log("No stats found for player:", playerName);
        return null;
    }

    let playerMoney = playerStats.money;

    return [playerMoney];
}
