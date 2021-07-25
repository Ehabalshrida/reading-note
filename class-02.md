# Basics of HTML, CSS & JS

## Text

*during creating a web page, you  should add tags
(known as markup) to the contents of the
page, Which will provide extra meaning
and allow browsers the appropriate structure for the page to the users*

**we have two types of elements**

* Structural markup:

 *the elements that you can use to
describe both headings and paragraphs*
* Semantic markup:

 *which provides extra information; such
 as where emphasis is placed in a sentence, that something
you have written is a quotation (and who said it), the
meaning of acronyms, and so on*

### Headings

*HTML has six "levels" of
headings*

`<h1>`.`<h2>` ,`<h3>`,`<h4>` ,`<h5>`,`<h6>`

*Browsers display the contents of
headings at different sizes. The
contents of an `<h1>` element is
the largest, and the contents of
an `<h6>` element is the smallest*

### paragraphs

*To create a paragraph, you have to surround
the words which shape it with an opening `<p>`
tag and closing `</p>` tag.*


### Bold & Italic
 *By enclosing words in the tags
`<b>` and `</b>` we can make
characters appear bold.*

*By enclosing words in the tags
`<i>` and `</i>` we can make
characters appear italic.*

### Superscript & Subscript

`<sup>`

*The `<sup>` element is used
to contain characters that
should be superscript such
as the suffixes of dates or
mathematical concepts like
raising a number to a power such*

`<sub>`

*The `<sub>` element is used to
contain characters that should
be subscript. It is commonly
used with foot notes or chemical
formulas such as H20*

### White Space
*white space collapsing.*: 

*to treat the spases when they are more than one as one space only*


### Line Breaks & Horizontal Rules

*browser will automatically show
each new paragraph or heading
on a new line. But if you wanted
to add a line break inside the
middle of a paragraph you can
use the line break tag `<br />`, so new line will start afer the break*

`<hr />`

*To create a break between
themes — such as a change of
topic in a book or a new scene
in a play — you can add a
horizontal rule between sections
using the `<hr />` tag.*

### Semantic Markup

*There are text elements that are not intended to affect the
structure of your web pages, but they do add extra information to the
pages.*


### Strong & Emphasis


`<strong>`

*The use of the `<strong>`
element indicates that its
content has strong importance*

`<em>`

*The `<em>` element indicates
emphasis that subtly changes
the meaning of a sentence.*


### Quotations

*There are two elements
commonly used for marking up
quotations:*

* `<blockquote>`


   *The `<blockquote>` element is
 used for longer quotes that take
up an entire paragraph. Note
how the `<p>` element is still
used inside the `<blockquote>`
element.*

* `<q>`

 *The <q> element is used for
shorter quotes that sit within
a paragraph. Browsers are
supposed to put quotes around
the <q> element, however
Internet Explorer does not —
therefore many people avoid
using the <q> element.*

### Abb reviations & Acronyms

`<abbr>`

*If you use an abbreviation or
an acronym, then the <abbr>
element can be used. A title
attribute on the opening tag is
used to specify the full term.*


### Citations & Definitions

`cite>`



 *element can be used
to indicate where the citation is
from.*


`<dfn>`

*it is used to
indicate the defining instance of
a new term*

### Author Details

`<address>`

*The `<address>` element has
quite a specific use: to contain
contact details for the author of
the page.
It can contain a physical address,
but it does not have to. For
example, it may also contain a
phone number or email address*

### Changes to Content

`<ins>` , `<del>`

*The `<ins>` element can be used
to show content that has been
inserted into a document, while
the `<del>` element can show text
that has been deleted from it.*

`<s>`

*The `<s>` element indicates
something that is no longer
accurate or relevant (but that
should not be deleted).*


## Introducing CSS

*CSS works by associating rules with HTML elements. These rules govern
how the content of specified elements should be displayed. A CSS rule
contains two parts: a selector and a declaration.*

example:

P{
  font-family:arial;
}

