import React, { Component } from "react";
import logo from "./devilmon_dark.png";
import { Spring, Transition, animated } from "react-spring";
import "./App.css";


const defaultStyles = {
  overflow: "hidden",
  width: "100%",
  backgroundColor: "#247BA0",
  color: "white",
  display: "flex",
  justifyContent: "center",
  fontSize: "4em"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onMouseClick() {
    alert("mouse clickage");
  }
  componentDidMount() {
    this.apiGetBattleHeadlines()
      .then(res => {
        this.setState({ response: res.models });
      })
      .catch(err => console.log(err));
  }

  apiGetBattleHeadlines = async () => {
    const response = await fetch("api/instanceBattleHeadLines");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dongshrouder</h1>
        </header>
        <p className="App-intro" />
        <input onChange={this.onUpdateUser} />
        {this.props.user}
        <p className="Battle-list">battle list stuff here!</p>
        <div>
          {this.state && this.state.response && this.state.response[0] ? (
            <BattleHeadlineContainer headlineArray={this.state.response} />
          ) : null}
        </div>
      </div>
    );
  }
}
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

class BattleHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      battle: props.battle
    };
  }

  render() {
    return (
      <li>
        <div className="Battle-headline-title">
          Battle ID: {this.state.battle.battle_key}
        </div>

        <div className="Battle-headline-player">
          {this.state.battle.instanceWizards[0].wizard_id} VS.{" "}
          {this.state.battle.instanceWizards[1].wizard_id}
        </div>

        <div className="Battle-headline-iconbar">
          {this.state.battle.instanceWizards.map(function(object, i) {
            return (
              <PortraitRow
                key={
                  "PortraitRow-" +
                  this.state.battle.id +
                  "-" +
                  this.state.battle.battle_key +
                  "-" +
                  object.wizard_id
                }
                battle_key={object.battle_key}
                monsters={object.instanceMonsters}
              />
            );
          }, this)}
        </div>
      </li>
    );
  }
}

class BattleHeadlineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      headlineArray: props.headlineArray
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <ul>
        {this.state.headlineArray.map(function(object, i) {
          return (
            <BattleHeadline
              key={"BattleHeadline-" + object.id + "-" + object.battle_key}
              battle={object}
            />
          );
        })}
      </ul>
    );
  }
}

//NOTE THE Parenthesis around the bracket here - arrow function
//(state) are parameters
//arrow denotes function =>
//but ({ ............    })
//this is RETURNING THE JS OBJECT - remember this syntacticalistic sugar
// const mapStateToProps = state => ({
//   products: state.products,
//   user: state.user
// });

const productsSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(state => state.user, user => user);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
);

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
