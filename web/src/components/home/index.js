import React from "react";

import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from "../../constants/constants";

import ajaxApi from "../../ajaxApi";
import BattleHeadlineContainer from "./BattleHeadlineContainer";

const Promise = global.Promise;

const mapStateToProps = state => {
  return {
    ...state.home,
    headlineArray: state.home.headlineArray,
    appName: state.common.appName
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({
      type: HOME_PAGE_LOADED, payload
    }),
    onUnload: () => 
    dispatch({
      type: HOME_PAGE_UNLOADED
    })
});

class Home extends React.Component {
  UNSAFE_componentWillMount() {

    this.props.onLoad(Promise.resolve(ajaxApi.apiGetBattleHeadlines()));
  
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  render() {
    return (
      <div className="home-page">
        <div>
          {this.props &&
          this.props.headlineArray &&
          this.props.headlineArray ? (
            <BattleHeadlineContainer headlineArray={this.props.headlineArray} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