* This rule indicates that all `<p>`
elements should be shown in the
Arial typeface
* Selectors indicate which
element the rule applies to.
The same rule can apply to
more than one element if you
separate the element names
with commas.

* Declarations indicate how
the elements referred to in
the selector should be styled.
Declarations are split into two
parts (a property and a value),
and are separated by a colon.

**CSS Properties Affect
How Elements Are
Displayed**


*CSS declarations sit inside curly brackets and each is made up of two
parts: a property and a value, separated by a colon. You can specify
several properties in one declaration, each separated by a semi-colon.*


## Using External CSS

`<link>`

*The `<link>` element can be used
in an HTML document to tell the
browser where to find the CSS
file used to style the page*

`href`

*This specifies the path to the
CSS file (which is often placed in
a folder called css or styles).*

`type`

*This attribute specifies the type
of document being linked to. The
value should be text/css.*

`rel`


*This specifies the relationship
between the HTML page and
the file it is linked to. The value
should be stylesheet when
linking to a CSS file.*

## Using Internal CSS

`<style>`

*You can also include CSS rules
within an HTML page by placing
them inside a `<style>` element,
which usually sits inside the
`<head>` element of the page.*

## CSS Selectors

*There are many different types
of CSS selector that allow you to
target rules to specific elements
in an HTML document.*

*CSS selectors are case sensitive,
so they must match element
names and attribute values
exactly.*


## How Css Rules Cascade

*If there are two or more rules
that apply to the same element,
it is important to understand
which will take precedence*

* LAST RULE:

 *If the two selectors are identical,
the latter of the two will take
precedence. Here you can see
the second i selector takes
precedence over the first.*

* SPECIFICITY 

*If one selector is more specific
than the others, the more
specific rule will take precedence
over more general ones.*

## Inheritance

*If you specify the font-family
or color properties on the
`<body>` element, they will apply
to most child elements. This is
because the value of the
font-family property is
inherited by child elements. It
saves you from having to apply
these properties to as many
elements (and results in simpler
style sheets).*

## Basic JavaScript Instructions

### STATEMENTS
*A script is a series of instructions that a computer can follow one-by-one.
Each individual instruction or step is known as a statement.
Statements should end with a semicolon*

### COMMENTS
*You should write comments to explain what your code does.
They help make your code easier to read and understand.
This can help you and others who read your code*

**We use for add comments two ways:**
* /*      */ for Multi-line comments

* // for single-line comments

### WHAT IS A VARIABLE?
 *A script will have to temporarily
store the bits of information it
needs to do its job. It can store this
data in variables.*

*A variable is a good name for this
concept because the data stored
in a variable can change (or vary)
each time a script runs.*

#### How to declare Variables?

look at this an example:

Var sum ;

var: its key word used to create a variables.

sum: its variable name .

#### how to assign a value to variables?

*when you tell variable which values should it stored , this called the assigning value .*

## data type :

*JavaScript distinguishes between numbers,
strings, and true or false values known as
Booleans*

* Numeric Data Type 
* string data type 
* boolean Data Type 


### SHORTHAND FOR CREATING VARIABLES

*Programmers sometimes use
shorthand to create variables.
Here are three variations of how
to declare variables and assign
them values:*

1. Variables are declared and
values assigned in the same
statement.


 ex:

 var price = 5;

 var quantity = 14;

 var total = price * quantity

2. Three variables are declared
on the same line, then values
assigned to each.

ex:

var price, quantity, total ;

price = 5;

quanti ty = 14;

total = price * quantity;

3. Two variables are declared
and assigned values on the same
line. Then one is declared and
assigned a value on the next line.

ex:

var price 5, quantity = 14;

var total = price * quantity;

### CHANGING THE VALUE OF A VARIABLE:

*Once you have assigned a value
to a variable, you can then
change what is stored in the
variable later in the same script.*

