import React from "react";

function PortraitRow(props) {
  const monsters = props.monsters;
  return (

    <div>

      {monsters.map(function(object, i) {
        return (
          <img
            key={
              "PortraitRowIcon-" +
              props.battle_key +
              object.unit_master_id +
              object.pos_id
            }
            src={
              object.monster
                ? "img/monsters/" + object.monster.image_filename
                : "img/monsters/missing.jpg"
            }
            alt=""
            className="Battle-headline-icon"
          />
        );
      })}
    </div>
  );
}

export default PortraitRow;