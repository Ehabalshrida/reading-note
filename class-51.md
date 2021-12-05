# Readings: Component Based UI

## Name 5 Javascript UI Frameworks (other than React) 


- Reactjs
- angular 
- Vuejs
- jQuery
- Aurelia


## What’s the difference between a framework and a library?

*
A library is a collection of precompiled routines that a program can use. ... Meanwhile, a framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software*


### Rendering 

*
Rendering is a process used in web development that turns website code into the interactive pages users see when they visit a website. The term generally refers to the use of HTML, CSS, and JavaScript codes. The process is completed by a rendering engine, the software used by a web browser to render a web page*


### template

*
A template is a chunk of HTML that you need to inject onto the page. Often templates are created “server side” – in that they come to the JavaScript fully formed and just need to be put into the DOM*


### State 

*‏
State is a plain JavaScript object used by React to represent an information about the component's current situation. ... The difference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React*

## Introducing JSX

*`const element = <h1>Hello, world!</h1>;`
This funny tag syntax is neither a string nor HTML.*

*It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.*

### Why JSX?
*React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.*

*Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.*

*React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.*

### JSX is an Expression Too


*After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.*

*This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:*


### Rendering Elements

*Elements are the smallest building blocks of React apps.*

#### Rendering an Element into the DOM

*let’s say there is a `<div>` somewhere in your HTML file:*

`<div id="root"></div>`

*We call this a “root” DOM node because everything inside it will be managed by React DOM.*

*Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.*

*To render a React element into a root DOM node, pass both to ReactDOM.render():*


#### Updating the Rendered Element

*React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time*.

*With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().*


