import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return (
        <div className="ui segment" key={comment}>
          {comment}
        </div>
      );
    });
  };

  render() {
    return <div className="ui comments">{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
