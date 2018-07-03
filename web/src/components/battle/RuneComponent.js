import React from "react";

import mapping from "../../mapping";

import RunePopUp from "./RunePopUp";

import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";

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
    width: `${40}%`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 1
  }
});

class RuneComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instanceRune: props.instanceRune,
      unit_id: props.unit_id,
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
    const slotNo = this.state.instanceRune.slot_no;
    return (
      <div>
        <img
          alt=""
          src={"../img/runes/rune"+ slotNo+".png"}
          className={"RuneContainer-rune-"+slotNo +"-image grow-quick"}
          onClick={this.handleOpen}
        />
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div
            style={getModalStyle()}
            className={classes.paper + " has-background-dark"}
          >
            <RunePopUp
              instanceRune={this.state.instanceRune}
              battle_key={this.state.battle_key}
              wizard_id={this.state.wizard_id}
            />
          </div>
        </Modal>
        <img
          alt=""
          src={
            "../img/runes/" +
            mapping.rune.sets[this.state.instanceRune.set_id] +
            ".png"
          }
          className={"RuneContainer-rune-symbol-"+ slotNo+"-image"}
        />
      </div>
    );
  }
}

RuneComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
const RuneComponentWrapped = withStyles(styles)(RuneComponent);
export default RuneComponentWrapped;
