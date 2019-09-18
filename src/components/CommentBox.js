import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label className="ui header large">Add a comment</label>
            <textarea onChange={this.handleChange} value={this.state.comment} />
          </div>
          <button className="ui button fluid primary">Submit Comment</button>
        </form>
        <button
          className="ui button fluid fetch-comments"
          style={{ marginTop: '1em' }}
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments },
)(CommentBox);
