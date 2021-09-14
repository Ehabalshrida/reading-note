## Things I want to know more about

### What is REST?

*Representational State Transfer*

### REST APIs are designed around a ?

resources

### What are the most common HTTP verbs?

*
The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently*


### What should the URIs be based on?

-  Define one URI, and all operations are POST requests to this URI.
- Create separate URIs for individual resources.
- Use HTTP methods to define operations on resources.
- Use hypermedia (HATEOAS, described below).


### Give an example of a good URI?

* any URL based on that mensioned before is a good URL*


### What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

*
Chatty API is one that requires consumer to make tremendous (subjective matter) amount of distinct API calls to get needed information about a resource. George Reese has defined chatty API as any API that requires consumer to do more than a single call to perform a single, common operation*


### What status code does a successful GET request return?

*A successful GET method typically returns HTTP status code 200 (OK).*


### What status code does an unsuccessful GET request return?


*the resource cannot be found, the method should return 404 (Not Found).*


### What status code does a successful POST request return?

*If a POST method creates a new resource, it returns HTTP status code 201 (Created).*


### What status code does a successful DELETE request return?


*If the delete operation is successful, the web server should respond with HTTP status code 204 (No Content), indicating that the process has been successfully handled, but that the response body contains no further information. If the resource doesn't exist, the web server can return HTTP 404 (Not Found).*