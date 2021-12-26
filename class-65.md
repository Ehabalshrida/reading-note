# Reading: React Native

## Compare and Contrast Redux Toolkit with Redux “Ducks”


*The Redux Toolkit generates the new state from the direct changes to the old state. ... The reducers that are written with immer are 2 to 3 times slower than a normal Redux reducer. Here is an example of a Reducer function that uses the state as immutable and one which makes changes directly to the state*

## What is the principle advantage of Redux Toolkit

*Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is beneficial to all Redux users regardless of skill level or experience*


## redux toolkit slices

*What is createSlice in Redux Toolkit? createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. It automatically generates action creators and action types that correspond to the reducers and state*


## namespace

*namespacing gives us much better control over which subspaces interact with specific sections of the state.*

*We didn't need to use the exact same reducer for both sub-applications for this, but it does demonstrate how Redux Subspace can be used to create reusable redux applications.*

## react Native basics 

*React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.*

*Create native apps for Android and iOS using React
React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.*

*Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.*


*React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.*

*Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain two platforms and share a common technology—React.*

## EXpo

*Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.*


*If you are already experienced with React and JavaScript tooling and want to dive right in and figure things out as you go, this is the quickest way to get started:*

`npm install --global expo-cli`

`expo init my-project`