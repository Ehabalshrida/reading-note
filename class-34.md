# Readings: Express REST API


## Name 3 real world use cases where you’d want to change the request with custom middleware
- Auth middleware

*every route must be authenticated if the user is not authenticated then he is not able to call the above mentioned routes,so every GET,POST calls required authentication.In this case we build a authtication middleware.*

- Error Handing Middleware

 *Express JS comes with default error handling params, define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three:*

- Third-party Middlewares

 *In some cases we will be adding some extra features to our backend
Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.*



## True or false: The route handler is middleware?
- true 


## In what ways can a middleware function end the process and send data to the browser?


- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.


## At what point in the request lifecycle can you “inject” middleware?
*The generated server allows for 3 extension points to inject middleware in its middleware chain. These have to do with the lifecycle of a request.*



## What can cause express to error with “Request headers sent twice, cannot start a second response”

*when dont call next()*


## Middleware

*Middleware is software which lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications. It is sometimes called plumbing, as it connects two applications together so data and databases can be easily passed between the “pipe.” Using middleware allows users to perform such requests as submitting forms on a web browser or allowing the web server to return dynamic web pages based on a user’s profile.*


## Request Object

*The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.*



## Response Object

*
The response object is an instance of a javax. servlet. http. HttpServletResponse object. Just as the server creates the request object, it also creates an object to represent the response to the client*



## Application Middleware


*ommon middleware examples include database middleware, application server middleware, message-oriented middleware, web middleware and transaction-processing monitors. ... This can include security authentication, transaction management, message queues, applications servers, web servers and directories*




## Routing Middleware


*
Routing defines the way in which the client requests are handled by the application endpoints. And when you make some routers in separate file, you can use them by using middleware*


## Test Driven Development

*is software development approach in which test cases are developed to specify and validate what the code will do. In simple terms, test cases for each functionality are created and tested first and if the test fails then the new code is written in order to pass the test and making code simple and bug-free.*