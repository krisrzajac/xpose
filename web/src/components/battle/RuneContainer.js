import React from "react";

import mapping from "../../mapping";
import RuneComponent from "./RuneComponent";
class RuneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instanceRunes: props.instanceRunes,
      unit_id: props.unit_id,
      battle_key: props.battle_key,
      wizard_id: props.wizard_id
    };
  }

  render() {
    return (
      <div className="rune-container columns is-gapless is-centered">
        <div className="column is-one-third-desktop is-centered">
          <div className="RuneContainer-image-container">
            <img
              alt=""
              src="../img/runes/runecontainer.png"
              className="RuneContainer-backdrop-image"
            />
            {this.state.instanceRunes.map((object, index) => {
              return <RuneComponent instanceRune={object}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RuneContainer;
