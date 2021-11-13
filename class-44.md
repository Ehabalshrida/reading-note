# Readings: Message Queues


## What does it mean that web sockets are bidirectional? Why is this useful?

*
BIDIRECTIONAL. Whereas HTTP relies on a client request to receive a response from the server for every exchange, WebSockets allow for full-duplex bidirectional communication. This enables the server to send real-time updates asynchronously, without requiring the client to submit a request each time*

## Does socket.io use HTTP? Why?

*Websocket is created when you make upgrade from http to websocket, so it kind of does need http. socket.io isn't a pure Websocket server/implementation, it depends on HTTP for its initial connection setup*


## What happens when a client emits an event?

*
Have to emit the events based on the client request. For example: If user enter the url as http://localhost:8080/pages socket.io should emit the topic pages to client and another user request for http://localhost:8080/locations socket should emit location to that particular user*

## What happens when a server emits an event?


*
sockets. emit('event', data); Socket.io can also broadcast messages to group of sockets, this feature is called rooms. If you want to send a message to only one socket, you can mark the sockets with an extra property when they connect and then search those sockets in the list of connected sockets*

## What happens if a client “misses” an event?

*the messages will be ignored*

**A socket** is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to. … Every TCP connection can be uniquely identified by its two endpoints.

**WebSocket** is a protocol that allows for a persistent TCP connection between server and client so they can exchange data at any time.

**client**is a computer or a program that, as part of its operation, relies on sending a request to another program or a computer hardware or software that accesses a service made available by a server

**Socket.IO** is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.

**The OSI Model** (Open Systems Interconnection Model) is a conceptual framework used to describe the functions of a networking system. The OSI model characterizes computing functions into a universal set of rules and requirements in order to support interoperability between different products and software.

**TCP Model** It stands for Transmission Control Protocol/Internet Protocol. The TCP/IP model is a concise version of the OSI model. It contains four layers, unlike seven layers in the OSI model.

**The Transmission Control Protocol (TCP)** is a transport protocol that is used on top of IP to ensure reliable transmission of packets. TCP includes mechanisms to solve many of the problems that arise from packet-based messaging, such as lost packets, out of order packets, duplicate packets, and corrupted packets.

**UDP (User Datagram Protocol)** is a communications protocol that is primarily used for establishing low-latency and loss-tolerating connections between applications on the internet. It speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party.



## Message Queue
### What is Message Queue?
*A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures.*

*Messages are stored on the queue until they are processed and deleted.*

*Each message is processed only once, by a single consumer.*

*Message queues can be used to decouple heavyweight processing, to buffer or batch work, and to smooth spiky workloads.*

## Rooms and Namespaces
### What is Room?
*A room is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of clients*

So :

- the rooms are a server-only concept (i.e. the client does not have access to the list of rooms it has joined).

- We can call join to subscribe the socket to a given channel.

- use to or in (they are the same) when broadcasting or emitting.

- You can emit to several rooms at the same time.

### What are Namespaces?
*Socket.IO allows you to Namespace your sockets, which essentially means assigning different endpoints or paths.*

*This is a useful feature to minimize the number of resources (TCP connections) and at the same time separate concerns within your application by introducing separation between communication channels.*

*Multiple namespaces actually share the same WebSockets connection thus saving us socket ports on the server.*

*Namespaces are created on the server side. But they are joined by clients by sending a request to the server.*