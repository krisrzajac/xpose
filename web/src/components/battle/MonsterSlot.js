import React from "react";
import PropTypes from "prop-types";

import MonsterPopUp from "./MonsterPopUp";
import RunePopUp from "./RunePopUp";
import RuneContainer from "./RuneContainer";

import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: `${90}%`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 1
  }
});

class MonsterSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instanceMonster: props.instanceMonster,
      battle_key: props.battle_key,
      wizard_id: props.wizard_id
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="column border-button">
        <h1 className="title is-size-7-mobile">
          {this.state.instanceMonster.monster.name}
        </h1>
        <img
          key={
            "PortraitRowIcon-" +
            this.state.battle_key +
            this.state.instanceMonster.unit_master_id +
            this.state.instanceMonster.pos_id +
            this.state.wizard_id
          }
          src={
            this.state.instanceMonster.monster
              ? "../img/monsters/" +
                this.state.instanceMonster.monster.image_filename
              : "../img/monsters/missing.jpg"
          }
          alt=""
          className="BattlePage-icon zoom-tilt border-button"
          type="primary"
          onClick={this.handleOpen}
        />
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div
            style={getModalStyle()}
            className={classes.paper + " has-background-dark"}
          >
            <MonsterPopUp
              instanceMonster={this.state.instanceMonster}
              battle_key={this.state.battle_key}
              wizard_id={this.state.wizard_id}
            />
          </div>
        </Modal>
        {/*****************************************************************************************/}
        {/*****************************************************************************************/}
        {/*****************************************************************************************/}
        <table className="table is-centered">
          <tbody>
            <tr>
              <td className="has-text-right is-size-7-mobile has-text-weight-bold">
                <Tooltip
                  id="tooltip-ehp"
                  title={
                    "game total HP * ( 1140 * game total DEF * 3.5 ) / 1000"
                  }
                  disableTouchListener={true}
                  placement="top"
                >
                  <span> EHP : </span>
                </Tooltip>
              </td>
              <td className="has-text-right is-size-7-mobile">
                {this.state.instanceMonster.eff_hp}
              </td>
            </tr>
            <tr>
              <td className="has-text-right is-size-7-mobile has-text-weight-bold">
                <Tooltip
                  id="tooltip-ehpd"
                  title={
                    "game total HP * ( 1140 * game total DEF * 1.05 ) / 1000"
                  }
                  disableTouchListener={true}
                  placement="top"
                >
                  <span> EHP DB : :</span>
                </Tooltip>
              </td>
              <td className="has-text-right is-size-7-mobile">
                {this.state.instanceMonster.eff_hp_broken}
              </td>
            </tr>
            <tr>
              <td className="has-text-right is-size-7-mobile has-text-weight-bold">
                <Tooltip
                  id="tooltip-fehp"
                  title={
                    "final total HP * ( 1140 * final total DEF * 3.5 ) / 1000"
                  }
                  disableTouchListener={true}
                  placement="top"
                >
                  <span> FEHP : </span>
                </Tooltip>
              </td>
              <td className="has-text-right is-size-7-mobile">
                {this.state.instanceMonster.final_eff_hp}
              </td>
            </tr>
            <tr>
              <td className="has-text-right is-size-7-mobile has-text-weight-bold">
                <Tooltip
                  id="tooltip-fehpd"
                  title={
                    "final total HP * ( 1140 * final total DEF * 3.5 ) / 1000"
                  }
                  disableTouchListener={true}
                  placement="top"
                >
                  <span> FEHPD : </span>
                </Tooltip>
              </td>
              <td className="has-text-right is-size-7-mobile">
                {this.state.instanceMonster.final_eff_hp_broken}
              </td>
            </tr>
            <tr>
              <td className="has-text-right is-size-7-mobile has-text-weight-bold">
                <Tooltip
                  id="tooltip-avgeff"
                  title={"Rune efficiency average"}
                  disableTouchListener={true}
                  placement="top"
                >
                  <span> Avg Eff. : </span>
                </Tooltip>
              </td>
              <td className="has-text-right is-size-7-mobile">
                {Math.floor(
                  this.state.instanceMonster.avg_rune_efficiency * 100
                ) / 100}
              </td>
            </tr>
            <tr>
              <td className="has-text-right is-size-7-mobile">{this.state.instanceMonster.set_complete.map((object, index) => {
                return (object + (index<this.state.instanceMonster.set_complete.length?" ": ""))

              })}</td>
            </tr>
          </tbody>
        </table>
        {/*****************************************************************************************/}
        {/*****************************************************************************************/}
        {/*****************************************************************************************/}
        <RuneContainer
          instanceRunes={this.state.instanceMonster.instanceRunes}
          unit_id={this.state.unit_id}
          battle_key={this.state.battle}
          wizard_id={this.state.battle_key}
        />
      </div>
    );
  }
}
MonsterSlot.propTypes = {
  classes: PropTypes.object.isRequired
};

const MonsterSlotWrapped = withStyles(styles)(MonsterSlot);
export default MonsterSlotWrapped;