*Once the variable has been
created, you do not need to
use the var keyword to assign
it a new value. You just use the
variable name, the equals sign
(also known as the assignment
operator), and the new va lue for
that attribute.*


### RULES FOR NAMING VARIABLES :

**Here are six rules you must always follow when giving a variable a name:**

- The name must begin with
a letter, dollar sign ($),or an
underscore (_). It must not start
with a number 

- The name can contain letters,
numbers, dollar sign ($), or an
underscore (_). Note that you
must not use a dash(-) or a
period (.) in a variable name.

- You cannot use keywords or
reserved words

- All variables are case sensitive,
so score and Score would be
different variable names, but
it is bad practice to create two
variables that have the same
name using different cases

- Use a name that describes the
kind of information that the
variable stores 

- If your variable name is made
up of more than one word, use a
capital letter for the first letter of
every word after the first word.



### ARRAYS 

*An array is a special type of variable. It doesn't
just store one value; it stores a list of values.*

#### CREATING AN ARRAY 

*You create an array and give it
a name just like you would any
other variable (using the var
keyword followed by the name of
the array).*

*The values are assigned to the
array inside a pair of square
brackets, and each value is
separated by a comma. The
values in the array do not need
to be the same data type, so you
can store a string, a number and
a Boolean all in the same array.*


#### VALUES IN ARRAYS

*Values in an array are accessed as if they are in
a numbered list. It is important to know that the
numbering of this list starts at zero (not one).*


### EXPRESSIONS

*An expression evaluates into (results in) a single value. Broadly speaking
there are two types of expressions*


### OPERATORS

*Expressions rely on things called operators; they allow programmers to
create a single value from one or more values.*


#### Types of operators 

- ASSIGNMENT OPERATORS
- COMPARISON OPERATORS
- ARITHMETIC OPERATORS
- LOGICAL OPERATORS
- STRING OPERATORS


## Decision and loops 

*There are several place in script where decision is made to determine which line of code should be run.*

### Evaluationg conditions and conditional statments 

** There are two components to decision:**
- an expresion is evaluated,which return value.
- statment say what should to do in a given situation .


#### structuring comparsion operators:

*in any condition there is one operator and two operands,they are placed on each side of the operatorwhich could be an a value or variables, and the expression  seen enclosed in brackets*


#### USING COMPARISON OPERATORS

*you can
evaluate two variables using a
comparison operator to return a
t rue or f al se value.*

#### using expressions with comparison operators:
*The operands doesn't have to be a single value or variable name, operand can be an expression, because each expression is evaluate into single value*

#### Logical Operator 

*comparison operator usually return single value true or false, logical operator allow you to comparethe results of more than one comparison operator*

** logical operators:**

* LOGICAL AND
* LOGICAL OR
* LOGICAL NOT

### IF statment 


*it check the condition and if the condition true then any statments in the subsequent code block will excute*

#### if else statment 
*it check the condition if the result true then the first code block will execute, but if the result false then the second code block execute*

#### SWITCH STATEMENTS

*A switch statement starts with a
variable called the switch value.
Each case indicates a possible
value for this variable and the
code that should run if the
variable matches that value.*

#### TYPE COERCION & WEAK TYPING

*If you use a data type JavaScript did not expect,
it tries to make sense of the operation rather
than report an error.*

#### TRUTHY & FALSY VALUES

*Due to type coercion, every value in JavaScript
can be treated as if it were true or false; and
this has some interesting side effects*


#### CHECKING EQUALITY & EXISTENCE

*Because the presence of an object or array can
be considered truthy, it is often used to check
for the existence of an element within a page.*

#### SHORT CIRCUIT VALUES

*Logical operators are processed left to right.
They short-circuit (stop) as soon as they have a
result - but they return the value that stopped
the processing (not necessarily true or fa 1 se).*

### Loops 

*loop check a condition if the result true then code block wil run,and condition will check again if it true it will run again, and so on if the condition is true the code block will repeat to run*

***we have three loops statments***

- For loop
- While Loop
- Do while Loop 