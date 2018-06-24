const requireUncached = require('require-uncached');

module.exports = {

    testArenaFull() {
        var dataarena = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\BattleArenaStart.json')
        var uploadService = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\services\\upload.service')
        console.log('uploadService: ', uploadService());
        var modelService = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\services\\model.service')
        console.log('modelService: ', modelService());


        


        dataarena = uploadService().formatDataArena(dataarena);
        let newOpponentData = modelService().extendUnitsData(dataarena.monsterOpponent, dataarena.buildingsOpponent, dataarena.battle.command);
        
        console.log('newOpponentData: ', newOpponentData);
        
        
        
    },

    testHubLoginFull() {
        var hubLogin = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\izokizur-14442716.json')
        var uploadService = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\services\\upload.service')
        console.log('uploadService: ', uploadService());
        var modelService = requireUncached('C:\\Users\\krisr\\Documents\\GitHub\\xpose\\api\\server\\services\\model.service')
        console.log('modelService: ', modelService());


        


        hubLogin = uploadService().formatDataHubUserLogin(hubLogin);
        let newPlayerData = modelService().extendUnitsData(hubLogin.monsterPlayer, hubLogin.buildingsPlayer, hubLogin.command);
        
        // console.log('newPlayerData: ', newPlayerData);
        
    }
}