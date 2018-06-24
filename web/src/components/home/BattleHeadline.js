import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PortraitRow from "./PortraitRow";
const mapStateToProps = state => {
  return {
    ...state.home,
    headlineArray: state.home.headlineArray
  };
};

class BattleHeadline extends Component {
  render() {

    return (
      <Link to={"/battle_key/" + this.props.battle.battle_key}>
        <li>
          <div className="Battle-headline-title">
            Battle ID: {this.props.battle.battle_key}
          </div>

          <div className="Battle-headline-player">
            {this.props.battle.instanceWizards[0].wizard_id} VS.{" "}
            {this.props.battle.instanceWizards[1].wizard_id}
          </div>

          <div className="Battle-headline-iconbar">
            {this.props.battle.instanceWizards.map(function(object, i) {
              return (
                <PortraitRow
                  key={
                    "PortraitRow-" +
                    this.props.battle.id +
                    "-" +
                    this.props.battle.battle_key +
                    "-" +
                    object.wizard_id
                  }
                  battle_key={this.props.battle.battle_key}
                  monsters={object.instanceMonsters}
                />
              );
            }, this)}
          </div>
        </li>
      </Link>
    );
  }
}

export default connect(mapStateToProps)(BattleHeadline);
