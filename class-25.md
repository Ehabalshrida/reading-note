## Things I want to know more about

### What is a ‘call’?

* function invocation*

### How many ‘calls’ can happen at once?

*one call*

### What does LIFO mean?

*it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns*


### Draw an example of a call stack and the functions that would need to be invoked to generate that call stack?

`function firstFunction(){
  throw new Error('Stack Trace Error');
}`

`function secondFunction(){
  firstFunction();
}`

`function thirdFunction(){
  secondFunction();
}`

`thirdFunction();*`

### What causes a Stack Overflow?

*A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.*


### What is a ‘refrence error’?

*This is also a common thing when using const and let, they are hoisted like var and function but there is a time between the hoisting and being declared so when you try to access them a reference error occurs, the fact that this happens to let and const is called Temporal Dead Zone (TDZ).*


### What is a ‘syntax error’?

*this occurs when you have something that cannot be parsed in terms of syntax, like when you try to parse an invalid object using JSON.parse.*


### What is a ‘range error’?

*Try to manipulate an object with some kind of length and give it an invalid length and this kind of errors will show up*

### What is a ‘type error’?

*this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible, like accessing a property in an undefined type of variable.*


### What does the word ‘debugger’ do in your code?

*The breakpoint can also be achieved by putting a debugger statement in your code in the line you want to break.*

