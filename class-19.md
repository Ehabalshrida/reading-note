## Things I want to know more about

### What is a ‘Controlled Component’?

*In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.*

^We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a `“controlled component”`*


### Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

*we set up a kind of circular data flow: state to input value, on change event to state, and back again. This loop allows us a lot of control over the input, as we can react to changes to the value on the fly. Because of this, controlled inputs don’t suffer from the limitations of uncontrolled ones, opening up the follow possibilities:*


- **instant input validation:** we can give the user instant feedback without having to wait for them to submit the form (e.g. if their password is not complex enough)
- **instant input formatting:** we can add proper separators to currency inputs, or grouping to phone numbers on the fly
- **conditionally disable form submission:** we can enable the submit button after certain criteria are met (e.g. the user consented to the terms and conditions)
- **dynamically generate new inputs:** we can add additional inputs to a form based on the user’s previous input (e.g. adding details of additional people on a hotel booking)

### How do we target what the user is entering if we have an event handler on an input field?

*
To listen to events in React, add the onClick attribute, which is the event handler, to the target element. This specifies the function to be executed when that element is clicked.*


### Why would we use a ternary operator?

*
A ternary operator allows you to assign one value to the variable if the condition is true, and another value if the condition is false. ... A ternary operator makes the assignment of a value to a variable easier to see, because it's contained on a single line instead of an if else block*

### Rewrite the following statement using a ternary statement:
  if(x===y){

 console.log(true);

  } else {

 console.log(false);
  }


  `X===y ?  console.log(true): console.log(false);`