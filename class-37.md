# Readings:Authentication


## Singleton
*A singleton is a class that allows only a single instance of itself to be created and gives access to that created instance. It contains static variables that can accommodate unique and private instances of itself. It is used in scenarios when a user wants to restrict instantiation of a class to only one object. This is helpful usually when a single object is required to coordinate actions across a system.*


*The singleton pattern is used in programming languages such as Java and .NET to define a global variable. A single object used across systems remains constant and needs to be defined only once rather than many times.*


## Router Middleware

*Router is one of those middleware, what it does actualy is to take the original request, and forward it to a sub handler according to the path example : "/home" for a GET request is mapped to function getHome that handle it and eventually send a response to the client on the behalf of the original handler.*



## Dynamic Module Loading
*
Dynamic code loading allows an app to pull content from beyond its codebase and execute it during operation, or runtime. This option can result in a smaller app size because a common practice is to store the code remotely instead of embedding it in the Android package kit (APK)*

## CRUD -> REST Method Matches


*The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.*


## Mock Testing

*Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. When your implementation interacts with an object's properties, rather than its function or behavior, a mock can be used*


*
Mocking is a process used in unit testing when the unit being tested has external dependencies. The purpose of mocking is to isolate and focus on the code being tested and not on the behavior or state of external dependencies*

*n object-oriented programming, mock objects are simulated objects that mimic the behavior of real objects in controlled ways, most often as part of a software testing initiative. ... The technique is also applicable in generic programming*

*
Mocking is done when you invoke methods of a class that has external communication like database calls or rest calls. Through mocking you can explicitly define the return value of methods without actually executing the steps of the method*

## Securing PasswardS

*Passwords are the first line of defense against cyber criminals. It is the most vital secret of every activity we do over the internet and also a final check to get into any of your user account, whether it is your bank account, email account, shopping cart account or any other account you have.*


*Cryptographic hash algorithms MD5, SHA1, SHA256, SHA512, SHA-3 are general purpose hash functions, designed to calculate a digest of huge amounts of data in as short a time as possible. Hashing is the greatest way for protecting passwords and considered to be pretty safe for ensuring the integrity of data or password.
*

**PROBLEMS WITH CRYPTOGRAPHIC HASH ALGORITHM
**
- **Brute Force attack:** Hashes can't be reversed, so instead of reversing the hash of the password, an attacker can simply keep trying different inputs until he does not find the right now that generates the same hash value, called brute force attack.

- **Hash Collision attack:** Hash functions have infinite input length and a predefined output length, so there is inevitably going to be the possibility of two different inputs that produce the same output hash. MD5, SHA1, SHA2 are vulnerable to Hash Collision Attack i.e. two input strings of a hash function that produce the same hash result.

- **BCrypt, IT's SLOW AND STRONG AS HELL**
To overcome such issues, we need algorithms which can make the brute force attacks slower and minimize the impact. Such algorithms are PBKDF2 and BCrypt, both of these algorithms use a technique called Key Stretching.


## basic AUTH 

*In the context of an HTTP transaction, basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request.*


*HTTP Basic authentication (BA) implementation is the simplest technique for enforcing access controls to web resources because it does not require cookies, session identifiers, or login pages; rather, HTTP Basic authentication uses standard fields in the HTTP header.*

**Security**

*The BA mechanism does not provide confidentiality protection for the transmitted credentials. They are merely encoded with Base64 in transit and not encrypted or hashed in any way. Therefore, basic authentication is typically used in conjunction with HTTPS to provide confidentiality.*

*Because the BA field has to be sent in the header of each HTTP request, the web browser needs to cache credentials for a reasonable period of time to avoid constantly prompting the user for their username and password. Caching policy differs between browsers.*


**Protocol**
- Server side :
*When the server wants the user agent to authenticate itself towards the server after receiving an unauthenticated request, it must send a response with a HTTP 401 Unauthorized status line[5] and a WWW-Authenticate header field*


- Client Side:

*When the user agent wants to send authentication credentials to the server, it may use the Authorization header field.*

*The Authorization header field is constructed as follows:*

- The username and password are combined with a single colon (:).

*This means that the username itself cannot contain a colon.*

- The resulting string is encoded into an octet sequence.

*The character set to use for this encoding is by default unspecified, as long as it is compatible with US-ASCII, but the server may suggest use of UTF-8 by sending the charset parameter.*

- The resulting string is encoded using a variant of Base64 (+/ and with padding).

- The authorization method and a space (e.g. "Basic ") is then prepended to the encoded string.*

## Authentication Cheat sheet OWASP

**Authentication** is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.

**Session Management** is a process by which a server maintains the state of an entity interacting with it. This is required for a server to remember how to react to subsequent requests throughout a transaction. Sessions are maintained on the server by a session identifier which can be passed back and forward between the client and server when transmitting and receiving requests. Sessions should be unique per user and computationally very difficult to predict. The Session Management Cheat Sheet contains further guidance on the best practices in this area.

**Authentication General Guidelines**

**User IDs**
Make sure your usernames/user IDs are case-insensitive. User 'smith' and user 'Smith' should be the same user. Usernames should also be unique. For high-security applications, usernames could be assigned and secret instead of user-defined public data.


**Authentication Solution and Sensitive Accounts**

- Do NOT allow login with sensitive accounts (i.e. accounts that can be used internally within the solution such as to a back-end / middle-ware / DB) to any front-end user-interface

- Do NOT use the same authentication solution (e.g. IDP / AD) used internally for unsecured access (e.g. public access / DMZ)


## node.bcrypt.js

*A library to help you hash passwords.*

**If You Are Submitting Bugs or Issues**

*Verify that the node version you are using is a stable version; it has an even major release number. Unstable versions are currently not supported and issues created while using an unstable version will be closed.*

*If you are on a stable version of node, please provide a sufficient code snippet or log files for installation issues. The code snippet does not require you to include confidential information. However, it must provide enough information such that the problem can be replicable. Issues which are closed without resolution often lack required information for replication.*

**Security Issues And Concerns
**

*As should be the case with any security tool, this library should be scrutinized by anyone using it. If you find or suspect an issue with the code, please bring it to my attention and I'll spend some time trying to make sure that this tool is as secure as possible.*

*To make it easier for people using this tool to analyze what has been surveyed, here is a list of BCrypt related security issues/concerns as they've come up.*

**Compatibility Note
**

*This library supports $2a$ and $2b$ prefix bcrypt hashes. $2x$ and $2y$ hashes are specific to bcrypt implementation developed for John the Ripper. In theory, they should be compatible with $2b$ prefix.*

*Compatibility with hashes generated by other languages is not 100% guaranteed due to difference in character encodings. However, it should not be an issue for most cases.*


**Migrating from v1.0.x**

*Hashes generated in earlier version of bcrypt remain 100% supported in v2.x.x and later versions. In most cases, the migration should be a bump in the package.json.*

*Hashes generated in v2.x.x using the defaults parameters will not work in earlier versions.*

**Dependencies
**

- NodeJS
- node-gyp
- Please check the dependencies for this tool at: https://github.com/nodejs/node-gyp
- Windows users will need the options for c# and c++ installed with their visual studio instance.
- Python 2.x
- OpenSSL - This is only required to build the bcrypt project if you are using versions <= 0.7.7. Otherwise, we're using the builtin node crypto bindings for seed data (which use the same OpenSSL code paths we were, but don't have the external dependency).