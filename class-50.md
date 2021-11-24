# Readings:  AWS: Events


## Describe the similarities between AWS API Gateway + Lambda functions and an ExpressJS Server

*An API Gateway is “middleware” that makes available backend services to mobile, web and other external clients via a set of protocols and commonly through a set of RESTful application programming interfaces (APIs). An API Gateway makes it much simpler to develop, secure, manage, and scale endpoints by moving most of the required logic from the client, into the gateway.*


*Express Gateway is an API Gateway that can sit at the heart of any microservices architecture, regardless of what language or platform you’re using. Express Gateway secures your microservices and exposes them through APIs using Node.js, ExpressJS and Express middleware.*

*Amazon’s API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. With a few clicks you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, or any Web application. Amazon API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.*


## List the AWS Database offerings and talk about the pros and cons of each



- Relational Database. Relational databases store data with predefined schemas and relationships between them. ...
- Amazon Aurora. ...
- Amazon Relational Database Service (RDS) ...
- Amazon Redshift. ...
- Key-value Database. ...
- Amazon DynamoDB. ...
- In-memory Database. ...
- Amazon MemoryDB for Redi




*AWS RDS is a relational database service. You would use it in the same situations where you would use a MySql, Postgres or MS SQL Server — where you need to work with relational data.*

*DynamoDB is a NoSql database service. You would use it in the same situations as you would use products like MongoDB and other NoSql systems — processing documents, atomic records, jagged-edge structures, etc.*

*Those are the differences. Pros and cons comparison is not really applicable here, because these systems are designed for different purposes, it would be like asking what are the pros and cons of using a hammer vs a hacksaw.*


## What’s the difference between a FIFO and a standard queue?

*
Standard queues provide at-least-once delivery, which means that each message is delivered at least once. FIFO queues provide exactly-once processing, which means that each message is delivered once and remains available until a consumer processes it and deletes it. Duplicates are not introduced into the queue.
*


## How can the server be assured a message was properly received?

*
The client sends a request, and the server returns a response. This exchange of messages is an example of inter-process communication. To communicate, the computers must have a common language, and they must follow rules so that both the client and the server know what to expect*

## ServerlessAPI

*
Serverless is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. A serverless application runs in stateless compute containers that are event-triggered, ephemeral (may last for one invocation), and fully managed by the cloud provider*

## Triggers

*is a database object which fires when an event occurs in a database. We can execute a SQL query that will "do something" in a database when a change occurs on a database table such as a record is inserted or updated or deleted. For example, a trigger can be set on a record insert in a database table*


## Dynamo vs Mongo


*
DynamoDB is a key-value store with added support for JSON to provide document-like data structures that better match with objects in application code. ... Compared to MongoDB, DynamoDB has limited support for different data types. For example, it supports only one numeric type and does not support dates*


## Dynamoose vs Mongoose


*
Dynamoose is a modeling tool for Amazon's DynamoDB. Dynamoose is heavily inspired by Mongoose, which means if you are coming from Mongoose the syntax will be very familar.*