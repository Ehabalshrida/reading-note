# Readings:  AWS: API, Dynamo and Lambda

## What are serverless functions?

*is a programmatic function written by a software developer for a single purpose. It's then hosted and maintained on infrastructure by cloud computing companies. These companies take care of code maintenance and execution so that developers can deploy new code faster and easier.*

## If you were to create a system that emulated Lambda functions, how would you do it?

- Step 1: Install AWS SAM CLI. ...
- Step 2: Create a hello world project. ...
- Step 3: Test your function locally. ...
- Step 4: Deploy your Lambda function to AWS. ...
- Step 5: Remove your Lambda function.


## Describe how a CDN works :

*
A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed*


### ‪Describe how a CDN works‬‏
*To minimize the distance between the visitors and your website's server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity*

## Serverless Functions

*is a programmatic function written by a software developer for a single purpose. It's then hosted and maintained on infrastructure by cloud computing companies. These companies take care of code maintenance and execution so that developers can deploy new code faster and easier*

## Cloud storage

*
Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service. ... This gives you agility, global scale and durability, with “anytime, anywhere” data access*


## CDN : content delivery network



## AWS API Gateway 

###  Overview


*Amazon API Gateway is a managed service that allows developers to define the HTTP endpoints of a REST API or a WebSocket API and connect those endpoints with the corresponding backend business logic. It also handles authentication, access control, monitoring, and tracing of API requests.*

*Many Serverless applications use Amazon API Gateway, which conveniently replaces the API servers with a managed serverless solution.*


### How does API Gateway work?

*API Gateway sits between the backend services of your API and your API’s users, handling the HTTP requests to your API endpoints and routing them to the correct backends. It provides a set of tools that help you manage your API definitions and the mappings between endpoints and their respective backend services. It can also generate API references from your definitions and make them available to your users as API documentation.*


## DynamoDB

### Overview

*DynamoDB is a hosted NoSQL database offered by Amazon Web Services (AWS).It offers:*

- reliable performance even as it scales;
- a managed experience, so you won't be SSH-ing into servers to upgrade the crypto libraries;
- a small, simple API allowing for simple key-value access as well as more advanced query patterns.

**DynamoDB is a particularly good fit for the following use cases:**

- **Applications with large amounts of data and strict latency requirements.** *As your amount of data scales, JOINs and advanced SQL operations can slow down your queries. With DynamoDB, your queries have predictable latency up to any size, including over 100 TBs!*

- **Serverless applications using AWS Lambda.** *AWS Lambda provides auto-scaling, stateless, ephemeral compute in response to event triggers. DynamoDB is accessible via an HTTP API and performs authentication & authorization via IAM roles, making it a perfect fit for building Serverless applications.*

- **Data sets with simple, known access patterns.** *If you're generating recommendations and serving them to users, DynamoDB's simple key-value access patterns make it a fast, reliable choice.*


## Dynamoose

*is a modeling tool for Amazon's DynamoDB. Dynamoose is heavily inspired by Mongoose, which means if you are coming from Mongoose the syntax will be very familar*


### Key Features#

- Type safety
- High level API
- Easy to use syntax
- Ability to transform data before saving or retrieving documents
- Strict data modeling (validation, required attributes, and more)
- Support for DynamoDB Transactions
- Powerful Conditional/Filtering Support
- Callback & Promise support