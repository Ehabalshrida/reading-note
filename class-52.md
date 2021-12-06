# Readings: useState() Hook

## How does React differ from vanilla JS/HTML/CSS?

*avaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. Common examples of JavaScript that you might use every day include adding interactive behavior to web pages, Creating web and mobile apps, Building web servers and developing server applications. one more thing, when we say Vanilla JS which means plain JS.*

*What are the main differences between Vanilla JS and React JS:*

- Vanilla JS requires a lot of typing

- Vanilla JS is fragile
- React JS is for code organization
- React JS files are reusable


## What is the primary difference between a function component and a class component?

*
A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components*


## Functional Components

*
Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI*

## Children / Child Components

*
Component is a parent for myApp component class. Parent and child component can communicate through props in one direction. A parent can pass something (e.g. its own state) to a child through props. Ohhk, i was thinking that let say class abc extends React.*


## Hook

*We know that components and top-down data flow help us organize a large UI into small, independent, reusable pieces. However, we often can’t break complex components down any further because the logic is stateful and can’t be extracted to a function or another component. Sometimes that’s what people mean when they say React doesn’t let them “separate concerns.”*

*These cases are very common and include animations, form handling, connecting to external data sources, and many other things we want to do from our components. When we try to solve these use cases with components alone, we usually end up with:*

- Huge components that are hard to refactor and test.
- Duplicated logic between different components and lifecycle methods.
- Complex patterns like render props and higher-order components.


## state hook 

*Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.*


### Reading State:
*When we want to display the current count in a class, we read this.state.count:*

`<p>You clicked {this.state.count} times</p>`

In a function, we can use count directly:

  `<p>You clicked {count} times</p>`

## Updating State:
*In a class, we need to call this.setState() to update the count state:*

  `<button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>`

^In a function, we already have setCount and count as variables so we don’t need this:*

  `<button onClick={() => setCount(count + 1)}>
    Click me
  </button>`


## Using the State Hook

- State Hook

*Here, useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. (We’ll show an example comparing useState to this.state in Using the State Hook.)*

- Effect Hook

*You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.*

*The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. (We’ll show examples comparing useEffect to these methods in Using the Effect Hook.)*

