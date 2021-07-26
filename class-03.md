# HTML Lists, Control Flow with JS, and the CSS Box Model

## lists 

### Ordered Lists

* `<ol>`

*The ordered list is created with
the `<ol>` element.*

* `<li>`



  *Each item in the list is placed
  between an opening `<li>` tag
 and a closing `</li>` tag. (The li
 stands for list item.)*

### Unordered Lists

* `<ul>`

*The unordered list is created
with the `<ul>` element.*

* `<li>`

 *Each item in the list is placed
between an opening `<li>` tag
and a closing `</li>` tag. (The li
stands for list item.)*


### Definition Lists

* `<dl>`

*The definition list is created with
the `<dl>` element and usually
consists of a series of terms and
their definitions.
Inside the `<dl>` element you will
usually see pairs of `<dt>` and
`<dd>` elements.*

* `<dt>`

*This is used to contain the term
being defined (the definition
term).*

* `<dd>`

*This is used to contain the
definition.*

### Nested Lists

*You can put a second list inside
an `<li>` element to create a sublist
or nested list*


## Boxes

### Box dimensions width, height

*By default a box is sized just big
enough to hold its contents. To
set your own dimensions for a
box you can use the height and
width properties.*

*The most popular ways to
specify the size of a box are
to use pixels, percentages, or
ems. Traditionally, pixels have
been the most popular method
because they allow designers to
accurately control their size*

*When you use percentages,
the size of the box is relative to
the size of the browser window
or, if the box is encased within
another box, it is a percentage of
the size of the containing box*

### Limiting Width min-width, max-width

*Some page designs expand and
shrink to fit the size of the user's
screen. In such designs, the
min-width property specifies
the smallest size a box can be
displayed at when the browser
window is narrow, and the
max-width property indicates
the maximum width a box can
stretch to when the browser
window is wide*

*These are very helpful properties
to ensure that the content of
pages are legible (especially on
the smaller screens of handheld
devices). For example, you can
use the max-width property to
ensure that lines of text do not
appear too wide within a big
browser window and you can
use the min-width property
to make sure that they do not
appear too narrow.*



### Limiting Height min-height, max-height

*In the same way that you might
want to limit the width of a box
on a page, you may also want
to limit the height of it. This is
achieved using the min-height
and max-height properties.*

### Overflowing Content 

overflow

*The overflow property tells the
browser what to do if the content
contained within a box is larger
than the box itself. It can have
one of two values*

* hidden

*This property simply hides any
extra content that does not fit in
the box*

* scroll

*This property adds a scrollbar to
the box so that users can scroll
to see the missing content.*

### Border, Margin & Padding

* Border

 *Every box has a border (even if
it is not visible or is specified to
be 0 pixels wide). The border
separates the edge of one box
from another*


* Margin

 *Margins sit outside the edge
of the border. You can set the
width of a margin to create a
gap between the borders of two
adjacent boxes*

* Padding

 *Padding is the space between
the border of a box and any
content contained within it.
Adding padding can increase the
readability of its contents.*


### White space & Vertical Margin

 *The padding and
margin properties
are very helpful
in adding space
between various
items on the page.*


### border width  `border-width`

*The border-width property
is used to control the width
of a border. The value of this
property can either be given
in pixels or using one of the
following values:*

* `thin`
* `medium`
* `thick`

### Border Style `border-style`

*You can control the style of a
border using the border-style
property. This property can take
the following values:*

`solid` a single solid line

`dotted` a series of square dots
(if your border is 2px wide, then
the dots are 2px squared with a
2px gap between each dot)

`dashed` a series of short lines

`double` two solid lines (the
value of the `border-width`
property creates the sum of the
two lines)

`groove` appears to be carved
into the page

`ridge` appears to stick out from
the page

`inset` appears embedded into
the page

`outset` looks like it is coming
out of the screen
`hidden / none` no border is
shown

You can individually change the
styles of different borders using:

