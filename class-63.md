# Redux - Asynchronous Actions

## How granular should your reducers be?

It’s easy to go full-warp with very specific events, dedicated for every change that occurs when a user is editing forms such as CHANGE_NAME, CHANGE_STREET, CHANGE_AGE, etc… But it is not actually necessary if the logic behind the update is not different for all those fields. For those parts which require different handling in various reducers; dedicated action is the best solution. For others, sometimes a general action might be good enough.

## Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched

 Whether this is good or bad depends on your app. having many stores (or Redux reducers) handling the same action is actually very convenient because it divides responsibilities, and also lets people work on feature branches without colliding with the rest of the team. In my experience it's easier to maintain unrelated mutations separately than one giant mutation. But there are cases where this doesn't work too well. I'd say they are often symptoms of a suboptimal state model. For example, in some cases, one reducer may depend on data from another(like moving a message from unread to message, or even promote a message as a new thread from message to thread) is a symptom of a problem. If you have to move stuff inside your state a lot, maybe the state shape needs to be more normalized.

## Name a strategy for preventing the above

thunk

## Terms


**store:** 
A store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer. Let us see how we can create a store using the createStore method from Redux.

**combined reducers:**
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore . The resulting reducer calls every child reducer, and gathers their results into a single state object.|
