# Redux - Additional Topics

## What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?

The most 'redux-like' way of handling the pre-loading of data would be to fire off the asynchronous action in the lifecycle method (probably componentWillMount ) of a Higher Order Component that wraps your app. However, you will not use the results of the API call directly in that component - it needs to be handled with a reducer that puts it into your app store. This will require you to use some sort of a thunk middleware to handle the asynchronous action. Then you will use mapStateToProps to simply pass it down to the component that renders the data.

## When using a thunk/async action that dispatches the actual action, which do you export from your reducer?

When the asynchronous task ends, a callback should manage the outcome of the asynchronous task and appropriately update the state with a positive or negative response, support asynchronous actions by modifying their reducers, i.e. making sure that the reducer intercepting that action starts the asynchronous task and manages its outcome

## Terms


**middleware:**

 Redux middleware is a snippet of code that provides a third-party extension point between dispatching an action and the moment it reaches the reducers.

**thunk**

The thunk middleware allows us to write functions that get dispatch and getState as arguments. The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.|
