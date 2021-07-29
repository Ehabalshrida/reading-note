# Readings : Images, Color, Text

## Images

### Choosing Images for Your Site

*A picture can say a thousand words, and great
images help make the difference between an
average-looking site and a really engaging one.*


*Images can be used to set the
tone for a site in less time than
it takes to read a description. If
you do not have photographs
to use on your website, there
are companies who sell stock
images; these are images you*

*pay to use (there is a list of stock
photography websites below).
Remember that all images are
subject to copyright, and you
can get in trouble for simply
taking photographs from
another website.*

**stock
photography websites**

- www.istockphoto.com
- www.gettyimages.com
- www.veer.com
- www.sxc.hu
- www.fotolia.com


### Storing Images on Your Site

*If you are building a site from scratch, it is good
practice to create a folder for all of the images
the site uses.*

### Adding Images

`<img>`
*To add an image into the page
you need to use an `<img>`
element. This is an empty
element (which means there is
no closing tag). It must carry the
following two attributes:*

- `src`

*This tells the browser where
it can find the image file. This
will usually be a relative URL
pointing to an image on your
own site.*



- `alt`

*This provides a text description
of the image which describes the
image if you cannot see it.*

- `title`

*You can also use the title
attribute with the <img> element
to provide additional information
about the image.*


### Height & Width of Images

*You will also often see an <img>
element use two other attributes
that specify its size:*

* `height`

*This specifies the height of the
image in pixels.*

* `width`

*This specifies the width of the
image in pixels.*



### Where to Place Images in Your Code ?
*Here are three
examples of image placement
that produce different results:*

- before a paragraph

- inside the start of a paragraph

- in the middle of a paragraph

*Where you place the image in
the code is important because
browsers show HTML elements
in one of two ways:*

- Block elements always appear
on a new line. Examples of block
elements include the `<h1>` and
`<p>` elements If the `<img>` is followed by a
block level element (such as a
paragraph) then the block level
element will sit on a new line
after the imageas shown in the
first example on this page*





- Inline elements sit within a
block level element and do not
start on a new line. Examples of
inline elements include the `<b>`,
`<em>`, and `<img>` elements.
If the `<img>` element is inside a
block level element, any text or
other inline elements will flow
around the image*


### Aligning Images Horizontally
`align`

*The align attribute was
commonly used to indicate how
the other parts of a page should
flow around an image. It has
been removed from HTML5
and new websites should use
CSS to control the alignment of
images*

*The align attribute can take
these horizontal values:*

- `left`

 *This aligns the image to the left
(allowing text to flow around its
right-hand side).*

`<img src="images/bird.gif" alt="Bird" width="100"
height="100" align="left" />`

- `right`

 *This aligns the image to the right
(allowing text to flow around its
left-hand side).*

 `<img src="images/bird.gif" alt="Bird" width="100"
height="100" align="right" />`

### Aligning Images Vertically

*There are three values that the
align attribute can take that
control how the image should
align vertically with the text that
surrounds it*

- `top`

 This aligns the first line of the
surrounding text with the top of
the image.
- `middle`

 *This aligns the first line of the
surrounding text with the middle
of the image.*
- `bottom` 

 *This aligns the first line of the
surrounding text with the bottom
of the image.*


**Three Rules for Creating Images**

- Save images in the right format
- Save images at the right size
- Use the correctresolution


*There are several tools you can use to edit and
save images to ensure that they are the right
size, format, and resolution, and the most popular is adobe photoshop*

### HTML 5: Figure and Figure Caption

- `<figure>`

*Images often come with
captions. HTML5 has introduced
a new `<figure>` element to
contain images and their caption
so that the two are associated.
You can have more than one
image inside the `<figure>`
element as long as they all share
the same caption.*

- `<figcaption>`


*The `<figcaption>` element has
been added to HTML5 in order
to allow web page authors to add
a caption to an image.*


*Before these elements were
created there was no way to
associate an `<img>` element with
its caption.*


## Color 

### Foreground Color

`color`

*The color property allows you
to specify the color of text inside
an element. You can specify any
color in CSS in one of three ways:*

- `rgb` values:

*These express colors in terms
of how much red, green and
blue are used to make it up. For
example: rgb(100,100,90)*
- `hex codes`

*These are six-digit codes that
represent the amount of red,
green and blue in a color,
preceded by a pound or hash `#`
sign. For example: #ee3e80*

- `color names`


*There are 147 predefined color
names that are recognized
by browsers. For example:
DarkCyan*


### Background Color 
`background-color`

*CSS treats each HTML element
as if it appears in a box, and the
background-color property
sets the color of the background
for that box.
You can specify your choice of
background color in the same
three ways you can specify
foreground colors: RGB values,
hex codes, and color names*

*Every color on a computer screen is created by mixing amounts of red,
green, and blue. To find the color you want, you can use a color picker.*

### Contrast 

*When picking foreground and background
colors, it is important to ensure that there is
enough contrast for the text to be legible.*


### CSS 3: Opacity
`opacity`, `rgba `

*CSS3 introduces the opacity
property which allows you to
specify the opacity of an element
and any of its child elements.
The value is a number between
0.0 and 1.0 (so a value of 0.5
is 50% opacity and 0.15 is 15%
opacity).*

*The CSS3 rgba property allows
you to specify a color, just like
you would with an RGB value,
but adds a fourth value to
indicate opacity. This value is
known as an alpha value and is
a number between 0.0 and 1.0
(so a value of 0.5 is 50% opacity
and 0.15 is 15% opacity). The
rgba value will only affect the
element on which it is applied
(not child elements)*


### CSS3: HSL Colors


*CSS3 introduces an entirely new and intuitive
way to specify colors using hue, saturation,
and lightness values.*


- hue 

*Hue is the colloquial idea of
color. In HSL colors, hue is often
represented as a color circle
where the angle represents the
color, although it may also be
shown as a slider with values
from 0 to 360.*

- saturation

*Saturation is the amount of
gray in a color. Saturation is
represented as a percentage.
100% is full saturation and 0%
is a shade of gray.*


- lightness

*Lightness is the amount of
white (lightness) or black
(darkness) in a color. Lightness
is represented as a percentage.
0% lightness is black, 100%
lightness is white, and 50%
lightness is normal. Lightness
is sometimes referred to as
luminosity.*

### CSS3: HSL & HSLA
`hsl`, `hsla`

*The `hsl` color property has
been introduced in CSS3 as an
alternative way to specify colors.
The value of the property starts
with the letters hsl, followed
by individual values inside
parentheses for:*
`body {
background-color: #C8C8C8;
background-color: hsl(0,0%,78%);}
`


`p {
background-color: #ffffff;
background-color: hsla(0,100%,100%,0.5);}`

`hue`

*This is expressed as an angle
(between 0 and 360 degrees).*

`saturation`

*This is expressed as a
percentage.*

`lightness`

*This is expressed as a
percentage with 0% being white,
50% being normal, and 100%
being black.*

*The` hsla` color property allows
you to specify color properties
using hue, saturation, and
lightness as above, and adds a
fourth value which represents
transparency (just like the rgba
property). The a stands for:*
`alpha`

*This is expressed as a
number between 0 and 1.0.
For example, 0.5 represents
50% transparency, and 0.75
represents 75% transparency*



## Text 
