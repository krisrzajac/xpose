import React from "react";

import { connect } from "react-redux";
import {
  BATTLE_PAGE_LOADED,
  BATTLE_PAGE_UNLOADED,
  API_BATTLE_LOAD
} from "../../constants/constants";

import ajaxApi from "../../ajaxApi";

import PlayerComponent from "./PlayerComponent"

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.battle,
  appName: state.common.appName,
  battleObject: state.battle.battleObject,
  battleObjectLoaded: state.battle.battleObjectLoaded,
  attackBuffToggle: false,

});

const mapDispatchToProps = dispatch => ({
  loadBattleObject: battle_key => {
    console.log("mapDispatchToProps battle_key: ", battle_key);
    dispatch({
      type: API_BATTLE_LOAD,
      payload: ajaxApi.apiGetBattle(battle_key)
    });
  },
  onLoad: (payload) => {
    dispatch({type: BATTLE_PAGE_LOADED, payload})
  },
  onUnload: () => {
    dispatch({ type: BATTLE_PAGE_UNLOADED})
  }
});

class Battle extends React.Component {
  componentWillMount() {
    const { match: { params } } = this.props;
   
    // this.props.loadBattleObject(params.battle_key);
    this.props.onLoad(Promise.all([ajaxApi.apiGetBattle(params.battle_key)]));
    // ajaxApi.apiGetBattle(this.props.match.params.battle_key);
    // ajaxApi.apiGetBattleHeadlines();
        // ajaxApi.apiGetBattle(this.props.match.params.battle_key)

  }
  componentWillUnmount() {
    this.props.onUnload();
  }
  render() {
    console.log("BATTLE PAGE PROPS: " ,  this.props)
    return (
      <div className="BattlePage">
      Heyo
      <div>
        <div className ="BattlePage-player2">
          <PlayerComponent 
            player = {1}
            battle = {this.props.battleObject}
          />
        </div>
        <div className ="BattlePage-player1">
          <PlayerComponent 
            player = {0}
            battle = {this.props.battleObject}
          />
        </div>
      </div>
        <div />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle);
