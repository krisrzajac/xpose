import React from "react";

import mapping from "../../mapping";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const hasPercent = runeEffect => {
  return runeEffect === 2 ||
    runeEffect === 4 ||
    runeEffect === 6 ||
    runeEffect === 9 ||
    runeEffect === 10 ||
    runeEffect === 11 ||
    runeEffect === 12
    ? "%"
    : "";
};

const hasLegendColor = runeGrindValue => {
  return runeGrindValue > 0 ? "has-text-legend-text" : "has-text-light";
};

const StarBar = props => {
  const starArray = new Array(props.stars).fill(0);
  return (
    <div className="row">
      {starArray.map((object, index) => {
        return (
          <img
            key={index}
            src={"../img/stars/star-awakened.png"}
            alt=""
            className="image is-16x16"
          />
        );
      })}
    </div>
  );
};
const styles = {
  root: {
    width: 500
  }
};

class RunePopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      instanceRune: props.instanceRune,
      battle_key: props.battle_key,
      wizard_id: props.wizard_id
    };
  }

  render() {
    return (
      <div id="RunePopUp-container" className="container is-fluid is-mobile">
        <div id="RunePopUp-title-columns" className="columns is-mobile">
          <div className="column is-12">
            <h1 className="title has-text-light is-size-5-mobile">
              {"+" +
                this.state.instanceRune.upgrade_curr +
                " " +
                mapping.rune.sets[this.state.instanceRune.set_id] +
                " Rune (" +
                this.state.instanceRune.slot_no +
                ") - " +
                mapping.rune.quality[this.state.instanceRune.rank]}
            </h1>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-3">
            <div className="RuneIcon-container">
              <img
                src={
                  "../img/runes/bg_" +
                  mapping.rune.quality[this.state.instanceRune.rank] +
                  ".png"
                }
                className="RuneIcon-bg"
                alt=""
              />
            </div>
          </div>
          <div className="column is-9">
            <div className="has-text-light is-size-6-mobile">
              {mapping.rune.effectTypes[this.state.instanceRune.pri_eff_0] +
                " +" +
                this.state.instanceRune.pri_eff_1 +
                hasPercent(this.state.instanceRune.pri_eff_0)}
            </div>
            <div className="has-text-light is-size-6-mobile">
              {this.state.instanceRune.prefix_eff_0 !== 0
                ? mapping.rune.effectTypes[
                    this.state.instanceRune.prefix_eff_0
                  ] +
                  " +" +
                  this.state.instanceRune.prefix_eff_1 +
                  hasPercent(this.state.instanceRune.prefix_eff_0)
                : ""}
            </div>
          </div>
        </div>
        {/******************************************************************************************************************************************/}
        {/******************************************************************************************************************************************/}
        {/******************************************************************************************************************************************/}
        <div className="columns">
          <div className="column is-8">
            <table
              id="RunePopUp-substattable"
              className="table is-striped is-narrow is-hoverable has-background-dark"
            >
              <tbody id="RunePopUp-substattable-body">
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}

                <tr id="RunePopUp-substattable-subrow_0">
                  <td
                    id="RunePopUp-substattable-subrow_0_0"
                    className="has-text-left has-text-light is-size-7-mobile"
                  >
                    {this.state.instanceRune.sec_eff_0_0 !== 0
                      ? mapping.rune.effectTypes[
                          this.state.instanceRune.sec_eff_0_0
                        ]
                      : ""}
                  </td>
                  <td
                    id="RunePopUp-substattable-subrow_0_1"
                    className={
                      "has-text-left is-size-7-mobile " +
                      hasLegendColor(this.state.instanceRune.sec_eff_0_3)
                    }
                  >
                    <Tooltip
                      id="RunePopUp-substattable-subrow_0_1-grind"
                      title={
                        this.state.instanceRune.sec_eff_0_3 !== 0
                          ? this.state.instanceRune.sec_eff_0_1 +
                            " + " +
                            this.state.instanceRune.sec_eff_0_3 +
                            " (grind)"
                          : ""
                      }
                      disableTouchListener={true}
                      placement="top"
                    >
                      <span>
                        {this.state.instanceRune.sec_eff_0_1 !== 0
                          ? "+" +
                            (this.state.instanceRune.sec_eff_0_1 +
                              this.state.instanceRune.sec_eff_0_3) +
                            hasPercent(this.state.instanceRune.sec_eff_0_0)
                          : ""}
                      </span>
                    </Tooltip>
                  </td>
                </tr>
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                <tr id="RunePopUp-substattable-subrow_1">
                  <td
                    id="RunePopUp-substattable-subrow_1_0"
                    className="has-text-left has-text-light is-size-7-mobile"
                  >
                    {this.state.instanceRune.sec_eff_1_0 !== 0
                      ? mapping.rune.effectTypes[
                          this.state.instanceRune.sec_eff_1_0
                        ]
                      : ""}
                  </td>
                  <td
                    id="RunePopUp-substattable-subrow_1_1"
                    className={
                      "has-text-left is-size-7-mobile " +
                      hasLegendColor(this.state.instanceRune.sec_eff_1_3)
                    }
                  >
                    <Tooltip
                      id="RunePopUp-substattable-subrow_1_1-grind"
                      title={
                        this.state.instanceRune.sec_eff_1_3 !== 0
                          ? this.state.instanceRune.sec_eff_1_1 +
                            " + " +
                            this.state.instanceRune.sec_eff_1_3 +
                            " (grind)"
                          : ""
                      }
                      disableTouchListener={true}
                      placement="top"
                    >
                      <span>
                        {this.state.instanceRune.sec_eff_1_1 !== 0
                          ? "+" +
                            (this.state.instanceRune.sec_eff_1_1 +
                              this.state.instanceRune.sec_eff_1_3) +
                            hasPercent(this.state.instanceRune.sec_eff_1_0)
                          : ""}
                      </span>
                    </Tooltip>
                  </td>
                </tr>
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                <tr id="RunePopUp-substattable-subrow_2">
                  <td
                    id="RunePopUp-substattable-subrow_2_0"
                    className="has-text-left has-text-light is-size-7-mobile"
                  >
                    {this.state.instanceRune.sec_eff_2_0 !== 0
                      ? mapping.rune.effectTypes[
                          this.state.instanceRune.sec_eff_2_0
                        ]
                      : ""}
                  </td>
                  <td
                    id="RunePopUp-substattable-subrow_2_1"
                    className={
                      "has-text-left is-size-7-mobile " +
                      hasLegendColor(this.state.instanceRune.sec_eff_2_3)
                    }
                  >
                    <Tooltip
                      id="RunePopUp-substattable-subrow_2_1-grind"
                      title={
                        this.state.instanceRune.sec_eff_2_3 !== 0
                          ? this.state.instanceRune.sec_eff_2_1 +
                            " + " +
                            this.state.instanceRune.sec_eff_2_3 +
                            " (grind)"
                          : ""
                      }
                      disableTouchListener={true}
                      placement="top"
                    >
                      <span>
                        {this.state.instanceRune.sec_eff_2_1 !== 0
                          ? "+" +
                            (this.state.instanceRune.sec_eff_2_1 +
                              this.state.instanceRune.sec_eff_2_3) +
                            hasPercent(this.state.instanceRune.sec_eff_2_0)
                          : ""}
                      </span>
                    </Tooltip>
                  </td>
                </tr>
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                <tr id="RunePopUp-substattable-subrow_3">
                  <td
                    id="RunePopUp-substattable-subrow_3_0"
                    className="has-text-left has-text-light is-size-7-mobile"
                  >
                    {this.state.instanceRune.sec_eff_3_0 !== 0
                      ? mapping.rune.effectTypes[
                          this.state.instanceRune.sec_eff_3_0
                        ]
                      : ""}
                  </td>
                  <td
                    id="RunePopUp-substattable-subrow_3_1"
                    className={
                      "has-text-left is-size-7-mobile " +
                      hasLegendColor(this.state.instanceRune.sec_eff_3_3)
                    }
                  >
                    <Tooltip
                      id="RunePopUp-substattable-subrow_3_1-grind"
                      title={
                        this.state.instanceRune.sec_eff_3_3 !== 0
                          ? this.state.instanceRune.sec_eff_3_1 +
                            " + " +
                            this.state.instanceRune.sec_eff_3_3 +
                            " (grind)"
                          : ""
                      }
                      disableTouchListener={true}
                      placement="top"
                    >
                      <span>
                        {this.state.instanceRune.sec_eff_3_1 !== 0
                          ? "+" +
                            (this.state.instanceRune.sec_eff_3_1 +
                              this.state.instanceRune.sec_eff_3_3) +
                            hasPercent(this.state.instanceRune.sec_eff_3_0)
                          : ""}
                      </span>
                    </Tooltip>
                  </td>
                </tr>
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
                {/******************************************************************************************************************************************/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
RunePopUp.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(RunePopUp);
