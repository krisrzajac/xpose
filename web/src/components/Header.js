import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../img/monsters/devilmon_dark.png";
import { Spring } from "react-spring";

const mapStateToProps = state => ({
  ...state.common
});

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

const Banner = props => {
  return (
    <header className="App-banner">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to SWXpose</h1>
    </header>
  );
};

class Header extends React.Component {

  render() {
    
    return (
      <div className="full-header">
        <nav className="navbar navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {this.props.appName.toLowerCase()}
            </Link>

            <LoggedOutView currentUser={this.props.currentUser} />

            <LoggedInView currentUser={this.props.currentUser} />
          </div>
        </nav>
        <header className="App-banner">
          <Banner currentPage={this.props.currentPage} />
        </header>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1,reset:true  }}>
          {styles => <div style={styles}>i will fade in</div>}
        </Spring>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
