# Readings: Socket.io

## What is the benefit of transforming data into packets?

*
Packets are the basic units of communication over a TCP/IP network. Devices on a TCP/IP network divide data into small pieces, allowing the network to accommodate various bandwidths, to allow for multiple routes to a destination, and to retransmit the pieces of data which are interrupted or lost*

## UDP is often refereed to as a connectionless protocol. Why is this?

*No connection needs to be established between the source and destination before you transmit data. UDP does not have a mechanism to make sure that the payload is not corrupted. As a result, the application must take care of data integrity all by itself*

## Can a socket server application have multiple socket connections?

*
A socket that has been established as a server can accept connection requests from multiple clients*

## Can a socket connection application be connected to multiple socket servers?

*
Yes - you need one socket for each connection. A socket is a client IP address + client port + server IP address + server port combination. If a client is talking to multiple servers, it is using multiple ports on the client machine*


## Can an application be both a socket server and a socket connection?

*
If you want to have a "peer-to-peer" type system, then you just have each client run both a client and a server socket - the server socket for accepting connections from other clients and the client socket for establishing connections to others*

## Can an application be both a socket server and a socket connection?

*
If you want to have a "peer-to-peer" type system, then you just have each client run both a client and a server socket - the server socket for accepting connections from other clients and the client socket for establishing connections to others*



**
‪Observer Pattern**‬‏

*The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods*

**Listener**

*
Often an event listener is registered with the object that generates the event. When the event occurs, the object iterates through all listeners registered with it informing them of the event.*


**event HJandler**

*event handler has the name of the event, preceded by "on." For example, the event handler for the Focus event is onFocus. Many objects also have methods that emulate events. For example, button has a click method that emulates the button being clicked*


**Event Driven Programming
**

*
When you perform an action on a graphical component you generate an event. In event-driven programming the program responds to events. The program responds to events that the user generates in interacting with GUI components. The order of events is controlled by the user*


**Event Loop
**

*the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. ... The event loop is also sometimes referred to as the message dispatcher, message loop, message pump, or run loop*


**Event Queue**

An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. Event queues are often used in the context of an enterprise messaging system*

**Call Stack**

*
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc*


**Subscribe
**

*to sign one's name to a document. 2a : to give consent or approval to something written by signing unwilling to subscribe to the agreement. b : to set one's name to a paper in token of promise to give something (such as a sum of money) also : to give something in accordance with such a promise*


**database
**

*is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). ... The data can then be easily accessed, managed, modified, updated, controlled, and organized*



## WebSocket

*is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web IDL is being standardized by the W3C.*


*is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web IDL is being standardized by the W3C.*

## Socket.IO Tutorial

*Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed. Socket.IO is built on top of the WebSockets API (Client side) and Node.js. It is one of the most depended upon library on npm (Node Package Manager).
*

*This tutorial has been created for anyone who has a basic knowledge of HTML, Javascript and Node.js work. After completing this tutorial, the reader will be able to build moderately complex real-time websites, back-ends for mobile applications and push notification systems*


## WebSocket vs Socket.io


*
Socket.IO is NOT a WebSocket implementation. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a WebSocket server either*

*
The main advantages of Socket.IO over WebSockets are: Unlike WebSocket, Socket.IO allows you to broadcast a message to all the connected clients. ... Socket.IO supports these technologies out of the box. As said before, Socket.IO is able to fallback to technologies other than WebSockets when the client doesn't support it*