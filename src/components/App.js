import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';
import renderAuth from 'components/renderAuth';

class App extends Component {
  renderSignInButton() {
    let button;
    if (this.props.auth) {
      button = {
        newState: false,
        text: 'Sign Out',
        color: 'red',
      };
    } else {
      button = {
        newState: true,
        text: 'Sign In',
        color: 'primary',
      };
    }

    return (
      <div className="item">
        <button
          className={`ui button ${button.color}`}
          onClick={() => this.props.changeAuth(button.newState)}
        >
          {button.text}
        </button>
      </div>
    );
  }

  renderPostsButton() {
    const PostButton = () => {
      return (
        <Link to="/post" className="item">
          Post
        </Link>
      );
    };
    return renderAuth(PostButton);
  }

  renderHeader() {
    return (
      <div className="ui borderless menu fixed">
        <div className="ui container grid">
          <div className="row">
            <Link to="/" className="item">
              Home
            </Link>
            {this.renderPostsButton()}
            <div className="right menu">{this.renderSignInButton()}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="ui container" style={{ marginTop: '5rem' }}>
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { changeAuth },
)(App);
