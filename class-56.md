# Context API

## Describe use cases useState() vs useReducer()

- useState is a Basic Hook for managing simple state transformation and useReducer is an Additional Hook for managing more complex state logic, it is worth noting that useState uses the useReducer internally. This implies that you could use useReducer for everything you can do with useState.

- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

## Why do custom hooks need the use prefix?

Custom hooks are normal JS functions, named with the prefix ‘use’, that can use hooks inside of it and contain a common stateful logic to be reused in other components.

## What do custom hooks usually do?

 Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks.

## Using any list of custom hooks, research and name one that you think will be useful in your applications

1. useClippy
A hook for copying data to the clipboard and retrieving/pasting it using Ctrl-C/Command-C and Ctrl-V/Command-V.

2. useBrowserContextCommunication
useBrowserContextCommunication uses the Broadcast Channel API to deliver an easy solution for communication between different browser contexts (tabs, iframes, windows).

3. useScript
useScript is a hook for loading (and notifying when they’re loaded) external scripts, dynamically.

## Describe how a hook that fetches API data might work

First, we’re going to import stuff we’re going to use and create a function.
The next step is to add a useState hook and to define the name of the state - in our case, that's data. Then, we define the function we’ll use later on to update the state - setData.
In the end, we set the initial value of our state, which is null</strong in our case.

fter adding our useState hook to handle the data, the next step is to make the fetch request.

First, we’re going to create a constant fetchURL, in case we need to reuse our endpoint to fetch other data, except for posts. You can check here what else you can fetch and play with.

Then we create an arrow function named getData and inside of that function, we’re going to call fetch().
Inside fetch, we’re going to provide a previously defined constant fetchURL and add /posts, since we’re fetching posts.
After defining our request, it's time to bring in useEffect. Then we’re calling our getData() function inside of the useEffect hook to set it to the local state.

At the end of useEffect, we added an empty array [], because that way, useEffect runs only once.

## Terms

| Term                            | Def                   |
| :-------------                  |   :----------         |
| reducer                |is one of the additional Hooks , An alternative to the useState Hook, it helps you manage complex state logic in React applications, useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.so reducers are responsible for handling transitions from one state to the next state in your application. |
