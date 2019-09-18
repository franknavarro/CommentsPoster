import React, { Component } from 'react';
import { connect } from 'react-redux';

export default RenderComponent => {
  class ComposedComponent extends Component {
    render() {
      if (!this.props.auth) {
        return null;
      } else {
        return <RenderComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };

  const NewComponent = connect(mapStateToProps)(ComposedComponent);
  return <NewComponent />;
};
