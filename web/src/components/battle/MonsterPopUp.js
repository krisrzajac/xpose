import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
const StarBar = props => {
  const starArray = new Array(props.stars).fill(0);
  return (
    <div className="row">
      {starArray.map((object, index) => {
        return (
          <img
            key={index}
            src={
              props.isAwakened
                ? "../img/stars/star-awakened.png"
                : "../img/stars/star-unawakened.png"
            }
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

class MonsterPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      instanceMonster: props.instanceMonster,
      battle_key: props.battle_key,
      wizard_id: props.wizard_id
    };
  }

  render() {
    let isAwakened =
      this.state.instanceMonster.unit_master_id.toString()[
        this.state.instanceMonster.unit_master_id.toString().length - 2
      ] === "1"
        ? true
        : false;

    return (
      <div id="MonsterPopUp-container">
        <div className="container is-fluid is-flex-mobile">
          <div className="columns is-mobile is-gapless is-centered">
            <div className="column is-2 is-offset-1">
              <img
                src={
                  this.state.instanceMonster.monster
                    ? "../img/monsters/" +
                      this.state.instanceMonster.monster.image_filename
                    : "../img/monsters/missing.jpg"
                }
                alt=""
                className="image"
              />
            </div>
            <div className="column is-6">
              <div className="has-text-left has-text-light">
                <h1 className="title is-5 is-mobile has-text-light">
                  {this.state.instanceMonster.monster.name}
                </h1>
                <div>
                  <StarBar
                    stars={this.state.instanceMonster.class}
                    isAwakened={isAwakened}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container is-fluid is-mobile is-flex-mobile">
          <table className="table is-striped is-narrow is-hoverable has-background-dark">
            <thead id="MonsterPopUp-thead" className="thead">
              <tr>
                <th className="has-text-left has-text-light is-size-7-mobile">
                  Stats
                </th>
                <th className="has-text-right has-text-light is-size-7-mobile">
                  Base
                </th>
                <th className="has-text-right has-text-light is-size-7-mobile">
                  Runes
                </th>
                <th className="has-text-right has-text-light is-size-7-mobile">
                  Total
                </th>
                <th className="has-text-right has-text-light is-size-7-mobile">
                  Global
                </th>
                <th className="has-text-right has-text-light is-size-7-mobile">
                  Final Total
                </th>
              </tr>
            </thead>
            {/******************************************************************************************************************************************/}
            {/******************************************************************************************************************************************/}
            {/******************************************************************************************************************************************/}
            <tbody className="tbody">
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-HP">
                <td
                  id="MonsterPopUp-stat-name-HP"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  HP
                </td>

                <td
                  id="MonsterPopUp-base-stats-HP"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-max-HP"
                    title={this.state.instanceMonster.con + " CON * 15"}
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{this.state.instanceMonster.max_hp}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-bonus-HP"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-HP"
                    title={
                      (this.state.instanceMonster.set_hp_percent_value === 0
                        ? ""
                        : this.state.instanceMonster.set_hp_percent_value +
                          " (" +
                          this.state.instanceMonster.set_hp_percent +
                          "% set) + ") +
                      this.state.instanceMonster.rune_hp_flat +
                      " (flat) + " +
                      this.state.instanceMonster.rune_hp_percent_value +
                      " (" +
                      this.state.instanceMonster.rune_hp_percent +
                      "%)"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{"+" + this.state.instanceMonster.bonus_hp}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-HP"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-HP"
                    title={
                      this.state.instanceMonster.max_hp +
                      " + " +
                      this.state.instanceMonster.bonus_hp
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{this.state.instanceMonster.local_total_hp}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-HP"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-HP"
                    title={
                      (this.state.instanceMonster.tower_hp === 0
                        ? ""
                        : this.state.instanceMonster.tower_hp +
                          " (" +
                          // "TODO:TowerHP% " +
                          "% tower) + ") +
                      (this.state.instanceMonster.flag_hp === 0
                        ? ""
                        : this.state.instanceMonster.flag_hp +
                          " (" +
                          // "TODO:FlagHP% " +
                          "% flag) + ") +
                      (this.state.instanceMonster.leader_hp_value === 0
                        ? ""
                        : this.state.instanceMonster.leader_hp_value +
                          " (" +
                          this.state.instanceMonster.leader_hp_percent +
                          "% lead) + ") +
                      (this.state.instanceMonster.group_hp_value === 0
                        ? ""
                        : this.state.instanceMonster.leader_hp_value +
                          " (" +
                          this.state.instanceMonster.leader_hp_percent +
                          "% enhance)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.tower_hp +
                          this.state.instanceMonster.flag_hp +
                          this.state.instanceMonster.leader_hp_value +
                          this.state.instanceMonster.group_hp_value)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-HP"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_hp}
                </td>
              </tr>
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-ATK">
                <td
                  id="MonsterPopUp-stat-name-ATK"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  ATK
                </td>
                <td
                  id="MonsterPopUp-base-stats-ATK"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.atk}
                </td>
                <td
                  id="MonsterPopUp-local-bonus-ATK"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-ATK"
                    title={
                      (this.state.instanceMonster.set_attack_percent_value === 0
                        ? ""
                        : this.state.instanceMonster.set_attack_percent_value +
                          " (" +
                          this.state.instanceMonster.set_attack_percent +
                          "% set) + ") +
                      this.state.instanceMonster.rune_attack_flat +
                      " (flat) + " +
                      this.state.instanceMonster.rune_attack_percent_value +
                      " (" +
                      this.state.instanceMonster.rune_attack_percent +
                      "%)"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{"+" + this.state.instanceMonster.bonus_attack}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-ATK"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  <Tooltip
                    id="tooltip-local-total-ATK"
                    title={
                      this.state.instanceMonster.atk +
                      " + " +
                      this.state.instanceMonster.bonus_attack
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{this.state.instanceMonster.local_total_attack}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-ATK"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-ATK"
                    title={
                      (this.state.instanceMonster.tower_attack_basic === 0
                        ? ""
                        : this.state.instanceMonster.tower_attack_basic +
                          " (" +
                          // "TODO:Towerattack% " +
                          "% tower) + ") +
                      (this.state.instanceMonster.tower_attack_colored === 0
                        ? ""
                        : this.state.instanceMonster.tower_attack_colored +
                          " (" +
                          // "TODO:Towerattack% " +
                          "% color tower) + ") +
                      (this.state.instanceMonster.flag_attack === 0
                        ? ""
                        : this.state.instanceMonster.flag_attack +
                          " (" +
                          // "TODO:Flagattack% " +
                          "% flag) + ") +
                      (this.state.instanceMonster.leader_attack_value === 0
                        ? ""
                        : this.state.instanceMonster.leader_attack_value +
                          " (" +
                          this.state.instanceMonster.leader_attack_percent +
                          "% lead) + ") +
                      (this.state.instanceMonster.group_attack_value === 0
                        ? ""
                        : this.state.instanceMonster.group_attack_value +
                          " (" +
                          this.state.instanceMonster.group_attack_percent +
                          "% fight)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.tower_attack_basic +
                          this.state.instanceMonster.tower_attack_colored +
                          this.state.instanceMonster.flag_attack +
                          this.state.instanceMonster.leader_attack_value +
                          this.state.instanceMonster.group_attack_value)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-ATK"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_attack}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-DEF">
                <td
                  id="MonsterPopUp-stat-name-DEF"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  DEF
                </td>
                <td
                  id="MonsterPopUp-base-stats-DEF"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.def}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-DEF"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-DEF"
                    title={
                      (this.state.instanceMonster.set_defense_percent_value ===
                      0
                        ? ""
                        : this.state.instanceMonster
                            .set_defense_percent_value ===
                          0 +
                            " (" +
                            this.state.instanceMonster.set_defense_percent +
                            "% set) + ") +
                      this.state.instanceMonster.rune_defense_flat +
                      " (flat) + " +
                      this.state.instanceMonster.rune_defense_percent_value +
                      " (" +
                      this.state.instanceMonster.rune_defense_percent +
                      "%)"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.bonus_defense}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-DEF"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-DEF"
                    title={
                      this.state.instanceMonster.def +
                      " + " +
                      this.state.instanceMonster.bonus_defense
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {this.state.instanceMonster.local_total_defense}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-DEF"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-DEF"
                    title={
                      (this.state.instanceMonster.tower_defense === 0
                        ? ""
                        : this.state.instanceMonster.tower_defense +
                          " (" +
                          // "TODO:Towerdefense% " +
                          "% tower) + ") +
                      (this.state.instanceMonster.flag_defense === 0
                        ? ""
                        : this.state.instanceMonster.flag_defense +
                          " (" +
                          // "TODO:Flagdefense% " +
                          "% flag) + ") +
                      (this.state.instanceMonster.leader_defense_value === 0
                        ? ""
                        : this.state.instanceMonster.leader_defense_value +
                          " (" +
                          this.state.instanceMonster.leader_defense_percent +
                          "% lead) + ") +
                      (this.state.instanceMonster.group_defense_value === 0
                        ? ""
                        : this.state.instanceMonster.leader_defense_value +
                          " (" +
                          this.state.instanceMonster.leader_defense_percent +
                          "% determination)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.tower_defense +
                          this.state.instanceMonster.flag_defense +
                          this.state.instanceMonster.leader_defense_value +
                          this.state.instanceMonster.group_defense_value)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-DEF"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_defense}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-SPD">
                <td
                  id="MonsterPopUp-stat-name-SPD"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  SPD
                </td>
                <td
                  id="MonsterPopUp-base-stats-SPD"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.spd}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-SPD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-SPD"
                    title={
                      (this.state.instanceMonster.set_speed_percent_value === 0
                        ? ""
                        : this.state.instanceMonster.set_speed_percent_value +
                          " (" +
                          this.state.instanceMonster.set_speed_percent +
                          "% set) + ") + this.state.instanceMonster.rune_speed
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{"+" + this.state.instanceMonster.bonus_speed}</span>
                  </Tooltip>
                </td>
                <td
                  id="MonsterPopUp-local-total-SPD"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-SPD"
                    title={
                      this.state.instanceMonster.spd +
                      " + " +
                      this.state.instanceMonster.bonus_speed
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>{this.state.instanceMonster.local_total_speed}</span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-SPD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-SPD"
                    title={
                      (this.state.instanceMonster.tower_speed === 0
                        ? "nada"
                        : this.state.instanceMonster.tower_speed +
                          " (" +
                          // "TODO:Towerspeed% " +
                          "% tower)") +
                      (this.state.instanceMonster.leader_speed_value === 0
                        ? ""
                        : " + " +
                          this.state.instanceMonster.leader_speed_value +
                          " (" +
                          this.state.instanceMonster.leader_speed_percent +
                          "% lead)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.tower_speed +
                          this.state.instanceMonster.leader_speed_value)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-SPD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_speed}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-CR">
                <td
                  id="MonsterPopUp-stat-name-CR"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  CRI Rate
                </td>
                <td
                  id="MonsterPopUp-base-stats-CR"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.critical_rate}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-CR"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-CR"
                    title={
                      (this.state.instanceMonster.set_crit_rate === 0
                        ? ""
                        : +this.state.instanceMonster.set_crit_rate +
                          "%(set) + ") +
                      this.state.instanceMonster.rune_crit_rate +
                      "%"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.bonus_crit_rate}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-CR"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-CR"
                    title={
                      this.state.instanceMonster.critical_rate +
                      " + " +
                      this.state.instanceMonster.bonus_crit_rate
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {this.state.instanceMonster.local_total_crit_rate}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-CR"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-CR"
                    title={
                      this.state.instanceMonster.leader_crit_rate === 0
                        ? "nada"
                        : this.state.instanceMonster.leader_crit_rate +
                          "% (lead)"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.leader_crit_rate}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-CR"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_crit_rate}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-CD">
                <td
                  id="MonsterPopUp-stat-name-CD"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  CRI Damage
                </td>
                <td
                  id="MonsterPopUp-base-stats-CD"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.critical_damage}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-CD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-CD"
                    title={
                      (this.state.instanceMonster.set_crit_damage === 0
                        ? ""
                        : this.state.instanceMonster.set_crit_damage +
                          "%(set) + ") +
                      this.state.instanceMonster.rune_crit_damage +
                      "%"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.bonus_crit_damage}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-CD"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-CD"
                    title={
                      this.state.instanceMonster.critical_damage +
                      " + " +
                      this.state.instanceMonster.bonus_crit_damage
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {this.state.instanceMonster.local_total_crit_damage}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-CD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-CD"
                    title={
                      (this.state.instanceMonster.tower_crit_damage === 0
                        ? ""
                        : this.state.instanceMonster.tower_crit_damage +
                          "% (tower)") +
                      (this.state.instanceMonster.flag_crit_damage === 0
                        ? ""
                        : " + " +
                          this.state.instanceMonster.flag_crit_damage +
                          "% (flag)") +
                      (this.state.instanceMonster.leader_crit_damage === 0
                        ? ""
                        : " + " +
                          this.state.instanceMonster.leader_crit_damage +
                          "% (lead)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.tower_crit_damage +
                          this.state.instanceMonster.flag_crit_damage +
                          this.state.instanceMonster.leader_crit_damage)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-CD"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_crit_damage}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-RES">
                <td
                  id="MonsterPopUp-stat-name-RES"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  Resistance
                </td>
                <td
                  id="MonsterPopUp-base-stats-RES"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.resist}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-RES"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-RES"
                    title={
                      (this.state.instanceMonster.set_resistance === 0
                        ? ""
                        : this.state.instanceMonster.set_resistance +
                          "%(set) + ") +
                      this.state.instanceMonster.rune_resistance +
                      "%"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.bonus_resistance}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-RES"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-RES"
                    title={
                      this.state.instanceMonster.resist +
                      " + " +
                      this.state.instanceMonster.bonus_resistance
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {this.state.instanceMonster.local_total_resistance}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-RES"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-RES"
                    title={
                      (this.state.instanceMonster.leader_resistance === 0
                        ? ""
                        : this.state.instanceMonster.leader_resistance +
                          "% (lead)") +
                      (this.state.instanceMonster.group_resistance === 0
                        ? ""
                        : " + " +
                          this.state.instanceMonster.group_resistance +
                          "% (tolerance)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.leader_resistance +
                          this.state.instanceMonster.group_resistance)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-RES"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_resistance}
                </td>
              </tr>

              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}
              {/******************************************************************************************************************************************/}

              <tr id="MonsterPopUp-row-ACC">
                <td
                  id="MonsterPopUp-stat-name-ACC"
                  className="has-text-left has-text-light is-size-7-mobile"
                >
                  Accuracy
                </td>
                <td
                  id="MonsterPopUp-base-stats-ACC"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  {this.state.instanceMonster.accuracy}
                </td>

                <td
                  id="MonsterPopUp-local-bonus-ACC"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-local-bonus-CD"
                    title={
                      (this.state.instanceMonster.set_accuracy === 0
                        ? ""
                        : this.state.instanceMonster.set_accuracy +
                          "%(set) + ") +
                      this.state.instanceMonster.rune_accuracy +
                      "%"
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" + this.state.instanceMonster.bonus_accuracy}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-local-total-ACC"
                  className="has-text-right has-text-light is-size-7-mobile"
                >
                  <Tooltip
                    id="tooltip-local-total-ACC"
                    title={
                      this.state.instanceMonster.accuracy +
                      " + " +
                      this.state.instanceMonster.bonus_accuracy
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {this.state.instanceMonster.local_total_accuracy}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-bonus-ACC"
                  className="has-text-right has-text-light is-size-7-mobile has-text-success"
                >
                  <Tooltip
                    id="tooltip-global-bonus-ACC"
                    title={
                      (this.state.instanceMonster.leader_accuracy === 0
                        ? ""
                        : this.state.instanceMonster.leader_accuracy +
                          "% (lead)") +
                      (this.state.instanceMonster.group_accuracy === 0
                        ? ""
                        : " + " +
                          this.state.instanceMonster.group_accuracy +
                          "% (accuracy)")
                    }
                    disableTouchListener={true}
                    placement="top"
                  >
                    <span>
                      {"+" +
                        (this.state.instanceMonster.leader_accuracy +
                          this.state.instanceMonster.group_accuracy)}
                    </span>
                  </Tooltip>
                </td>

                <td
                  id="MonsterPopUp-global-totals-ACC"
                  className="has-text-right has-text-light is-size-7-mobile has-text-danger"
                >
                  {this.state.instanceMonster.final_total_accuracy}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
MonsterPopUp.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MonsterPopUp);
