# Readings: Express


## What’s the difference between PUT and PATCH?

*the main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.*


## Provide links to 3 services or tools that allow you to “mock” an API for development like json-server

 *Today, we’re going to look at 10 tools for mocking HTTP requests. These tools each offer something a little different from the others and present a variety of interesting build options and implementations.*

1 – Nock

*Nock is an HTTPS library designed to replicate and mock servers and expectations in Node.js. Functionally, Nock does this by overriding both the http.request and http.ClientRequest functions, intercepting requests and responding with a specific mocked response through the use of Interceptors.*


2 – MockServer

*MockServer (and its counterpart service MockServer Proxy) is a multifaceted tool that comes in a variety of builds. It’s available as a Netty web server, a Docker container, a Maven plugin, an npm plugin, and a Grunt plugin. There’s a ton of great options that can be leveraged for a variety of environments. This already makes it a pretty compelling tool given that you can plug it into just about anything you’re running, but its wide range of functionality is the core compelling argument.*

3 – Beeceptor

*Beeceptor is a great tool largely because it requires absolutely no code in order to utilize it. Beeceptor is a free online tool for mocking a REST API interaction using any HTTP request. You can customize your responses to simulate pretty much any response or failure situation. Beeceptor also offers some great functionality to simulate latency on downstream APIs – you can both simulate transmit latency and timeouts, which is a great use case for many APIs and often missed during testing.*

4 – Mockoon

*Mockoon departs from the other solutions on this list in that it’s neither a web solution nor a code solution. Mockoon is a downloadable program that mocks an unlimited number of environments and routes – Mockoon makes a point to note that these can be run in parallel, and its strong import/export system ensures that enterprise, multi-path, multi-environment situations can be adequately supported.*

 
5 – Mocky.io

*Mocky is an incredibly simple and super lightweight testing implementation. Mocky is entirely a web app, meaning that everything is generated and managed remotely. This does mean that Mocky grants you significantly less control compared to solutions that focus more on local systems, but this also means the application is simpler and cleaner.*

6 – Mockable.io

*Mockable was designed from the ground up to be simple and easy to use, and it shows – everything Mockable does and presents is slick and intuitive. Because of this ethos to design, it’s incredibly fast to get from nothing to a mock server.*

7 – Stoplight

*Stoplight is all about the quick creation of mock servers and visualization of the APIs that interact with them. Through a variety of tools, Stoplight offers excellent virtualization, automatic validation against OpenAPI documentation, and high support for configurable and dynamic content generation.*

8 – Postman Mock Server

*Mock Servers in Postman are tied directly to the Postman app, and for that reason, are a suggestion for a very particular use case. Postman is a great testing solution, and their mocking system is equally great, but the fact that it’s tied to both a Postman account and a defined collection means that using only the Mocking system means that you are buying into an incomplete testing experience. You can create a mock server without an existing collection, but in this case it’s kind of like buying an entire sewing kit for a single needle*

 9 – Wiremock

 *Wiremock bills itself as a “simulator for HTTP-based APIs” – in essence, it’s a virtualization tool for mocking, but the product seems aligned towards the idea of holistic simulation. Mocklab takes this a step further, offering mocking through a web UI. The main selling point for Wiremock is the flexible deployment – it boasts deployment through a variety of implementations, and “drop-in replacement […] with a single line of code”, making it quite flexible to a number of solutions.*

*Perhaps the two strongest value propositions for Wiremock is its request matching and traffic capture. Matching can be done across URLs, methods, headers, cookies, and bodies using JSON and XML, as well as a variety of other options. This, paired with the relatively robust record and playback functions that allow traffic capture and analysis means that mock testing can be done pretty robustly.*

10 – Mockserver

   *Mockserver is a library that utilizes mock files in order to serve realistic mock responses. It does this by creating local mock files that serve content as if they were part of a real API localized on port 9001. Because of the relatively clean and quick implementation, Mockserver boasts that API mocking can be created in “a matter of seconds” – more to the point, because such a system is super lightweight, it also means that it’s highly adaptable across a wide range of options.*

*For this reason, Mockserver is a great option if quick testing is needed with relative immediacy. Mockserver is verbose, supports custom headers, has a built-in response delay simulation scheme, and offers a wide range of additional options to mimic standard testing environments.*



## Compare and contrast Swagger and APIDoc.js 1 Which HTTP status codes should be sent with each type of (un)successful API call?

*Swagger allows you define the range of responses as 1XX, 2XX, ...5XX. If you provide the explicit code (i.e. 404) that will take precedence over the blanket request (in this case 4XX). Each response status requires a description. API specs do not necessarily need to cover all possible codes, but known error codes like 404 must be addressed.*

*APIDOC.js you can also define the errors in groups, if you do not provide the specific code the default error Error 4xx is thrown. You can set the title and description of the errror with @apiDefine*




## Compare and contrast SOAP and ReST

**SOAP** (Simple Object Access Protocol) SOAP uses XML data in request/response messages, relying on XML Schema and other technology to enforce/parse structure of messages. It is platform indepedent (i.e. clients can use from disparate OS). SOAP is extensible, neutral, and independent of specific programming models.

**REST **(Representational State Transfer) Standard software architecture for web services. This is a webservice that provides it's web services in a text form allowing them to be read and modified with a stateless protocol and predefined operations. Common, stateless protocols allow for operability amongs disparate OS.

REST has become the more popular communication protocol. REST accesses data whereas SOAP performs operations by a standardized set of messaging patterns. Each are scalable and either can be used to achieve most outcomes. Benefits to REST include: not restricted to XML formatting, JSON is faster and provides a uniform base for transferring data to browser clietns, used by major services like Google, generally faster. Since either can be used to acheive the same results, the preference is up to the developer with the ultimate end goal in mind. SOAP can be preferable due to more robust security guarantees, built in logic to handle failed communications, and a set of standardized processes that make it easier to implement across firewalls/proxies without needing to modify the protocols themselves.


## Web Server
*System of one or more computers that accepts incoming HTTP requests and sends corresponding HTTP responses; primary function is to deliver web contents/resources to the client (requestor). "Web Server" can refer to the hardware (computer storing web resources and software) or the software itself(that controls how users interact with hosted files, minimum functionality HTTP)*


## Express

 *Express is a Node framework that simplifies HTTP verbs and allows for concise creation of HTTP verb handlers, simple integration with different view engines (i.e. porting information into front end templates), creates common settings such as port to use for connecting, and allows for additional request processing (middleware) to be inserted into request handling. It is unopinionated, meaning that you can structure it in various ways and use many different middleware options in myriad configurations.*


 ## Routing

  *Routing is how the client request is connected to the code they will receive*

## Web Request Response Cycle (WRRC)

*This is how information flows through a web app: client opens brower/enters url, request gets sent to the server which takes the url request, server follows it's routing to serve back the requested web document and passes it to the view, the view renders the information in the desired format back to the client in their browser*

## Node 

*Open source runtime environment allowing for developers to create server side applications in JavaScript*
