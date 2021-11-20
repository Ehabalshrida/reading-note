# Readings: AWS: S3 and Lambda


## Describe “The Cloud” 

*‏
The cloud refers to software and services that run on the Internet, instead of locally on your computer. Most cloud services can be accessed through a Web browser like Firefox or Google Chrome, and some companies offer dedicated mobile apps*


## What is a container (as it relates to computers and servers)?

*
A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another*

## What is auto-scaling?

*AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it’s easy to setup application scaling for multiple resources across multiple services in minutes. The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas. AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance between them. If you’re already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services. With AWS Auto Scaling, your applications always have the right resources at the right time.*


*It’s easy to get started with AWS Auto Scaling using the AWS Management Console, Command Line Interface (CLI), or SDK. AWS Auto Scaling is available at no additional charge. You pay only for the AWS resources needed to run your applications and Amazon CloudWatch monitoring fees.*

## What is bandwidth?

*The maximum amount of data transmitted over an internet connection in a given amount of time.*

*Bandwidth is often mistaken for internet speed when it's actually the volume of information that can be sent over a connection in a measured amount of time – calculated in megabits per second (Mbps).*



## Server Instances

*
A server instance is a collection of SQL Server databases which are run by a solitary SQL Server service or instance. The details of each server instance can be viewed on the service console which can be web-based or command-line based*


## Containers

*
Containers are packages of software that contain all of the necessary elements to run in any environment. In this way, containers virtualize the operating system and run anywhere, from a private data center to the public cloud or even on a developer's personal laptop*


## Cloud Services

*Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet.* 

*Cloud services facilitate the flow of user data from front-end clients (e.g. users’ servers, tablets, desktops, laptops—anything on the users’ ends), through the internet, to the provider’s systems, and back. Users can access cloud services with nothing more than a computer, operating system, and internet connectivity or virtual private network (VPN).*


## Cloud Architecture


*
Cloud architecture defines the technology components that are combined to build a cloud, where resources are pooled through virtualization technology and shared across a network. ... A front-end platform (the client or device used to access the cloud) One or more back-end platforms (servers and storage*


## AWS

*AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS) offerings. AWS services can offer an organization tools such as compute power, database storage and content delivery services.*

## EC2/Beanstalk vs Heroku

- AWS Elastic Beanstalk vs Heroku: What are the differences?

*What is AWS Elastic Beanstalk? Quickly deploy and manage applications in the AWS cloud. Once you upload your application, Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.*

*What is Heroku? Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience. Heroku is a cloud application platform – a new way of building and deploying web apps. Heroku lets app developers spend 100% of their time on their application code, not managing servers, deployment, ongoing operations, or scaling.*

*AWS Elastic Beanstalk and Heroku can be categorized as "Platform as a Service" tools.*

**Some of the features offered by AWS Elastic Beanstalk are:**

- Elastic Beanstalk is built using familiar software stacks such as the Apache HTTP Server for Node.js, PHP and Python, Passenger for Ruby, IIS 7.5 for .NET, and Apache Tomcat for Java
- There is no additional charge for Elastic Beanstalk - you pay only for the AWS resources needed to store and run your applications.
- Easy to begin – Elastic Beanstalk is a quick and simple way to deploy your application to AWS. You simply use the AWS Management Console, Git deployment, or an integrated development environment (IDE) such as Eclipse or Visual Studio to upload your application

**On the other hand, Heroku provides the following key features:**

- Agile deployment for Ruby, Node.js, Clojure, Java, Python, Go and Scala.
- Run and scale any type of app.
- Total visibility across your entire app.


## AWS S3

*Object storage built to retrieve any amount of data from anywhere*

*Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements.*

## AWS Lambda Basics

- What is AWS Lambda?

*AWS Lambda is a serverless computing service provided by Amazon Web Services (AWS). Users of AWS Lambda create functions, self-contained applications written in one of the supported languages and runtimes, and upload them to AWS Lambda, which executes those functions in an efficient and flexible manner.*

*The Lambda functions can perform any kind of computing task, from serving web pages and processing streams of data to calling APIs and integrating with other AWS services.*

*The concept of “serverless” computing refers to not needing to maintain your own servers to run these functions. AWS Lambda is a fully managed service that takes care of all the infrastructure for you. And so “serverless” doesn’t mean that there are no servers involved: it just means that the servers, the operating systems, the network layer and the rest of the infrastructure have already been taken care of, so that you can focus on writing application code.*


### How does AWS Lambda work?


*Each Lambda function runs in its own container. When a function is created, Lambda packages it into a new container and then executes that container on a multi-tenant cluster of machines managed by AWS. Before the functions start running, each function’s container is allocated its necessary RAM and CPU capacity. Once the functions finish running, the RAM allocated at the beginning is multiplied by the amount of time the function spent running. The customers then get charged based on the allocated memory and the amount of run time the function took to complete.
*

### Why is AWS Lambda an essential part of the Serverless architecture?

*When building Serverless applications, AWS Lambda is one of the main candidates for running the application code. Typically, to complete a Serverless stack you’ll need:*

- a computing service;
- a database service; and
- an HTTP gateway service.


### What are the most common use cases for AWS Lambda?

- individual tasks run for a short time;
- each task is generally self-contained;
- there is a large difference between the lowest and highest levels i the workload of the application.


## AWS Lambda Functions

*AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use.*


## Content Delivery Network (CDN)


*A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content. A CDN allows for the fast transfer of data needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.*

*CDNs work through servers nearest to the website visitor respond to the request. The content delivery network copies the pages of a website to a network of servers that are spread out at geographically different locations, caching the contents of the page. When a user requests a webpage that is part of a content delivery network, the CDN will redirect the request from the originating site’s server to a server in the CDN that is closest to the user and deliver the cached content. CDNs will also communicate with the originating server to deliver any content that has not been previously cached. In turn, the speed is improved by distributing content closer to the website visitors by using a nearby CDN server, causing visitors to experience faster page loading times. In simpler terms, for example, instead of a user in London trying to access a server in LA, which can cause slower Internet speeds, the user would be redirected through a CDN that is geographically closest to them (London, Paris, Stockholm, etc). As of today, the majority of web traffic goes through through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.*

*Employing a CDN doesn’t only speed up the delivery of Internet content, it helps protect your website against certain forms of cyber attacks, such as Denial of Service attacks. It protects against these threats because CDNs allow for the handling of more traffic and withstanding hardware failure better than many origin servers. *