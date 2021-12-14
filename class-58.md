# "< Login /> and < Auth />"

## Why is the Context API useful?

* ## The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux

## Can a component outside of a provider get its context?

* ## when using global context

## What are some common use cases for using the Context API?

* ## Context is primarily used when some data needs to be accessible by many components at different nesting levels

## Describe “Context Hell”

* ## multiple context provider in class component

## Document the following Vocabulary Terms

## Terms


- global state: a global state is a set of local states which are all concurrent with each other. By concurrent, we mean that no two states have a cause and effect relationship with each other.

- global context ontext that affects the entire application, and it will share data to everything in the React component tree.|
- provider Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.|
- consumer A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a function as a child. The function receives the current context value and returns a React node.|
