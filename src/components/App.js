import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components//CommentList';

export default () => {
  return (
    <div className="ui container">
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
