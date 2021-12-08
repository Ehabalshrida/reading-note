Reading: Advanced State with Reducers


## How can we ensure that an effect hook runs only once?

*If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ( [] ) as a second argument. This tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run*

## Can `useState()` update more than one state variable at the same time?

*You can have multiple states inside of a single component: call multiple times useState() .*

*To update the component's state invoke the updater function setState(newState) with the new state. The component re-renders and state receives the new value newState.,Invoking the state updater function setState(newState) with the new value updates the state*

## Is useState() synchronous?

*useState and setState both are asynchronous. They do not update the state immediately but have queues that are used to update the state object. This is done to improve the performance of the rendering of React components. Even though they are asynchronous, the useState and setState functions do not return promises*


## State Hook

*A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We'll learn other Hooks later*

## Component Lifecycle

*Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle. There are different lifecycle methods that React provides at different phases of a component's life. ... At present, we know what lifecycle methods are and why they are important*

## useReducer

*An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)*

*useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.*

**