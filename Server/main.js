addEventHandler('OnPlayerJoined', (event, client) => {
    const playerName = client.name;

    if (getPlayerStats(playerName) == null) {
        return;
    }

    const [Money] = getPlayerStats(playerName);

    if (Money !== null) {
        triggerNetworkEvent("setStats", client, Money);
    }
});


addEventHandler('OnProcess', (event, deltatime) => {
    const clients = getClients();
    
    for (const client of clients) {
        triggerNetworkEvent("saveStats", client);
    }
});



addNetworkHandler("membersave", function(client, playerName, money) {
    const entry = {
        player: playerName,
        money: money,
    };
    
    addEntry(entry);
});

