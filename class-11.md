 # Readings : Audio, Video, Images

## Images

### Controlling sizes of images in CSS 

*You can control the size of an
image using the `width` and
`height` properties in CSS, just
like you can for any other box.*


### AligNing images Using CSS

*we can do that by using Float Attribute*

### Centering images Using CSS 


*By default, images are inline
elements. This means that they
flow within the surrounding text.
In order to center an image, it
should be turned into a blocklevel
element using the display
property with a value of block.
Once it has been made into a
block-level element, there are
two common ways in which you
can horizontally center an image:*

*1: On the containing element,
you can use the text-align
property with a value of center.*

*2: On the image itself, you can
use the use the margin property
and set the values of the left and
right margins to auto.*

### Background Images `background-image`

*The background-image
property allows you to place
an image behind any HTML
element. This could be the entire
page or just part of the page. By
default, a background image will
repeat to fill the entire box.*

### Repeating Images
`background-repeat`

`background-attachment`

`background-repeat`

property can have four values:

`repeat`

The background image is
repeated both horizontally and
vertically (the default way it
is shown if the backgroundrepeat
property isn't used).

`repeat-x`

The image is repeated
horizontally only (as shown in
the first example on the left).

`repeat-y`

The image is repeated vertically
only.

`no-repeat`

The image is only shown once.

The `background-attachment`

property specifies whether a
background image should stay in
one position or move as the user
scrolls up and down the page. It
can have one of two values:

`fixed`

The background image stays in
the same position on the page.

`scroll`

The background image moves
up and down as the user scrolls
up and down the page.

### Background Position
`background-position`

*When an image is not being
repeated, you can use the
background-position
property to specify where in the
browser window the background
image should be placed.
This property usually has a pair
of values. The first represents
the horizontal position and the
second represents the vertical.*

*If you only specify one value,
the second value will default to
center.
You can also use a pair of pixels
or percentages. These represent
the distance from the top left
corner of the browser window
(or containing box). The `top` `left`
corner is equal to `0% 0%`.*

### shorthand `background`

*The background property acts
like a shorthand for all of the
other background properties
you have just seen, and also the
background-color property.
The properties must be specified
in the following order, but you
can miss any value if you do not
want to specify it.*

1: `background-color`

2: `background-image`

3: `background-repeat`

4: `background-attachment`

5: `background-position`

`body 
{
background: #ffffff url("images/tulip.gif")
no-repeat top right;}`


###   Images Rollovers and sprites

*Using CSS, it is possible to create
a link or button that changes to a
second style when a user moves
their mouse over it (known as a
rollover) and a third style when
they click on it.*

*When a single image is used
for several different parts of an
interface, it is known as a `sprite`.*


### CSS3: Gradients `background-image`

*CSS3 is going to introduce the
ability to specify a gradient for
the background of a box. The
gradient is created using the
background-image property
and, at the time of writing,
different browsers required a
different syntax.
Since it is not supported by all
browsers, it is possible to specify
a background image for the box
first (which would represent the
gradient) and then provide the
CSS alternatives for browsers
that support gradients*


## Practical Information 

- Search engine optimization helps visitors find your
sites when using search engines.

- Analytics tools such as Google Analytics allow you to
see how many people visit your site, how they find it,
and what they do when they get there.

- To put your site on the web, you will need to obtain a
domain name and web hosting.

- FTP programs allow you to transfer files from your
local computer to your web server.

- Many companies provide platforms for blogging, email
newsletters, e-commerce and other popular website
tools (to save you writing them from scratch).