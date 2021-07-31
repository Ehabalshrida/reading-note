# Readings : Problem Domain, Objects, and the DOM

## Object Literals 

### WHAT IS AN OBJECT?
*Objects group together a set of variables and functions to create a model
of a something you would recognize from the real world. In an object,
variables and functions take on new names.
IN AN OBJECT: VARIABLES BECOME
KNOWN AS PROPERTIES
If a variable is part of an object, it is called a
property. Properties te ll us about the object, such as
the name of a hotel or the number of rooms it has.
Each individual hotel might have a different name
and a different number of rooms.
@ FUNCTIONS, METHODS & OBJECTS
IN AN OBJECT: FUNCTIONS BECOME
KNOWN AS METHODS
If a function is part of an object, it is called a method.
Methods represent tasks that are associated with
the object. For example, you can check how many
rooms are available by subtracting the number of
booked rooms from the total number of rooms.*



### Create an object 

*literal notation is the easiest and most popular way to create the object*

*in the object we define the properties by determine its key and its value, and separate the properties from methods by using comma .*

### accessing and object and dot notation 

*you can access the proberties and methodes of project by using dot notation by mention the object name then member operator (.)then the name of property or the method*



*you can access the proberty by square bractes such that mention the `object name` = `['property name ']`

## Document Object Model

*The Document Object Model (DOM) specifies
how browsers should create a model of an HTML
page and how JavaScript can access and update the
contents of a web page while it is in the browser window.*

*THE DOM TREE IS A MODEL OF A WEB PAGE*

*As a browser loads a web page, it creates a model of that page.
The model is called a DOM tree, and it is stored in the browsers' memory.
It consists of four main types of nodes.*


- BODY OF HTML PAGE
- THE DOCUMENT NODE
- ELEMENT NODES


*Each node is an object with methods and properties.
Scripts access and update this DOM tree (not the source HTML file).
Any changes made to the DOM tree are reflected in the browser.*

- ATTRIBUTE NODES 


 *The opening tags of HTML elements can carry
attributes and these are represented by attribute
nodes in the DOM tree.*


- TEXT NODES


  *Once you have accessed an element node, you
can then reach the text within that element. This is
stored in its own text node.*


### WORKING WITH THE DOM TREE

*Accessing and updating the DOM tree involves two steps:

1: Locate the node that represents the element you want to work with.

2: Use its text content, child elements, and attributes.



*The terms elements and element nodes are used interchangeably
but when people say the DOM is working with an element,
it is actually working with a node that represents that element.*

### cashing DOM Queries 
*the method that find the element in the DOM  is called DOM Query*



*storing elements in the variable means that story the locations of these elements in tme DOM treee in the variable*



*cashing: it is storinging the location of each elements in the DOM tree in the variable*

### Methodes the select individual  elements 

- getElementByID()
- QuerySelector()


### NODELISTS: DOM QUERIES THAT RETURN MORE THAN ONE ELEMENT

*When a DOM method can return more than one element, it returns a
Nodelist (even if it only finds one matching element).*


*A Nodelist is a collection of element nodes. Each
node is given an index number (a number that starts
at zero, just like an array).*

*Nodelists look like arrays and are numbered like
arrays, but they are not ac tually arrays; they are a
type of object called a collection.*


*Like any other object, a Nodelist has properties and
methods, notably:*

• The length property tells you how many items
are in the Nodelist.

• The itern() method returns a specific node from
the Nodelist when you tell it the index number
of the item that you want (in the parentheses)*

### repeating action for an entire nodelist

*when you can loop through each in the collection and apply the same statement to each*


### TRAVERSING THE DOM

*When you have an element node, you can select
another element in relation to it using these five
properties. This is known as traversing the DOM.*

- parentNode

 *This property finds the element
node for the containing (or
parent) element in the HTML.*
- previousSibling nextSibling

 *These properties find the
previous or next sibling of a node
if there are siblings*

- firstChild lastChild

 *These properties find the first or
last child of the current element*


### WHITESPACE NODES

*Traversing the DOM can be difficult because
some browsers add a text node whenever they
come across whitespace between elements.*


### HOW TO GET/UPDATE ELEMENT CONTENT?

*To work with the content of elements you can:*

-  Navigate to the text nodes. This works best
when the element contains only text, no other
elements.

- Work with the containing element. This allows
you to access its text nodes and child elements.
It works better when an element has text nodes
and child elements that are siblings.


### ACCESS & UPDATE TEXT WITH TEXTCONTENT (& INN ERTEXT)

*The textCon tent property allows you to
collect or update just the text that is in the
containing element (and its children).*


### adding and removing HTML 

*There are two approaches to do that :*
- InnerHTML Property
- DOM manipulation
