import React from "react";
import BattleHeadline from "./BattleHeadline";
const BattleHeadlineContainer = props => {

  return (
    <ul className ="Battle-list">
      {props.headlineArray.map(function(object, i) {

        return (
          <BattleHeadline
            key={"BattleHeadline-" + object.id + "-" + object.battle_key}
            battle={object}
          />
        );
      })}
    </ul>
  );
};

export default BattleHeadlineContainer;
