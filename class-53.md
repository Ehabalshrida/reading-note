# Readings: Component Lifecycle / useEffect() 


## Why do we not need more .html pages in a multi-page React app?

*A react application need not be a single page application. React provides you with a way model HTML in terms of classes with specific render logic, but doesn't impose any sort of specific application logic like single vs multi page*

##  If we wanted a component to show up on every page, where would we put it and why?

*Inside the BrowserRouter , outside a Route*

## What does routing do with the components that were rendered when a new route is requested

*
One way to do would be to pass the component prop an inline function. When you use component, the router uses React. createElement to create a new React element from the given component. That means if you provide an inline function to the component prop, you would create a new component every render*


## What does props.children contain?

*
props. children does is that it is used to display whatever you include between the opening and closing tags when invoking a component. This component contains an `<img>` that is receiving some props and then it is displaying `{props. children}` .*


## How do useState() and this.setState() differ?

*
The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components*

*
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses*


*
Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax: setState(prevState => { // Object*

## State Hook

*
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We'll learn other Hooks later*


## Mounting and Un-Mounting

*
The mount command mounts a storage device or filesystem, making it accessible and attaching it to an existing directory structure. The umount command "unmounts" a mounted filesystem, informing the system to complete any pending read or write operations, and safely detaching it*

