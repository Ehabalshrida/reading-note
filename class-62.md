# Redux - Combined Reducers

## Why choose Redux instead of the Context API for global state?

If you are using Redux only to avoid passing props down to deeply nested components, then you could replace Redux with the Context API. It is exactly intended for this use case. On the other hand, if you are using Redux for everything else (having a predictable state container, handling your application's logic outside of your components, centralizing your application's state, using Redux DevTools to track when, where, why, and how your application's state changed, or using plugins such as Redux Form, Redux Saga, Redux Undo, Redux Persist, Redux Logger, etc…), then there is absolutely no reason for you to abandon Redux. The Context API doesn't provide any of this.

## What is the purpose of a reducer?

 In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action

## What does an action contain?

 an object that have type and paylod

## Why do we need to copy the state in a reducer?

 to avoid losing existing data

## Terms

**immutable state:**(unchangeable state) state cannot be modified after it is created. React state should be treated as immutable.|
|time travel in redux|Time travel is the ability to move back and forth among the previous states of an application and view the results in real time. With Redux, given a specific state and a specific action, the next state of the application is always exactly the same.|
**action creator:** An action creator is merely a function that returns an action object. Redux includes a utility function called bindActionCreators for binding one or more action creators to the store's dispatch() function.|
**reducer:**  A reducer is a function that determines changes to an application's state.|
|dispatch| dispatch() is the method used to dispatch actions and trigger state changes to the store. react-redux is simply trying to give you convenient access to it.|
