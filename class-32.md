# Readings: Node Ecosystem, TDD, CI/CD


## array.map()

*Array.Map() is used to create a new array by calling a function on each element of the passed array*

*`var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // returned element for new_array
}[, thisArg])`


## array.reduce()

*It turns out this function’s versatility and power come from its lack of specialization. Like Array.map, Array.reduce iterates over the array and invokes the callback on each element. The difference is that instead of returning an array of equal size containing whatever was returned by the callback in each element, it returns whatever the final invocation of the callback returns. This is useful because, in addition to the current element and the index, the callback takes in the value that was returned by the previous invocation of the callback. MDN describes this as the “accumulator” because in most cases you will be modifying this value in some meaningful way and returning it for the next iteration to use. The reduce function takes as a second argument an initial value to use for the first iteration. I realize that description is not any clearer than the specification, and if you are like me a simple example will make this much easier to fully understand.*


## Provide code snippets showing how to use superagent() to fetch data from a URL and log the result

*Promises are one way to manage Asynchronous actions. Like a callback, a promise allows you to execute some code and “move on”, allowing for that code to take as long as it needs to run. Unlike a callback, the syntax of a promise feels and reads a bit more “inline”*

- With normal Promise .then() syntax

`function goAndGetSomeData() {
  return new Promise( (resolve,reject) => {
    if( true ) {
      resolve("It totall worked!");
    }
    else {
      reject("Failure is always an option...");
    }
  })
}`

`goAndGetSomeData(params)
  .then( someData => {`
    
` })
  .catch( error => {`
    
  `});
console.log('After');`

- Again with async / await syntax

`function goAndGetSomeData() {
  return new Promise( (resolve,reject) => {
    if( true ) {
      resolve("It totall worked!");
    }
    else {
      reject("Failure is always an option...");
    }
  })
}`


`async function getData() {
  let someData = await goAndGetSomeData()
}`

`getData();`



## Javascript Promise Pattern (promises)


*Promises are one way to manage Asynchronous actions. Like a callback, a promise allows you to execute some code and “move on”, allowing for that code to take as long as it needs to run. Unlike a callback, the syntax of a promise feels and reads a bit more “inline”*

*A promise says, “Hey, Javascript, you go ahead and do some work. I don’t care how long it takes and I’m going to go ahead and keep working … but let me know when you’re done .then() give me the data and let me deal with it myself”*