if(DebugMode) {
    addCommandHandler('addmoney', function(command, text) {
        localPlayer.money += 1000;
        
        for (const Weapon of localPlayer.weapons) {
            console.log(Weapon);
        }
    });
}