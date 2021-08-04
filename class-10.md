# Error Handling and Depugging 

## EXECUTION CONTEXT & HOISTING

*Each time a script enters a new execution context, there are two phases
of activity:*

- PREPARE
- EXECUTE


## UNDERSTANDING SCOPE

*In the interpreter, each execution context has its own va ri ables object.
It holds the variables, functions, and parameters available within it.
Each execution context can also access its parent's v a ri ables object.*


## UNDERSTANDING ERRORS

*If a JavaScript statement generates an error, then it throws an exception.
At that point, the interpreter stops and looks for exception-handling code.*



## ERROR OBJECTS 

*Error objects can help you find where your mistakes are
and browsers have tools to help you read them.*


## ERROR OBJECTS CONTINUED
*Please note that these error messages are from the Chrome browser. Other browsers' error messages may vary.*

`Syntax Error`
`SYNTAX IS NOT CORRECT`

*This is caused by incorrect use of the rules of the
language. It is often the result of a simple typo*


`Ref erenceError`
`VARIABLE DOES NOT EXIST`

*This is caused by a variable that is not declared or is
out of scope.*



## HOW TO DEAL WITH ERRORS
*Now that you know what an error is and how the browser treats them,
there are two things you can do with the errors.*

**1: DEBUG THE SCRIPT TO FIX ERRORS**

*If you come across an error while writing a script
(or when someone reports a bug), you will need to
debug the code, track down the source of the error,
and fix it.
You will find that the developer tools available in
every major modern browser will help you with
this task. In this chapter, you will learn about the
developer tools in Chrome and Firefox. (The tools in
Chrome are identical to those in Opera.)
IE and Safari also have their own tools (but there is
not space to cover them all).
@ ERROR HANDLING & DEBUGGING*


**2: HANDLE ERRORS GRACEFULLY**

*You can handle errors gracefully using try, catch,
throw, and f i na 1 ly statement s.
Sometimes, an error may occur in the script for a
reason beyond your control. For example, you might
request data from a third party, and their server
may not respond. In such cases, it is particularly
important to write error-handling code.
In the latter part of the chapter, you will learn how to
gracefully check whether something will work, and
offer an alternative option if it fails.*


## A DEBUGGING WORKFLOW

*Debugging is about deduction: eliminating potential causes of an error.
Here is a workflow for techniques you will meet over the next 20 pages.
Try to narrow down where the problem might be, then look for clues.*



## BROWSER DEV TOOLS & JAVASCRIPT CONSOLE

*The JavaScript console will tell you when there is a problem with a script,
where to look for the problem, and what kind of issue it seems to be.*


## HOW TO LOOK AT ERRORS IN CHROME

*The console will show you when there is an
error in your JavaScript. It also displays the line
where it became a problem for the interpreter.*



## MORE CONSOLE METHODS

*To differentiate between the
types of messages you write
to the console, you can use
three different methods. They
use various colors and icons to
distinguish them.*


1. `conso1e.info()` can be used
for general information

2. `console.warn()` can be used
for warnings
3. `console.error()` can be used
to hold errors

## GROUPING MESSAGES 

*1. If you want to write a set of
related data to the console, you
can use the console. group ()
method to group the messages
together. You can then expand
and contract the results.*


*It has one parameter; the name
that you want to use for the
group of messages. You can
then expand and collapse the
contents by cl icking next to the
group's name as shown below*

*2. When you have finished
writing out the results for the
group, to indicate the end of the
group the console .groupEnd ()
method is used.*