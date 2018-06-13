const database = require('../../config/database');


const uploadService = () => {
  const sortDecoListTowers = (deco_list) => {
    cmp = function (x, y) {
      return x > y ? 1 : x < y ? -1 : 0;
    };

    deco_list = deco_list.sort((a, b) => cmp([cmp(a.master_id, b.master_id)], [cmp(b.master_id, a.master_id)]));

    return deco_list;
  };

  // Converts deco list into object with objects, with key's as master_id
  const prettyDecoList = (deco_list) => {
    decoObject = deco_list.reduce((objectParent, object) => {
      objectParent[object.master_id] = object;
      return objectParent;
    }, {});
    deco_list = decoObject;
    return deco_list;
  };

  const sortUnitEquippedRunes = (unit) => {
    if (unit.runes) {
      // generic sort function
      cmp = function (x, y) {
        return x > y ? 1 : x < y ? -1 : 0;
      };


      // make sure that runes is actually an array (thanks com2us)
      if (unit.runes === Object(unit.runes)) {
        unit.runes = Object.values(unit.runes);
      }

      unit.runes = unit.runes.sort((a, b) => cmp([cmp(a.slot_no, b.slot_no)], [cmp(b.slot_no, a.slot_no)]));
    } else {
      unit.runes = [];
    }
    return unit;
  };


  const sortUnits = (unit_list) => {
    cmp = function (x, y) {
      return x > y ? 1 : x < y ? -1 : 0;
    };

    unit_list = unit_list.sort((a, b) => cmp([cmp(a.pos_id, b.pos_id)], [cmp(b.pos_id, a.pos_id)]));

    return unit_list;
  };


  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************
  // DATA PREP SECTION
  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************


  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************
  // HubUserLogin
  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************


  const formatDataHubUserLogin = (data) => {

    const wizardPlayer = {};

    // Arrays for sequelize bulkCreate() method -
    // TODO: Can we attach arrays of runes to each monster?
    // Or are we binding them through occupied_id / wizard_id
    const monsterPlayer = [];

    const buildingsPlayer = [];

    const runesPlayer = [];

    const returnObject = {};

    returnObject.wizardPlayer = wizardPlayer;

    returnObject.buildingsPlayer = buildingsPlayer;

    returnObject.monsterPlayer = monsterPlayer;

    returnObject.runesPlayer = runesPlayer;

    // Populate instanceBattle object
    returnObject.command = data.command;
    returnObject.ts_val = data.ts_val;
    returnObject.tvalue = data.tvalue;


    // populate first wizard object (player in arena)
    wizardPlayer.wizard_id = data.wizard_info.wizard_id;
    wizardPlayer.wizard_name = data.wizard_info.wizard_name;



    // Populate user monster array
    i = 0;
    for (const monster of data.unit_list) {
      monsterPlayer[i] = {};

      monsterPlayer[i].pos_id = 0;
      monsterPlayer[i].unit_id = monster.unit_id;
      monsterPlayer[i].wizard_id = monster.wizard_id;
      monsterPlayer[i].unit_master_id = monster.unit_master_id;
      monsterPlayer[i].unit_level = monster.unit_level;
      monsterPlayer[i].class = monster.class;


      monsterPlayer[i].con = monster.con;
      monsterPlayer[i].atk = monster.atk;
      monsterPlayer[i].def = monster.def;
      monsterPlayer[i].spd = monster.spd;
      monsterPlayer[i].resist = monster.resist;
      monsterPlayer[i].accuracy = monster.accuracy;
      monsterPlayer[i].critical_rate = monster.critical_rate;
      monsterPlayer[i].critical_damage = monster.critical_damage;


      for (const skill in monster.skills) {
        const arrLength = monster.skills.length;
        for (let j = 0; j < arrLength; j++) {
          monsterPlayer[i][`skill_${j}_1`] = monster.skills[j][1];
        }
      }

      monsterPlayer[i].homunculus = monster.homunculus;

      for (const rune of monster.runes) {
        // main stat
        rune.pri_eff_0 = rune.pri_eff[0];
        rune.pri_eff_1 = rune.pri_eff[1];

        // innate stat
        rune.prefix_eff_0 = rune.prefix_eff[0];
        rune.prefix_eff_1 = rune.prefix_eff[1];

        const hasStats = new Array(12).fill(0);


        if (rune.sec_eff) {
          for (let i = 0; i < rune.sec_eff.length; i++) {
            for (let j = 0; j < rune.sec_eff[i].length; j++) {
              rune[`sec_eff_${i}_${j}`] = rune.sec_eff[i][j];
            }
            // log stat types into hasStats array, checked later to add booleans 'hasStuff'
            hasStats[rune.sec_eff[i][0]] = rune.sec_eff[i][1];
          }
        }

        rune.has_accuracy = !!hasStats[12];
        rune.has_atk = !!(hasStats[3] || hasStats[4]);
        rune.has_crit_dmg = !!hasStats[10];
        rune.has_crit_rate = !!hasStats[9];
        rune.has_def = !!(hasStats[5] || hasStats[6]);
        rune.has_hp = !!(hasStats[1] || hasStats[2]);
        rune.has_resist = !!hasStats[11];
        rune.has_speed = !!hasStats[8];
      }
      monsterPlayer[i].runes = monster.runes;
      i++;
    }

    // Builings
    //
    i = 0;
    if (data.deco_list) {
      for (const building of data.deco_list) {
        buildingsPlayer[i] = {};
        buildingsPlayer[i].deco_id = building.deco_id;
        buildingsPlayer[i].level = building.level;
        buildingsPlayer[i].master_id = building.master_id;
        i++;
      }
    }


    // TODO: RETURN TYPE
    return returnObject;
  }

  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************
  // BattleArenaStart
  //* *****************************************************************************************************************************************
  //* *****************************************************************************************************************************************


  const sortArenaRunes = (data) => {
    for (const monster of data.opp_unit_list) {
      sortUnitEquippedRunes(monster.unit_info);
    }
  };


  const sortArenaTowers = (data) => {
    for (const user of data.battle_info.users) {
      this.sortDecoListTowers(user.deco_list);
      user.deco_list = this.prettyDecoList(user.deco_list);
    }
    return data;
  };


  const prepDataArena = (data, mymons = [], mybuild = []) => {
    data = this.formatDataArena(data, mymons, mybuild);

    this.sortArenaRunes(data);
    this.sortArenaTowers(data);


    return data;
  };


  // Flattens data to be sent to model function
  // TODO: Once we find a better way to 'create' Sequelize models / DB rows
  // this will need updating, we CAN do better!
  // this makes data usable with sequelize.models['modelName'].create\({key:value pairs that are columns in model})
  // A thought - we can put this method into model ?

  const formatDataArena = (data) => {
    sortArenaRunes(data);

    const battle = {};

    const wizardPlayer = {};
    const wizardOpponent = {};

    // Arrays for sequelize bulkCreate() method -
    // TODO: Can we attach arrays of runes to each monster?
    // Or are we binding them through occupied_id / wizard_id
    const monsterPlayer = [];
    const monsterOpponent = [];

    const buildingsPlayer = [];
    const buildingsOpponent = [];

    const runesPlayer = [];
    const runesOpponent = [];


    const returnObject = {};
    returnObject.battle = battle;

    returnObject.wizardPlayer = wizardPlayer;
    returnObject.wizardOpponent = wizardOpponent;

    returnObject.buildingsPlayer = buildingsPlayer;
    returnObject.buildingsOpponent = buildingsOpponent;

    returnObject.monsterPlayer = monsterPlayer;
    returnObject.monsterOpponent = monsterOpponent;

    returnObject.runesPlayer = runesPlayer;
    returnObject.runesOpponent = runesOpponent;

    // Populate instanceBattle object
    battle.command = data.command;
    battle.battle_key = data.battle_key;
    battle.ts_val = data.ts_val;
    battle.tvalue = data.tvalue;


    // populate first wizard object (player in arena)
    wizardPlayer.wizard_id = data.wizard_info.wizard_id;
    wizardPlayer.wizard_name = data.wizard_info.wizard_name;


    // arena my 'unit_id_list' only has id's - need to cross reference from existing data in DB?
    // TODO: search for existing entries in DB - need to use db.find() with similar timestamp?
    // getting complicated
    //

    let i = 0;
    for (const monster of data.unit_id_list) {
      monsterPlayer[i] = {};
      monsterPlayer[i].pos_id = i + 1;
      monsterPlayer[i].unit_id = monster.unit_id;
      monsterPlayer[i].wizard_id = wizardPlayer.wizard_id;
      // TODO : All the info so far - need to change constraints on monster model to
      // facilitate this

      i++;
    }

    // TODO: Get buildings for player from DB
    // newData.battle_info.users[0].deco_list = mybuild;


    // user[1] is your opponent in arena


    if (data.opp_pvp_info) {
      wizardOpponent.wizard_id = data.opp_pvp_info.wizard_id;
      // TODO: Check for wizard name in DB, wizardName for opponent is not transmitted for battle
      //
      wizardOpponent.wizard_name = 'Name not in DB :(';
    } else {
      // Rival battles have no 'opp_pvp_info' in json object -
      // rival battles have no wizard id - using this temporarily
      // TODO : Better solution, also DONT TRANSMIT RIVAL BATTLES TO MY SERVER -
      // we will filter these eventually but for the sake of completeness adding functionality
      wizardOpponent.wizard_id = '000000000000';
      wizardOpponent.wizard_name = 'Rival Battle Opponent';
    }


    // Populate opponent monsters array
    i = 0;
    for (const monster of data.opp_unit_list) {
      monsterOpponent[i] = {};

      monsterOpponent[i].pos_id = monster.pos_id;
      monsterOpponent[i].unit_id = monster.unit_info.unit_id;
      monsterOpponent[i].wizard_id = monster.unit_info.wizard_id;
      monsterOpponent[i].unit_master_id = monster.unit_info.unit_master_id;
      monsterOpponent[i].unit_level = monster.unit_info.unit_level;
      monsterOpponent[i].class = monster.unit_info.class;


      monsterOpponent[i].con = monster.unit_info.con;
      monsterOpponent[i].atk = monster.unit_info.atk;
      monsterOpponent[i].def = monster.unit_info.def;
      monsterOpponent[i].spd = monster.unit_info.spd;
      monsterOpponent[i].resist = monster.unit_info.resist;
      monsterOpponent[i].accuracy = monster.unit_info.accuracy;
      monsterOpponent[i].critical_rate = monster.unit_info.critical_rate;
      monsterOpponent[i].critical_damage = monster.unit_info.critical_damage;


      for (const skill in monster.unit_info.skills) {
        const arrLength = monster.unit_info.skills.length;
        for (let j = 0; j < arrLength; j++) {
          monsterOpponent[i][`skill_${j}_1`] = monster.unit_info.skills[j][1];
        }
      }

      monsterOpponent[i].homunculus = monster.unit_info.homunculus;

      for (const rune of monster.unit_info.runes) {
        // main stat
        rune.pri_eff_0 = rune.pri_eff[0];
        rune.pri_eff_1 = rune.pri_eff[1];

        // innate stat
        rune.prefix_eff_0 = rune.prefix_eff[0];
        rune.prefix_eff_1 = rune.prefix_eff[1];

        const hasStats = new Array(12).fill(0);


        if (rune.sec_eff) {
          for (let i = 0; i < rune.sec_eff.length; i++) {
            for (let j = 0; j < rune.sec_eff[i].length; j++) {
              rune[`sec_eff_${i}_${j}`] = rune.sec_eff[i][j];
            }
            // log stat types into hasStats array, checked later to add booleans 'hasStuff'
            hasStats[rune.sec_eff[i][0]] = rune.sec_eff[i][1];
          }
        }

        rune.has_accuracy = !!hasStats[12];
        rune.has_atk = !!(hasStats[3] || hasStats[4]);
        rune.has_crit_dmg = !!hasStats[10];
        rune.has_crit_rate = !!hasStats[9];
        rune.has_def = !!(hasStats[5] || hasStats[6]);
        rune.has_hp = !!(hasStats[1] || hasStats[2]);
        rune.has_resist = !!hasStats[11];
        rune.has_speed = !!hasStats[8];
      }
      monsterOpponent[i].runes = monster.unit_info.runes;
      i++;
    }

    // My rune array -
    // TODO: Pull from master list or transmit them through plugin?
    // Would check master rune list against the unit id's we have in data


    // Opponent buildings
    //
    i = 0;
    if (data.deco_list) {
      for (const building of data.deco_list) {
        buildingsOpponent[i] = {};
        buildingsOpponent[i].deco_id = building.deco_id;
        buildingsOpponent[i].level = building.level;
        buildingsOpponent[i].master_id = building.master_id;
        i++;
      }
    }


    // TODO: RETURN TYPE
    return returnObject;
  };




  const sortSiegeRunes = (data) => {
    for (const user of data.battle_info.users) {
      for (const monster of user.units) {
        gVisualHelper.sortUnitEquippedRunes(monster.unit);
      }
    }

    return data;
  };


  const sortSiegeTowers = (data) => {
    for (const user of data.battle_info.users) {
      gVisualHelper.sortDecoListTowers(user.deco_list);
      user.deco_list = gVisualHelper.prettyDecoList(user.deco_list);
    }
    return data;
  };


  const prepDataSiege = (data, mymons = [], mybuild = []) => {
    data = this.formatDataSiege(data, mymons, mybuild);

    this.sortSiegeRunes(data);
    this.sortSiegeTowers(data);

    for (const user of data.battle_info.users) {
      gVisualHelper.extendUnitsData(user.units, user.deco_list);
      gVisualHelper.extendUnitsWithLeaderData(user.units, user.leader_unit.unit_master_id, data.command);
    }

    return data;
  };


  const formatDataSiege = (data, mymons = [], mybuild = []) => {
    const newData = {};
    newData.command = data.command;

    newData.tvalue = data.tvalue;

    newData.battle_info = {};
    newData.battle_info.first_wizard_id = data.wizard_info.wizard_id;
    newData.battle_info.boss_wizard_id = data.guildsiege_opp_unit_list[0].unit_info.wizard_id;
    newData.battle_info.users = [];

    newData.battle_info.users[0] = {};
    newData.battle_info.users[0].wizard_id = newData.battle_info.first_wizard_id;
    newData.battle_info.users[0].wizard_name = data.wizard_info.wizard_name;

    newData.battle_info.users[0].units = [];


    // guildsiege_my_unit_list data sucks - formatted differently then guildsiege_opp_unit_list
    // array of monster.unit objects without a containing object w/ pos_id. adding these to users data
    let i = 0;
    for (const monster of data.guildsiege_my_unit_list) {
      newData.battle_info.users[0].units[i] = {};
      newData.battle_info.users[0].units[i].pick_slot_id = i + 1;
      newData.battle_info.users[0].units[i].unit = monster;
      i++;
    }

    // Leader unit
    newData.battle_info.users[0].leader_unit = {};
    newData.battle_info.users[0].leader_unit.pick_slot_id = 1;
    newData.battle_info.users[0].leader_unit.unit_id = newData.battle_info.users[0].units[0].unit.unit_id;
    newData.battle_info.users[0].leader_unit.unit_master_id = newData.battle_info.users[0].units[0].unit.unit_master_id;
    newData.battle_info.users[0].leader_unit.class = newData.battle_info.users[0].units[0].unit.class;
    newData.battle_info.users[0].leader_unit.unit_level = newData.battle_info.users[0].units[0].unit.unit_level;

    // deco list
    // deco for the player not included in siege battle data - adding empty array
    // TODO : snag data from login about deco list, cache it and add it here

    newData.battle_info.users[0].deco_list = mybuild;


    // user[1] is your opponent in siege battle

    newData.battle_info.users[1] = {};
    newData.battle_info.users[1].wizard_id = newData.battle_info.boss_wizard_id;
    // add lookup from wizard-id-logger
    newData.battle_info.users[1].wizard_name = 'unknown';
    newData.battle_info.users[1].units = [];
    i = 0;
    for (const monster of data.guildsiege_opp_unit_list) {
      newData.battle_info.users[1].units[i] = {};
      newData.battle_info.users[1].units[i].pick_slot_id = monster.pos_id;
      newData.battle_info.users[1].units[i].unit = monster.unit_info;
      i++;
    }


    // Leader unit
    newData.battle_info.users[1].leader_unit = {};
    newData.battle_info.users[1].leader_unit.pick_slot_id = 1;
    newData.battle_info.users[1].leader_unit.unit_id = newData.battle_info.users[1].units[0].unit.unit_id;
    newData.battle_info.users[1].leader_unit.unit_master_id = newData.battle_info.users[1].units[0].unit.unit_master_id;
    newData.battle_info.users[1].leader_unit.class = newData.battle_info.users[1].units[0].unit.class;
    newData.battle_info.users[1].leader_unit.unit_level = newData.battle_info.users[1].units[0].unit.unit_level;

    // deco list

    newData.battle_info.users[1].deco_list = data.guildsiege_opp_deco_list;


    return newData;
  };


  const sortGuildWarRunes = (data) => {
    for (const user of data.battle_info.users) {
      for (const monster of user.units) {
        gVisualHelper.sortUnitEquippedRunes(monster.unit);
      }
    }

    return data;
  };


  const sortGuildWarTowers = (data) => {
    for (const user of data.battle_info.users) {
      gVisualHelper.sortDecoListTowers(user.deco_list);
      user.deco_list = gVisualHelper.prettyDecoList(user.deco_list);
    }
    return data;
  };


  const prepDataGuildWar = (data, mymons = [], mybuild = []) => {
    data = this.formatDataGuildWar(data, mymons, mybuild);
    for (const battle of data) {
      this.sortGuildWarRunes(battle);
      this.sortGuildWarTowers(battle);
    }
    for (const battle of data) {
      for (const user of battle.battle_info.users) {
        gVisualHelper.extendUnitsData(user.units, user.deco_list);
        gVisualHelper.extendUnitsWithLeaderData(user.units, user.leader_unit.unit_master_id, battle.command);
      }
    }

    return data;
  };


  const formatDataGuildWar = (data, mymons = [], mybuild = []) => {
    const newData = [];
    for (let j = 0; j < data.guildwar_my_unit_list.length; j++) {
      newData[j] = {};
      newData[j].command = data.command;

      newData[j].tvalue = data.tvalue;

      newData[j].battle_info = {};
      newData[j].battle_info.first_wizard_id = data.wizard_info.wizard_id;
      newData[j].battle_info.boss_wizard_id = data.guildwar_opp_unit_list[j][0].unit_info.wizard_id;
      newData[j].battle_info.users = [];

      newData[j].battle_info.users[0] = {};
      newData[j].battle_info.users[0].wizard_id = newData[j].battle_info.first_wizard_id;
      newData[j].battle_info.users[0].wizard_name = data.wizard_info.wizard_name;

      newData[j].battle_info.users[0].units = [];


      // guildwar_my_unit_list data sucks - formatted differently then guildwar_opp_unit_list[j]
      // array of monster.unit objects without a containing object w/ pos_id. adding these to users data
      let i = 0;
      for (const monster of data.guildwar_my_unit_list[j]) {
        newData[j].battle_info.users[0].units[i] = {};
        newData[j].battle_info.users[0].units[i].pick_slot_id = i + 1;
        newData[j].battle_info.users[0].units[i].unit = monster;
        i++;
      }

      // Leader unit
      newData[j].battle_info.users[0].leader_unit = {};
      newData[j].battle_info.users[0].leader_unit.pick_slot_id = 1;
      newData[j].battle_info.users[0].leader_unit.unit_id = newData[j].battle_info.users[0].units[0].unit.unit_id;
      newData[j].battle_info.users[0].leader_unit.unit_master_id = newData[j].battle_info.users[0].units[0].unit.unit_master_id;
      newData[j].battle_info.users[0].leader_unit.class = newData[j].battle_info.users[0].units[0].unit.class;
      newData[j].battle_info.users[0].leader_unit.unit_level = newData[j].battle_info.users[0].units[0].unit.unit_level;

      // deco list
      // deco for the player not included in siege battle data - adding empty array or data from cached HubUserLogin

      newData[j].battle_info.users[0].deco_list = mybuild;


      // user[1] is your opponent in siege battle

      newData[j].battle_info.users[1] = {};
      newData[j].battle_info.users[1].wizard_id = newData[j].battle_info.boss_wizard_id;
      // add lookup from wizard-id-logger
      newData[j].battle_info.users[1].wizard_name = 'unknown';
      newData[j].battle_info.users[1].units = [];
      i = 0;
      for (const monster of data.guildwar_opp_unit_list[j]) {
        newData[j].battle_info.users[1].units[i] = {};
        newData[j].battle_info.users[1].units[i].pick_slot_id = monster.pos_id;
        newData[j].battle_info.users[1].units[i].unit = monster.unit_info;
        i++;
      }


      // Leader unit
      newData[j].battle_info.users[1].leader_unit = {};
      newData[j].battle_info.users[1].leader_unit.pick_slot_id = 1;
      newData[j].battle_info.users[1].leader_unit.unit_id = newData[j].battle_info.users[1].units[0].unit.unit_id;
      newData[j].battle_info.users[1].leader_unit.unit_master_id = newData[j].battle_info.users[1].units[0].unit.unit_master_id;
      newData[j].battle_info.users[1].leader_unit.class = newData[j].battle_info.users[1].units[0].unit.class;
      newData[j].battle_info.users[1].leader_unit.unit_level = newData[j].battle_info.users[1].units[0].unit.unit_level;

      // deco list

      newData[j].battle_info.users[1].deco_list = data.guildwar_opp_deco_list;
    }
    return newData;
  };


  return {
    // upload methods
    formatDataArena,
    formatDataHubUserLogin,
  };
};

module.exports = uploadService;