`border-top-style`

`border-left-style`

`border-right-style`

`border-bottom-style`

### BORDER COLOR `Border-color`

*You can specify the color of a
border using either RGB values,
hex codes or CSS color names*


*It is possible to individually
control the colors of the borders
on different sides of a box using:*

`border-top-color`

`border-right-color`

`border-bottom-color`

`border-left-color`

### SHORTHAND `border`

*The border property allows you
to specify the width, style and
color of a border in one property
(and the values should be coded
in that specific order).*

### PADING `padding`

*The padding property allows
you to specify how much space
should appear between the
content of an element and its
border.*


### MARGIN `margin`

*The margin property controls
the gap between boxes. Its value
is commonly given in pixels,
although you may also use
percentages or ems.*

### Centering Content

*If you want to center a box on
the page (or center it inside
the element that it sits in), you
can set the left-margin and
right-margin to auto.*


### IE 6 Box Model

*When you specify the width of
a box, any padding or margin
should be added to the width of
it. Internet Explorer 6, however,
has a quirk whereby it includes
the padding and margins in the
width of the box.*

*The way around this is to ensure
that you provide a DOCTYPE
declaration for the HTML page.
(DOCTYPE declarations were
covered on page 181.) You can
use either the HTML5, HTML
4 strict, or HTML 4 transitional
DOCTYPE declarations to
ensure that IE6 follows the
correct box model.*

### Change Inline/Block

`display`

*The display property allows
you to turn an inline element
into a block-level element or vice
versa, and can also be used to
hide an element from the page*

*The values this property can
take are:*


* `inline`

*This causes a block-level
element to act like an inline
element.*


* `block`

*This causes an inline element to
act like a block-level element*

* `inline-block`

*This causes a block-level
element to flow like an inline
element, while retaining other
features of a block-level element.*

*  `none`


  
  *This hides an element from the
page. In this case, the element
acts as though it is not on the
page at all (although a user could
still see the content of the box if
they used the view source option
in their browser).*


### HIDING BOXES 

* `visibility`

*The visibility property allows
you to hide boxes from users
but It leaves a space where the
element would have been.
This property can take two
values:*

* `hidden`

*This hides the element.*


* `visible`

*This shows the element.*

**If the visibility of an element
is set to hidden, a blank space
will appear in its place**


### CSS3: Border Images `border-image`

*The border-image property
applies an image to the border of
any box. It takes a background
image and slices it into nine
pieces.*

### CSS3: Box Shadows `box-shadow`

*The box-shadow property
allows you to add a drop shadow
around a box. It works just like
the text-shadow property that
you met on page 288. It must
use at least the first of these two
values as well as a color:*

* `Horizontal offset`

*Negative values position the
shadow to the left of the box.*


* `Vertical offset`

*Negative values position the
shadow to the top of the box.*

* `Blur distance`

*If omitted, the shadow is a solid
line like a border.*

* `Spread of shadow`

*If used, a positive value will
cause the shadow to expand in
all directions, and a negative
value will make it contract*


### ROUNDED CORNERS  `border-radius`

*CSS3 introduces the ability to
create rounded corners on any
box, using a property called
border-radius. The value
indicates the size of the radius
in pixels.*

### Elliptical SHAPES `border-radius`

*To create more complex shapes,
you can specify different
distances for the horizontal and
the vertical parts of the rounded
corners.*


## ARRAYS

*An array is a special type of variable. It doesn't
just store one value; it stores a list of values.*

### CREATING AN ARRAY

*You create an array and give it
a name just like you would any
other variable (using the var
keyword followed by the name of
the array).*

### VALUES IN ARRAYS

*Values in an array are accessed as if they are in
a numbered list. It is important to know that the
numbering of this list starts at zero (not one).*

### ACCESSING & CHANGING VALUES IN AN ARRAY

*To access a value from an array,
after the array name you specify
the index number for that value
inside square brackets*


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
