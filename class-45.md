# Readings Event Driven Architecture

## What’s the difference between a FIFO and a standard queue?

*
Standard queues provide at-least-once delivery, which means that each message is delivered at least once. FIFO queues provide exactly-once processing, which means that each message is delivered once and remains available until a consumer processes it and deletes it*



## How can the server be assured a message was properly received?

*A message queue is a component of messaging middleware solutions that enables independent applications and services to exchange information. Message queues store “messages”—packets of data that applications create for other applications to consume—in the order they are transmitted until the consuming application can process them. This enables messages to wait safely until the receiving application is ready, so if there is a problem with the network or receiving application, the messages in the message queue are not lost.*


## What classic design pattern is best represented by event driven programming?


*
Their work describes the fundamental patterns that are encountered in traditional Object-Oriented programming. Mostly likely, when you hear about design patterns in conversation, these are what are being referred to*


*
An Event-Driven Architecture for data and applications is a modern design approach centered around data that describes “events” (i.e., something that just happened). Examples of events include the taking of a measurement, the pressing of a button, or the swiping of a credit card.*



## How do you test an event driven system?
- Ensure supporting topics exist.
- Start the application under test (“application” here could mean Kafka Streams, Kafka connectors, Samza, etc.)
- Send some input events.
- Wait until the application has finished processing the test input.
- Assert that it looks righ


## FIFO First Input First Output

## Pub/Sub "Publisher/Subscriber"

*allows services to communicate asynchronously, with latencies on the order of 100 milliseconds.*

*Pub/Sub is used for streaming analytics and data integration pipelines to ingest and distribute data. It is equally effective as messaging-oriented middleware for service integration or as a queue to parallelize tasks*