## Things I want to know more about

### In your own words, describe what each group of status code represents:
- 100’s =received and under processing 
- 200’s = positive responce .
- 300’s = accepted the request but it need furthur action
- 400’s = problem from client side 
- 500’s = problem from server side 

### What is a status code 202?
 *this doesn’t mean the request was successfully processed only that it met all validation requirements at the time of sending*


### What is a status code 308?

*308 Permanent Redirect - This tells the client to use another URL to access the resource and not use the current URL anymore. It’s helpful when we have multiple endpoints for one resource, but don’t want to implement reading from all of them.*


### What code would you use if an update didn’t return data to a client?

*204 No Content*

### What code would you use if a resource used to exist but no longer does?
*308 Permanent Redirect*

### What is the ‘Forbidden’ status code?

*403 Forbidden - The client has authorized or doesn’t need to authorize itself, but still has no permissions to access the resource.*

### Why do we need to pull our MongoDB database string out of our server and put it into our .env?

*Connect to it from backend side by using mongoose*

### What is middleware?

*
Middleware is software which lies between an operating system and the applications running on it. Common middleware examples include database middleware, application server middleware, message-oriented middleware, web middleware and transaction-processing monitors.*

### What does app.use(express.json()) do

*
express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app*

### What is the difference beween PUT and PATCH?

*PUT is a method of modifying resource where the client sends data that updates the entire resource . PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.*

### How do you make a defalut value in a schema?

*schemas can define default values for certain paths. If you create a new document without that path set, the default will kick in.*

### What does a 500 error status code mean?
* error from server side*

### What is the difference between a status 200 and a status 201?

*
The 200 status code is by far the most common returned. It means, simply, that the request was received and understood and is being processed. A 201 status code indicates that a request was successful and as a result, a resource has been created (for example a new page).*