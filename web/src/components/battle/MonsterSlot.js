import React from "react";
import { Modal } from "antd";
import MonsterPopUp from "./MonsterPopUp";
import "antd/dist/antd.css";

class MonsterSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      instanceMonster: props.instanceMonster,
      battle_key: props.battle_key,
      wizard_id: props.wizard_id
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="column">
       <h1 className="title is-5 is-mobile" >{this.state.instanceMonster.monster.name}</h1>
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
          className="BattlePage-icon"
          type="primary"
          onClick={this.showModal}
        />
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer ={null}
          mask= {false}
          width = {1040}
        >
          <MonsterPopUp
            instanceMonster={this.state.instanceMonster}
            battle_key={this.state.battle_key}
            wizard_id={this.state.wizard_id}

          />
        </Modal>
        <div className="columns">
          <div className="column is-12">
            <div className="columns">
              <div className="column is-1" />
              <div className="column is-5">Local HP:</div>
              <div className="column is-5">
                {this.state.instanceMonster.local_total_hp}
              </div>
              <div className="column is-1" />
            </div>
            <div className="columns">
              <div className="column is-1" />
              <div className="column is-5">Final HP:</div>
              <div className="column is-5">
                {this.state.instanceMonster.final_total_hp}
              </div>
              <div className="column is-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsterSlot;
