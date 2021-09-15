## Things I want to know more about

### What is functional programming?

*Functional programming means using functions to the best effect for creating clean and maintainable software. This article illustrates the concepts behind the functional paradigm with practical examples in JavaScript and Java.*


### What is a pure function and how do we know if something is a pure function?

- It returns the same result if given the same arguments (it is also referred as deterministic)
- It does not cause any observable side effects


### What are the benefits of a pure function?

*The code’s definitely easier to test. We don’t need to mock anything. So we can unit test pure functions with different contexts*

- Given a parameter A → expect the function to return value B
- Given a parameter C → expect the function to return value D


### What is immutability?

*When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.*

### What is Referential transparency?

*s generally defined as the fact that an expression, in a program, may be replaced by its value (or anything having the same value) without changing the result of the program. This implies that methods should always return the same value for a given argument, without having any other effect. This functional programming concept also applies to imperative programming, though, and can help you make your code clearer.*


### What is a module?


*JavaScript files which can be reused throughout the Node. ... Each module in Node. js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate*


### What does the word ‘require’ do?

*can add built-in core Node. js modules, community-based modules (node_modules), and local modules too*

### How do we bring another module into the file the we are working in?

*To include functions defined in another file in Node. js, we need to import the module. we will use the require keyword at the top of the file. The result of require is then stored in a variable which is used to invoke the functions using the dot notation*