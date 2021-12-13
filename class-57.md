# Context API - Behaviors

## When you have multiple contexts, what component type should you use (class/function) and why?

Class components, the render method will be called, whenever the state of the components changes. On the other hand, the Functional components render the UI based on the props. Class Components should be preferred whenever we have the requirement with the state of the component.

## What are some good use cases for using the Context API for global state?

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

## How can you best test context?

The best way to test Context is to make our tests unaware of its existence and avoiding mocks. We want to test our components in the same way that developers would use them (behavioral testing) and mimic the way they would run in our applications (integration testing).

## Terms

      
- **context** it provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Context is designed to share data that can be considered global for a tree of React components.

- **useContext()** useContext hook allows passing data to children elements without using redux. useContext hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”

- **static context**  A static method or, block belongs to the class and these will be loaded into the memory along with the class. You can invoke static methods without creating an object.|
