## Things I want to know more about

### Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?

*When an instance of a component is being created and inserted into the DOM it occurs during the mounting phase. Constructor, static getDerivedStateFromProps, render, componentDidMount, and UNSAFE_componentWillMount all occur in this order during mounting.*



### What is the very first thing to happen in the lifecycle of React?

*The constructor for a React component is called before it is mounted.If the component is a subclass you should call super(props), or the props will be undefined. constructors can be used to assign state using this.state or to bind event handle methods to an instance*

### Put the following things in the order that they happen: `componentDidMount`, `render`, `constructor`, `componentWillUnmount`, `React Updates`?


- `constructor`
- `render`
- `componentDidMount`
- `React Updates`
- `componentWillUnmount`

### What does componentDidMount do?

*This method is invoked immediately after a component is mounted. If you need to load anything using a network request or initialize the DOM, it should go here. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().*

*setState() can be called here, but it should be used sparingly, because it will cause a rerender, which can lead to perfomance issues.*

### What types of things can you pass in the props?

*Props (aka "properties") in React allows us to pass values from a parent component down to a child component. The values can be any data type, from strings to functions, objects, etc*

### What is the big difference between props and state?

*In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.*

### When do we re-render our application?

*
React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically.*

### What are some examples of things that we could store in state?

*You don't want to store JSX in the state. Instead, store the model data for it, and loop through your data to print your elements! And inside your render method, you can use these data about the tabs you have stored in your state to render your custom component*