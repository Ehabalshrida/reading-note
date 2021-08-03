# Readings : Forms and JS Events


## Why Forms? 
*The best known form on the web is probably
the search box that sits right in the middle of
Google's homepage.*

### Form Controls 

*There are several types of form controls that
you can use to collect information from visitors
to your site.*


- ADDING TEXT:

 1 -  *Text input (single-line)
Used for a single line of text such
as email addresses and names.*

   2- Password input:
Like a single line text box but it
masks the characters entered.

  3-Text area (multi-line)
For longer areas of text, such as
messages and comments. 
- Making Choices:

 1- Radio buttons:

  *For use when a user must select
   one of a number of options.*

 2 - Checkboxes:

 *When a user can select and
unselect one or more options.*

 3- Drop-down boxes:
*When a user must pick one of a
number of options from a list.*

- Submitting Forms: 

 1- Submit buttons:

  *To submit data from your form
 to another web page.*

 2- Image buttons: 

 *Similar to submit buttons but
they allow you to use an image.*

-  Uploading Files:

 1- File upload:

*Allows users to upload files
(e.g. images) to a website.*

### How Forms Work ?

* A user fills in a form and then presses a button
to submit the information to the server.

* The name of each form
control is sent to the
server along with the
value the user enters or
selects.

* The server processes
the information using a
programming language
such as PHP, C#, VB.net,
or Java. It may also store
the information in a
database.

*  The server creates a new
page to send back to the
browser based on the
information received. 


### Form Structure 

`<form>`

*Form controls live inside a`<form>` element. This element
should always carry the action
attribute and will usually have a
method and id attribute too.*

`action` 

*Every `<form>` element requires
an action attribute. Its value
is the URL for the page on the
server that will receive the
information in the form when it
is submitted.*


`method`

*Forms can be sent using one of
two methods: get or post.*

`id`

*We look at the id attribute on
page 183, but the value is used to
identify the form distinctly from
other elements on the page (and
is often used by scripts — such
as those that check you have
entered information into fields
that require values).*

`Text Input`

`<input>`

*The `<input>` element is used
to create several different form
controls. The value of the type
attribute determines what kind
of input they will be creating.*

`type="text"`

*When the type attribute has a
value of text, it creates a singleline
text input.*



`name`

*When users enter information
into a form, the server needs to
know which form control each
piece of data was entered into.
(For example, in a login form, the
server needs to know what has
been entered as the username
and what has been given as the
password.) Therefore, each form
control requires a name attribute.
The value of this attribute
identifies the form control and is
sent along with the information
they enter to the server.*

`size`

*The size attribute should not
be used on new forms. It was
used in older forms to indicate
the width of the text input
(measured by the number of
characters that would be seen).*

`maxlength`

*You can use the maxlength
attribute to limit the number
of characters a user may enter
into the text field. Its value is the
number of characters they may
enter. For example, if you were
asking for a year, the maxlength
attribute could have a value of 4.*



### Password Input

`<input>`

`type="password"`

*When the type attribute has
a value of password it creates
a text box that acts just like a
single-line text input, except
the characters are blocked out.
They are hidden in this way so
that if someone is looking over
the user's shoulder, they cannot
see sensitive data such as
passwords.*


`name`


*The name attribute indicates
the name of the password input,
which is sent to the server with
the password the user enters.*

`size, maxlength`

*It can also carry the size and
maxlength attributes like the
the single-line text input.*

### text area 

`<textarea>`

*The `<textarea>` element
is used to create a mutli-line
text input. Unlike other input
elements this is not an empty
element. It should therefore have
an opening and a closing tag.*

### Radio Button

`<input>`

` type="radio"`

*Radio buttons allow users to pick
just one of a number of options.*


`name`

*The name attribute is sent to
the server with the value of the
option the user selects. When
a question provides users with
options for answers in the form
of radio buttons, the value of
the name attribute should be the
same for all of the radio buttons
used to answer that question.*

`value`

*The value attribute indicates
the value that is sent to the
server for the selected option.
The value of each of the buttons
in a group should be different
(so that the server knows which
option the user has selected).*


`checked`

*The checked attribute can be
used to indicate which value (if
any) should be selected when
the page loads. The value of this
attribute is checked. Only one
radio button in a group should
use this attribute.*

### Checkbox


`<input>`

`type="checkbox"`

Checkboxes allow users to select
(and unselect) one or more
options in answer to a question.

`name`

The name attribute is sent to
the server with the value of the
option(s) the user selects. When
a question provides users with
options for answers in the form
of checkboxes, the value of the
name attribute should be the
same for all of the buttons that
answer that question.

`value`

The value attribute indicates
the value sent to the server if this
checkbox is checked.

`checked`

The checked attribute indicates
that this box should be checked
when the page loads. If used, its
value should be checked.

### DropDown List Box

`<select>`

A drop down list box (also
known as a select box) allows
users to select one option from a
drop down list.

The `<select>` element is used
to create a drop down list box. It
contains two or more <option>
elements.

`name`

The name attribute indicates the
name of the form control being
sent to the server, along with the
value the user selected.

`<option>  `

The `<option> `element is used
to specify the options that the
user can select from. The words
between the opening `<option>`
and closing `</option>` tags will
be shown to the user in the drop
down box.

`value`

The` <option>`element uses the
value attribute to indicate the
value that is sent to the server
along with the name of the
control if this option is selected

`selected`


The selected attribute can be
used to indicate the option that
should be selected when the
page loads. The value of this
attribute should be selected


### Multiple Select Box

`<select>`

`size`

You can turn a drop down select
box into a box that shows more
than one option by adding the
size attribute. Its value should
be the number of options you
want to show at once. In the
example you can see that three
of the four options are shown.
Unfortunately, the way that
browsers have implemented this
attribute is not perfect, and it
should be tested throroughly if
used (in particular in Firefox and
Safari on a Mac).

`multiple`

You can allow users to select
multiple options from this list by
adding the multiple attribute
with a value of multiple.
It is a good idea to tell users if
they can select more than one
option at a time. It is also helpful
to indicate that on a PC they
should hold down the control key
while selecting multiple options
and on a Mac they should use
the command key while selecting
options.


### File Input Box 

`<input>`
If you want to allow users to
upload a file (for example an
image, video, mp3, or a PDF),
you will need to use a file input
box.

`type="file"`

This type of input creates a
box that looks like a text input
followed by a browse button.
When the user clicks on the
browse button, a window opens
up that allows them to select a
file from their computer to be
uploaded to the website.
When you are allowing users
to upload files, the method
attribute on the <form> element
must have a value of post. (You
cannot send files using the HTTP
get method.)



### Submit Button

`<input>`

`type="submit"`

The submit button is used to
send a form to the server.

`name`

It can use a name attribute but it
does not need to have one.

`value`

The value attribute is used to
control the text that appears
on a button. It is a good idea to
specify the words you want to
appear on a button because the
default value of buttons on some
browsers is ‘Submit query’ and
this might not be appro


`Image Button`

`<input>`

`type="image"`

If you want to use an image for
the submit button, you can give
the type attribute a value of
image. The src, width, height,
and alt attributes work just
like they do when used with the
`<img>` element (which we saw
on pages 99-100).