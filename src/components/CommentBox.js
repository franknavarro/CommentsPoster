import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };
  /*
   * The following block of code is here because the lastpass extension
   * breaks how the enter button works in textareas and logs an error to the
   * cancel. The alternative would be to disable the lastpass extension from
   * your web browser however this here for those using that extension
   */
  componentDidMount() {
    document.addEventListener('keydown', this.handleHitEnterKey, true);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleHitEnterKey, true);
  }

  handleHitEnterKey = e => {
    const ENTERY_KEY_CODE = 13;
    if (
      e.target.name === 'comment_input' &&
      (e.key === 'Enter' || e.keyCode === ENTERY_KEY_CODE)
    ) {
      e.stopPropagation();
    }
  };
  /* ******************************************************************* */

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
            <textarea
              name="comment_input"
              onChange={this.handleChange}
              value={this.state.comment}
            />
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
)(requireAuth(CommentBox));
