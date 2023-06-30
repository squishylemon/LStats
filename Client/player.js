let myId = localPlayer.id;
addNetworkHandler("setStats", function(money) {
    if (SaveMoney) {
        localPlayer.money = money;
    }
});


addNetworkHandler("saveStats", function() {

        let myMoney = localPlayer.money;
        let playerName = localPlayer.name;
        triggerNetworkEvent("membersave", playerName, myMoney);
});
