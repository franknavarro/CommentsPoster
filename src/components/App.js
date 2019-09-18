import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components//CommentList';

export default () => {
  return (
    <div className="ui container">
      <CommentBox />
      <CommentList />
    </div>
  );
};
