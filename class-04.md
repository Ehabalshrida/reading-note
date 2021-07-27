# HTML Links, JS Functions, and Intro to CSS Layout

##  Links

### Writing Links
*Links are created using the `<a>` element. Users can click on anything
between the opening `<a>` tag and the closing `</a>` tag. You specify
which page you want to link to using the href attribute.*


### Linking to Other Sites

`<a>`

*Links are created using the <a>
element which has an attribute
called href. The value of the
href attribute is the page that
you want people to go to when
they click on the link.*

*Users can click on anything that
appears between the opening
<a> tag and the closing </a>
tag and will be taken to the page
specified in the href attribute*

### Linking to Other Pages on the Sa me Site

`<a>`


*When you are linking to other
pages within the same site,
you do not need to specify the
domain name in the URL. You
can use a shorthand known as a
relative URL.*

*If all the pages of the site are in
the same folder, then the value
of the href attribute is just the
name of the file.*

*If you have different pages of a
site in different folders, then you
can use a slightly more complex
syntax to indicate where the
page is in relation to the current
page.*

### Directory Structure

*On larger websites it's a good idea to organize your code by placing the
pages for each different section of the site into a new folder. Folders on a
website are sometimes referred to as directories.*


### Relative URLs

*Relative URLs can be used when linking to pages within your own
website. They provide a shorthand way of telling the browser where to
find your files.*

### Email Links

`mailto:`

*To create a link that starts up
the user's email program and
addresses an email to a specified
email address, you use the `<a>`
element. However, this time the
value of the `href` attribute starts
with mailto: and is followed by
the email address you want the
email to be sent to.*

### Opening Links in a New Window

`target`

*If you want a link to open in a
new window, you can use the
target attribute on the opening
`<a>` tag. The value of this
attribute should be _blank.
One of the most common
reasons a web page author
might want a link to be opened
in a new window is if it points to
another website. In such cases,
they hope the user will return
to the window containing their
site after finishing looking at the
other one.*

### Linking to a Specific Part of the Same Page

*At the top of a long page
you might want to add a list
of contents that links to the
corresponding sections lower
down. Or you might want to add
a link from part way down the
page back to the top of it to save
users from having to scroll back
to the top.*

*Before you can link to a specific
part of a page, you need to
identify the points in the page
that the link will go to. You do
this using the id attribute (which
can be used on every HTML
element). You can see that the
`<h1>` and `<h2>` elements in this
example have been given id
attributes that identify those
sections of the page.*

### Linking to a Specific Part of Another Page

*If you want to link to a specific
part of a different page (whether
on your own site or a different
website) you can use a similar
technique.
As long as the page you are
linking to has id attributes that
identify specific parts of the
page, you can simply add the
same syntax to the end of the
link for that page.
Therefore, the href attribute
will contain the address for the
page (either an absolute URL or
a relative URL), followed by the
`# symbol`, followed by the value
of the id attribute that is used on
the element you are linking to.*

## Layout

### Key Concepts in Positioning Elements

#### Building Blocks

*CSS treats each HTML element as if it is in its
own box. This box will either be a block-level
box or an inline box*

* Block-level elements:

 *start on a new line
Examples include:
`<h1>` `<p>` `<ul>` `<li>`*


* Inline elements

 *flow in between
surrounding text
Examples include:
`<img>` `<b>` `<i>`*



#### Containing Elements
*If one block-level element sits inside another
block-level element then the outer box is
known as the containing or parent element.*


#### Controlling the Position of Elements

*CSS has the following positioning schemes that allow you to control
the layout of a page: normal flow, relative positioning, and absolute
positioning. You specify the positioning scheme using the position
property in CSS. You can also float elements using the float property.*


* Normal flow

 *Every block-level element
appears on a new line, causing
each item to appear lower down
the page than the previous one.
Even if you specify the width
of the boxes and there is space
for two elements to sit side-byside,
they will not appear next
to each other. This is the default
behavior (unless you tell the
browser to do something else).*



* Relative Positioning

 *This moves an element from the
position it would be in normal
flow, shifting it to the top, right,
bottom, or left of where it
would have been placed. This
does not affect the position of
surrounding elements; they stay
in the position they would be in
in normal flow.*



* Absolute positioning

*This positions the element
in relation to its containing
element. It is taken out of
normal flow, meaning that it
does not affect the position
of any surrounding elements
(as they simply ignore the
space it would have taken up).
Absolutely positioned elements
move as users scroll up and
down the page.*

## Function, Methods & Objects:


### Functions 

 #### WHAT IS A FUNCTION?

  *Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same ask, you can reuse the function (rather than repeating the same set of statements).*


#### declare Function:

*to declare function you should name it, and insert inside the Curly braces the statements to achieve the task*


#### calling the functions:

*after declaring the function you can execute all required statements with just one line of code this is the calling of the function*


### object:

#### what is the object?


*Objects group together a set of variables and functions to create a model
of a something you would recognize from the real world. In an object,
variables and functions take on new names.*


## 6 Reasons for Pair Programming:

### How does pair programming work?

*While there are many different styles, pair programming commonly involves two roles: the Driver and the Navigator. The Driver is the programmer who is typing and the only one whose hands are on the keyboard. Handling the “mechanics” of coding, the Driver manages the text editor, switching files, version control, and—of course writing—code. The Navigator uses their words to guide the Driver but does not provide any direct input to the computer. The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs. The Navigator might also utilize their computer as a second screen to look up solutions and documentation, but should not be writing any code.*

### Why pair program?
There 6 reasons for it:

- Greater efficiency

-  Engaged collaboration
- Learning from fellow students
- Social skills
- Job interview readiness
- Work environment readiness




