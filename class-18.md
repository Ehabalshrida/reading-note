## Things I want to know more about

### What does .`map()` return?


*map() function returns a map object(which is an iterator) of the results after applying the given function to each item of a given iterable (list, tuple etc.) ... fun : It is a function to which map passes each element of given iterable. iter : It is a iterable which is to be mapped*


### If I want to loop through an array and display each value in JSX, how do I do that in React?

*you can build collections of elements and include them in JSX using curly braces `{}`.*

### Each list item needs a unique .... ?

*unique identifies a list item among its siblings.*


### What is the purpose of a key ?

*Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:*

### What is the spread operator?

*The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments*


### List 4 things that the spread operator can do ?

- Copying an array
- Concatenating or combining arrays
- Using Math functions
- Using an array as arguments
- Adding an item to a list
- Adding to state in React
- Combining objects
- Converting NodeList to an array

### Give an example of using the spread operator to combine two arrays?

`const` objectOne = `{hello: "🤪"}`

`const` objectTwo = `{world: "🐻"}`

`const` objectThree = `{...objectOne, ...objectTwo, laugh: "😂"}`

`console.log`(objectThree) // Object `{ hello: "🤪", world: "🐻", laugh: "😂" }`

`const` objectFour = `{...objectOne, ...objectTwo, laugh: () => 
{console.log("😂".repeat(5))}}`

objectFour.laugh() // 😂😂😂😂😂


### Give an example of using the spread operator to add a new item to an array؟

`const` fewFruit = `['🍏','🍊','🍌']`

`const` fewMoreFruit = `['🍉', '🍍', ...fewFruit]`

`console.log(fewMoreFruit)`  //  Array(5) `[ "🍉", "🍍", "🍏", "🍊", "🍌" ]`


### Give an example of using the spread operator to combine two objects into one?


`const` objectOne = `{hello: "🤪"}`

`const` objectTwo = `{world: "🐻"}`

`const` objectThree = `{...objectOne, ...objectTwo, laugh: "😂"}`

`console.log`(objectThree) // Object `{ hello: "🤪", world: "🐻", laugh: "😂" }`

`const` objectFour = `{...objectOne, ...objectTwo, laugh: () => 
{console.log("😂".repeat(5))}}`

objectFour.laugh() // 😂😂😂😂😂

### what is the first step that the developer does to pass functions between components?

*Props are one way to pass read-only data between components, and the actions are identical to the actual communication between the components.*

*You can pass the event handler to the component as a prop just as you would pass data such as string, number, array, objects, JSON, and so on.*

*But to pass data from a child component to a parent using an event handler, pass the data as a parameter.*



### In your own words, what does the increment function do?


*The Increment( ) function determines the next node at the same level. You can also increase the level of a node by one at a specified level*

### How can you pass a method from a parent component into a child component?

*to pass data or events from child component to parent component in different ways.*

- First Method — Functional child component to Parent functional component


- Second Method — Class child component to Parent class component