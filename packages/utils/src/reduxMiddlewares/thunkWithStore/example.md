```javascript
// case of registring default action
const exampleApi = action => payload => async ({
  dispatch,
  getstate,
  disbatch,
  /* ... more */
}) => {
  // dispatch(action.pending());
  const [err, data] = await until(axios.post('...', req));
  // do sth with state
  // const state = getstate();
  // some batch operation: batch or disbatch from redux-act
  // resolve/reject results
  return dispatch(!err ? action.success(data) : action.failure(err));
};
```
