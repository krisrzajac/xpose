import React from "react";

const StarBar = props => {
  const starArray = new Array(props.stars).fill(0);
  return (
    <div className="row">
      {starArray.map(() => {
        return (
          <img
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
      <div className="container is-fluid">
        <div className="container is-fluid">
          <div className="columns is-mobile is-gapless">
            <div className="column is-4 is-offset-1">
              <img
                src={
                  this.state.instanceMonster.monster
                    ? "../img/monsters/" +
                      this.state.instanceMonster.monster.image_filename
                    : "../img/monsters/missing.jpg"
                }
                alt=""
                className="image is-64x64"
              />
            </div>
            <div className="column is-6">
              <div className="has-text-left">
                <h1 className="title is-5">
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
        <div className="container is-fluid">
          <div className="columns is-mobile">
            <div id ="MonsterPopUp-stat-names" className="column is-2">
              <div className="row has-text-left">HP</div>
              <div className="row has-text-left">ATK</div>
              <div className="row has-text-left">DEF</div>
              <div className="row has-text-left">SPD</div>
              <div className="row" />
              <div className="row has-text-left">CRI Rate</div>
              <div className="row has-text-left">CRI Damage</div>
              <div className="row has-text-left">Resistance</div>
              <div className="row has-text-left">Accuracy</div>
            </div>
            <div id ="MonsterPopUp-base-stats" className="column is-2">
              <div className="row has-text-left">{this.state.instanceMonster.max_hp}</div>
              <div className="row has-text-left">{this.state.instanceMonster.atk}</div>
              <div className="row has-text-left">{this.state.instanceMonster.def}</div>
              <div className="row has-text-left">{this.state.instanceMonster.spd}</div>
              <div className="row" />
              <div className="row has-text-left">{this.state.instanceMonster.critical_rate}</div>
              <div className="row has-text-left">{this.state.instanceMonster.critical_damage}</div>
              <div className="row has-text-left">{this.state.instanceMonster.resist}</div>
              <div className="row has-text-left">{this.state.instanceMonster.accuracy}</div>
            </div>

            <div id ="MonsterPopUp-local-bonus" className="column is-2">
              <div className="row has-text-left">{this.state.instanceMonster.bonus_attack}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_attack}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_defense}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_speed}</div>
              <div className="row" />
              <div className="row has-text-left">{this.state.instanceMonster.bonus_crit_rate}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_crit_damage}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_resistance}</div>
              <div className="row has-text-left">{this.state.instanceMonster.bonus_accuracy}</div>
            </div>

            <div id ="MonsterPopUp-local-total" className="column is-2">
              <div className="row has-text-left">{this.state.instanceMonster.local_total_hp}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_attack}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_defense}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_speed}</div>
              <div className="row" />
              <div className="row has-text-left">{this.state.instanceMonster.local_total_crit_rate}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_crit_damage}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_resistance}</div>
              <div className="row has-text-left">{this.state.instanceMonster.local_total_accuracy}</div>
            </div>
            <div id ="MonsterPopUp-global-bonus" className="column is-2">
              <div className="row has-text-left">{this.state.instanceMonster.max_hp}</div>
              <div className="row has-text-left">{this.state.instanceMonster.atk}</div>
              <div className="row has-text-left">{this.state.instanceMonster.def}</div>
              <div className="row has-text-left">{this.state.instanceMonster.spd}</div>
              <div className="row" />
              <div className="row has-text-left">{this.state.instanceMonster.critical_rate}</div>
              <div className="row has-text-left">{this.state.instanceMonster.critical_damage}</div>
              <div className="row has-text-left">{this.state.instanceMonster.resist}</div>
              <div className="row has-text-left">{this.state.instanceMonster.accuracy}</div>
            </div>
            <div id ="MonsterPopUp-global-totals" className="column is-2">
              <div className="row has-text-left">{this.state.instanceMonster.final_total_hp}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_attack}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_defense}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_speed}</div>
              <div className="row" />
              <div className="row has-text-left">{this.state.instanceMonster.final_total_crit_rate}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_crit_damage}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_resistance}</div>
              <div className="row has-text-left">{this.state.instanceMonster.final_total_accuracy}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsterPopUp;
