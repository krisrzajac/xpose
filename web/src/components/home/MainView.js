import React from "react";

import { connect } from "react-redux";
import BattleHeadlineContainer from "./BattleHeadlineContainer";

const mapStateToProps = state => {
  return {
    ...state.home,
    headlineArray: state.home.headlineArray
  };
};
const mapDispatchToProps = dispatch => ({});
const MainView = props => {

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <div>
            {this.props &&
            this.props.headlineArray &&
            this.props.headlineArray ? (
              <BattleHeadlineContainer
                headlineArray={this.props.headlineArray}
              />
            ) : null}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
