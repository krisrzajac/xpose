import React from "react";

import MonsterSlot from "./MonsterSlot";
const PlayerComponent = props => {
  const battle = props.battle;

  const playerNo = props.player;

  if (battle && battle.command !== undefined) {
    
    return (
      <div className="columns is-mobile is-gapless">
        <div className="column">
          <h1 className="title is-size-9-mobile">
            {battle.instanceWizards[playerNo].wizard_name}
          </h1>

          <div className="columns is-mobile is-gapless">
            {battle.instanceWizards[playerNo].instanceMonsters.map(monster => {
              return (
                <div
                  className="column is-3"
                  key={
                    "MonsterSlot-" +
                    props.battle_key +
                    monster.unit_master_id +
                    monster.pos_id +
                    monster.wizard_id
                  }
                >
                  <MonsterSlot
                    battle_key={battle.battle_key}
                    wizard_id={battle.instanceWizards[playerNo].wizard_id}
                    instanceMonster={monster}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="error">
        Battle not loadable / Not found, make sure battle_key exists in DB
      </div>
    );
};

export default PlayerComponent;
