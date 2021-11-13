# Event Driven Applications

## Why is access control important?

*its define the permissions for the users what they could do on the website*

## What is a role used for?

*it define the permissions*

## Why is role based access control more scalable than discretionary or mandatory access control?

*the operating system (under the control of a system administrator), Discretionary Access Control (DAC) allows each user to control access to their own data. ... User A can, however, set access permissions on a file that she owns*

## Authorization

*is the process of giving someone permission to do or have something. ... Thus, authorization is sometimes seen as both the preliminary setting up of permissions by a system administrator and the actual checking of the permission values that have been set up when a user is getting access.*


## Event-Driven Programming in Node.js

*is a logical pattern that we can choose to confine our programming within to avoid issues of complexity and collision*


*Every time you interact with a webpage through it’s user interface, an event is happening. When you click a button a click event is triggered. When you press a key a keydown event is triggered. These events have associated functions that, when triggered, are executed to make a change to the user interface in some way.*


**Event-Driven Programming makes use of the following concepts:**

- An Event Handler is a callback function that will be called when an event is triggered.

- A Main Loop listens for event triggers and calls the associated event handler for that event

**EventEmitter**

*Node.js natively provides us with a useful module called EventEmitter that allows us to get started incorporating Event-Driven Programming in our project right away. Of course, creating our own version of EventEmitter wouldn’t be much of a challange, and in fact there are several modules published on npm such as EventEmitter2 and EventEmitter3 which promise a faster performance than the native EventEmitter.*



### Removing Listeners

*There will likely come a time when you want to remove an event listener from an event. This could be for performance reasons (the event is no longer needed) or to avoid memory leaks (if an event listener references an object that is no longer needed, it won’t be able to be garbage-collected. This can lead to a build up of unnecessary objects).*

*To remove event listeners in EventEmitter we can use the `removeListener` or `removeAllListeners` method. It’s important to note that in the EventEmitter that comes built-in with Node you must pass a reference to the exact function you wish to remove when using the removeListener method. This means wherever you wish to remove the event, you’ll need to make sure the function is able to be referenced from that place in your code. For this reason it is often best to name your event handling functions and declaring them before you register the event listener, as opposed to leaving them anonymous.*


### Object Oriented Programming + Event-Driven Programming

*The Object Oriented approach promotes the idea that all behavior of an individual unit (or object) be handled from code within that unit. Using this approach, applications are built with many different units that all speak to and interact with each other.*

*Imagine we’re building a mail application. We might have an object whose sole purpose is to process the incoming and outgoing mail messages for our client. This object would contain all of its own behavioral functions. We might have a sendMail function that delivers our mail to a server. We might also have a receiveMail function that tells the server to deliver us any new mail it has for us. We’ll call the object responsible for these server interactions our Mailbox.*

*Now if we are building other units that want to make use of our sendMail function, they can access it through Mailbox.sendMail. This is a standard approach. But what happens when we later-on decide we also want to log the mail every time we send it? We now need to either modify our sendMail function to incorporate this behavior, or create another function that is triggered immediately after the sendMail function. In which case the object responsible for triggering the sendMail function must be sure to also trigger the log function. As our applications get more complex, and as new sequences of behavior are added, this could get somewhat out of hand.*

*This is where we can make use of Event-driven programming. By registering event listeners we can actually reverse the flow of communication between our objects. Rather than on object needing to reach inside another object to trigger a function, our objects can just emit events and whichever objects are listening to those event will process it in the way they have been told to. The source of an objects behavior is now entirely contained within itself, rather than needing to be accessed by external objects.*