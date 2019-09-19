export default ({ dispatch }) => next => action => {
  // Check to see if the action is a NOT a promise
  if (!action.payload || !action.payload.then) {
    // Foward the action  to the next middleware in the chain
    return next(action);
  }

  // Wait for the promise to resolve
  action.payload.then(response => {
    // Rerun the action through the middlewares but this time with the
    // response data instead of the promise
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
