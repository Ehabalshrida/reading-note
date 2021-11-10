# Stacks and Queues

## What is a Stack

*A stack is a data structure that consists of `Nodes`. Each Node references the next Node in the stack, but does not reference its previous.*

## Stacks follow these concepts:

- FILO: First In Last Out

*This means that the first item added in the stack will be the last item popped out of the stack.
*

- LIFO : Last In First Out

*This means that the last item added to the stack will be the first item popped out of the stack.*

## Push O(1)

*Pushing a Node onto a stack will always be an `O(1)` operation. This is because it takes the same amount of time no matter how many Nodes `(n)` you have in the stack.*

*When adding a Node, you push it into the stack by assigning it as the new top, with its next property equal to the original top.*

## Pop O(1)

*Popping a Node off a stack is the action of removing a Node from the top. When conducting a pop, the top Node will be re-assigned to the Node that lives below and the top Node is returned to the user.*

*Typically, you would check isEmpty before conducting a pop. This will ensure that an exception is not raised. Alternately, you can wrap the call in a try/catch block.
*

## Peek O(1)
*When conducting a peek, you will only be inspecting the top Node of the stack.*

*Typically, you would check isEmpty before conducting a peek. This will ensure that an exception is not raised. Alternately, you can wrap the call in a try/catch block.*


## IsEmpty O(1)


## What is a Queue

*Common terminology for a queue is*

- Enqueue - Nodes or items that are added to the queue.
- Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
- Front - This is the front/first Node of the queue.
- Rear - This is the rear/last Node of the queue.
- Peek - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
- IsEmpty - returns true when queue is empty otherwise returns false.
