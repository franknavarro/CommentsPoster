import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

it('creates on li per comment', () => {
  expect(wrapped.find('.segment').length).toEqual(2);
});

it('shows the text for each comment', () => {
  const wrappedText = wrapped.render().text();
  expect(wrappedText).toContain('Comment 1');
  expect(wrappedText).toContain('Comment 2');
});
