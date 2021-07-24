# Introductory HTML and JavaScript
## Introduction 

** How people access the web ?**

*People access websites using
software called a web browser.
Popular examples include
Firefox, Internet Explorer, Safari,
Chrome, and Opera.*

**What's the WEB Server ?**

*Web servers are special
computers that hosts the web pages that are constantly
connected to the Internet, and
are optimized to send web pages
out to people who request them*

**How the Web Works ?**

1- *When you connect to the web,
you do so via an Internet Service
Provider (ISP). You type a
domain name or web address
into your browser to visit a site;
for example: google.com,
bbc.co.uk, microsoft.com.*

2- *Your computer contacts a
network of servers called
Domain Name System (DNS)
servers. These act like phone
books; they tell your computer
the IP address associated with
the requested domain name.
An IP address is a number
of up to 12 digits separated
by periods / full stops. Every
device connected to the web
has a unique IP address; it is
like the phone number for that computer*

3- *The unique number that the
DNS server returns to your
computer allows your browser
to contact the web server
that hosts the website you
requested. A web server is a
computer that is constantly
connected to the web, and is set
up especially to send web pages
to users.*

4- *The web server then sends the
page you requested back to your
web browser.*


## Structure 

*we use the HTML to build the website structure *

*HTML pages are text documents*

*HTML Uses Elements
to Describe the
Structure of Pages* 

*There are several different elements. Each
element has an opening tag and a closing tag.*

*Tags act like containers. They tell you
something about the information that lies
between their opening and closing tags.*

*Attributes provide additional information
about the contents of an element. They appear
on the opening tag of the element and are
made up of two parts: a name and a value,
separated by an equals sign.*

** Examples of html elements**

* Body

 *Everything inside this element is
shown inside the main browser*
window.*
*  Head

 *This contains information
about the page (rather than
information that is shown within
the main part of the browser
window*
* Title

 *The contents of the <title>
element are either shown in the
top of the browser, above where
you usually type in the URL of
the page you want to visit, or
on the tab for that page (if your
browser uses tabs to allow you
to view multiple pages at the
same time).*

**How to create web page on your PC?**

*To create your first web page on
a PC, start up Notepad. You can
find this by going to:*

* Start
All Programs (or Programs)
Accessories
Notepad
* Type the code on the notepad.

* Go to the File menu and select
Save as... You will need to save
the file somewhere you can
remember. If you like, you could
create a folder for any examples
that you try out from this book.
*Save this file as first-test.
html. Make sure that the Save
as type drop down has All Files
selected.
* Next, start your web browser,
go to the File menu, and select
Open. You should browse to the
file that you just created, select
it and click on the Open button.

## Extra Markup
 *we have several different versions of HTML, so each
web page should begin with a
DOCTYPE declaration to tell a
browser which version of HTML
the page is using (although
browsers usually display the
page even if it is not included).*

 * HTML5
 * HTML 4
 * Transitional XHTML 1.0
 * Strict XHTML 1.0
 * XML Declaration

**Comments in HTML**

*We use < !-- --> to add comments, Which  is a good idea to add
comments to your code because,
no matter how familiar you
are with the page at the time
of writing it, when you come
back to it later (or if someone
else needs to look at the code),
comments will make it much
easier to understand, Although comments are not
visible to users in the main
browser window, they can be
viewed by anyone who looks at
the source code behind the page.*

**ID Attribute**

*Every HTML element can carry
the id attribute. It is used to
uniquely identify that element
from other elements on the
page. Its value should start with
a letter or an underscore (not a
number or any other character).
It is important that no two
elements on the same page
have the same value for their id
attributes (otherwise the value is
no longer unique),For example,
you might want to assign one
paragraph within the page
(perhaps a paragraph containing
a pull quote) a different style
than all of the other paragraphs,The id attribute is known as a
global attribute because it can
be used on any element*

** Class Attribute**

*Every HTML element can
also carry a class attribute.
Sometimes, rather than uniquely
identifying one element within
a document, you will want a
way to identify several elements
as being different from the
other elements on the page.
For example, you might have
some paragraphs of text that
contain information that is more
important than others and want
to distinguish these elements, or
you might want to differentiate
between links that point to other
pages on your own site and links
that point to external sites.
To do this you can use the
class attribute. Its value
should describe the class it
belongs to*

**Block Elements**

*Elements will always
appear to start on a new line in
the browser window*

*Examples of block elements are:*

< h1> , < p>, < ul>, and < li>.

**Inline Eleme nts**

*elements will always
appear to continue on the
same line as their neighbouring
elements*

*Examples of inline elements are
< a>, < b>, < em>, and < img>*

**Grouping Text & Elements In a Block**

### `<div>`
*The `<div>` element allows you to
group a set of elements together
in one block-level box.
For example, you might create
a `<div>` element to contain all
of the elements for the header
of your site (the logo and the
navigation), or you might create
a `<div>` element to contain
comments from visitors, In a browser, the contents of
the `<div>` element will start on
a new line, but other than this
it will make no difference to the
presentation of the page.*

**Grouping Text & Elements Inline**

*`<span>`*

The `<span>` element acts like
an inline equivalent of the <div>
element. It is used to either:

1. Contain a section of text
where there is no other suitable
element to differentiate it from
its surrounding text

2. Contain a number of inline
elements

**IFrames**

`<iframe>`

*An iframe is like a little window
that has been cut into your
page — and in that window you
can see another page. The term
iframe is an abbreviation of inline
frame.
One common use of iframes
(that you may have seen on
various websites) is to embed
a Google Map into a page. The
content of the iframe can be any
html page (either located on the
same server or anywhere else on
the web).*

**`<meta>`**

*The `<meta>` element lives
inside the `<head>` element and
contains information about that
web page.
It is not visible to users but
fulfills a number of purposes
such as telling search engines
about your page, who created
it, and whether or not it is time
sensitive. (If the page is time
sensitive, it can be set to expire.)*

**Escape characters are used to include special
characters in your pages such as <, >, and ©.**



## HTML5 Layout 
*HTML5 introduces a new set of elements that allow you to divide up the
parts of a page. The names of these elements indicate the kind of content
you will find in them. They are still subject to change, but that has not
stopped many web page authors using them already*

** Headers & Footers `<header>` `<footer>` **

*The `<header>` and `<footer>` elements can be used for:*

* The main header or footer
that appears at the top or
bottom of every page on the
site.

* A header or footer for an
individual `<article>` or
`<section>` within the page

**Navigation `<nav>`**

*The `<nav>` element is used to
contain the major navigational
blocks on the site such as the
primary site navigation.*

**Articles `<article>`**


*The `<article>` element acts as
a container for any section of a
page that could stand alone and
potentially be syndicated.
This could be an individual
article or blog entry, a comment
or forum post, or any other
independent piece of content.
If a page contains several articles
(or even summaries of several
articles), then each individual
article would live inside its own
`<article>` element.
The `<article>` elements can
even be nested inside each
other. For example, a blog post
might live inside one `<article>`
element and each comment on
the article could live inside its
own child `<article>` element.*

**Asides `<aside>`**

*The <aside> element has two
purposes, depending on whether
it is inside an <article>
element or not.*

- When the <aside> element
is used inside an <article>
element, it should contain
information that is related to the
article but not essential to its
overall meaning. For example, a
pullquote or glossary might be
considered as an aside to the
article it relates to.

- When the <aside> element is
used outside of an <article>
element, it acts as a container
for content that is related to
the entire page. For example,
it might contain links to other
sections of the site, a list of
recent posts, a search box, or
recent tweets by the author.

**Sections `<section>`**

*The `<section>` element groups
related content together, and
typically each section would
have its own heading*

**Heading Groups `<hgroup>`**

*The purpose of the `<hgroup>`
element is to group together a
set of one or more `<h1>` through
`<h6>` elements so that they are
treated as one single heading*

**Figures `<figure>` `<figcaption>`**

*It can be used
to contain any content that is
referenced from the main flow of
an article (not just images).*

*Examples of usage include:*
* Images

* Videos
* Graphs
* Diagrams
* Code samples
* Text that supports the main
body of an article

***The `<figure>` element should
also contain a `<figcaption>`
element which provides a text
decription for the content of
the `<figure>` element. In
this example, you can see a
`<figure>` has been added inside
the `<article>` element.***

**Sectioning Elements `<div>`**

*the `<div>` element
will remain an important way to
group together related elements,
because you should not be using
these new elements that you
have just met for purposes other
than those explicitly stated.*

**Linking Around Block-Level Elements**

*HTML5 allows web page authors
to place an `<a>` element around
a block level element that
contains child elements. This
allows you to turn an entire block
into a link.*


**Helping Older Browsers Understand**

*Older browsers that do not
know the new HTML5 elements
will automatically treat them as
inline elements. Therefore, to
help older browsers, you should
include the line of CSS " `header, section, footer, aside, nav, article, figure
{
display: block;}` "which states which new
elements should be rendered as
block-level elements.*

*Also, IE9 was the first version of
Internet Explorer to allow CSS
rules to be associated with these
new HTML5 layout elements.
In order to style these elements
using earlier versions of IE, yo
need to use a simple JavaScript
known as the HTML5 shiv or
HTML5 shim.*

*You do not need to understand
JavaScript to use it. You can
just link to a copy that Google
hosts on its servers. It should
be placed inside a conditional
comment which checks if the
browser version is less than
(hence the lt) IE9.*

*Unfortunately, this workaround
does require that anyone using
IE8 or earlier versions of IE
has JavaScript enabled in their
browser. If they do not have
JavaScript enabled then they will
not be able to see the content of
these HTML5 elements.*

## Process and Design
*Every website should be designed for the
target audience—not just for yourself or the
site owner. It is therefore very important to
understand who your target audience is.*

**So you have get answers for these Questions**

*Target Audience: individuals*

* What is the age range of your target audience?
* Will your site appeal to more women or men? What is the mix?
* Which country do your visitors live in?
* Do they live in urban or rural areas?
* What is the average income of visitors?
* What level of education do they have?
* What is their marital or family status?
* What is their occupation?
* How many hours do they work per week?
* How often do they use the web?
* What kind of device do they use to acces web pages?

*Target Audience: Companies*

* What is the size of the company or relevant department?
* What is the position of people in the company who visit your site?
* Will visitors be using the site for themselves or for someone else?
* How large is the budget they control?


**Why People Visit YOUR Website?**

*Now that you know who your visitors are, you
need to consider why they are coming. While
some people will simply chance across your
website, most will visit for a specific reason.*

*To help determine why people
are coming to your website,
there are two basic categories of
questions you can ask:*

1: The first attempts to discover
the underlying motivations for
why visitors come to the site.

2: The second examines the
specific goals of the visitors.
These are the triggers making
them come to the site now.

**What Your Visitors are Trying to Achieve?**

*It is unlikely that you will be able to list every
reason why someone visits your site but you
are looking for key tasks and motivations. This
information can help guide your site designs*


**What Information Your Visitors Need?**

*You know who is coming to your site and why
they are coming, so now you need to work out
what information they need in order to achieve
their goals quickly and effectively,Here are some questions to help
you decide what information to
provide for visitors to your site*

* Will visitors be familiar with
your subject area / brand
or do you need to introduce
yourself?
* Will they be familiar with
the product / service /
information you are covering
or do they need background
information on it?
* What are the most important
features of what you are
offering?
* What is special about what
you offer that differentiates
you from other sites that offer
something similar?
* Once people have achieved
the goal that sent them to
your site, are there common
questions people ask about
this subject area?


**How Often People Will Visit Your Site?**

*Some sites benefit from being updated more
frequently than others. Some information (such
as news) may be constantly changing, while
other content remains relatively static.*

*A website about fashion trends
will need to change a lot more
frequently than one that is
promoting a service that people
do not buy regularly (such as
domestic plumbing or double
glazing).*

**Site Maps**

*it aims to create a diagram
of the pages that will be used
to structure the site.*

*To help you decide what
information should go on each
page, you can use a technique
called card sorting.*

*The groups of information are
then turned into the diagram
that is known as the site map*


**WireFrames**

*A wireframe is a simple sketch of the key
information that needs to go on each page of a
site. It shows the hierarchy of the information
and how much space it might require.*


**Visual hierarchy**

*Most web users do not read entire pages. Rather, they skim to find
information. You can use contrast to create a visual hierarchy that gets
across your key message and helps users find what they are looking for, To do that you shoud focus on:*
* Color
* size
* style

**grouping and Similarity**
*When making sense of a design, we tend to organize visual elements
into groups. Grouping related pieces of information together can make a
design easier to comprehend. Here are some ways this can be achieved*

- Proximity
- Closure
- Continuance
- White Space
- color
- Borders

## The ABC Of Programming

### What's Java Script ?
*A script is a series of instructions that a
computer can follow to achieve a goal.*

**WRITING A SCRIPT**

*To write a script, you need to first
state your goal and then list the
tasks that need to be completed in
order to achieve it.*

*Start with the big picture of what
you want to achieve, and break
that down into smaller steps.*

* DEFINE THE GOAL

 *First, you need to define the task you want to
achieve. You can think of this as a puzzle for the
computer to solve.* 

* DESIGN THE SCRIPT

 *To design a script you split the goal out into a series
of tasks that are going to be involved in solving this
puzzle. This can be represented using a flowchart.
You can then write down individual steps that the
computer needs to perform in order to complete
each individual task (and any information it needs to
perform the task), rather like writing a recipe that it
can follow.*
* CODE EACH STEP

 *Each of the steps needs to be written in a
programming language that the compu ter
understands. In our case, this is JavaScript.
As tempting as it can be to start coding straight
away, it pays to spend time designing your script
before you start writing it*

**How computer fit with world around it ?**
 * COMPUTERS CREATE MODELS OF THE WORLD USING DATA
 * computer use objects to represent physical things
 * each object has proberties that Provide us with Info about object 
 , method that perform tasks using the proberties of objects,events which is triggered when the user intract with the copmuter .


 *browsers use HTML to create a model for the web page and each elements creates its owen node "which a kinde of the object"*

*to make web pages ineractive you should write code the uses the browser's model for web page* 


## how do write java script file for web pages?

*there are three layers form the basis of a popular
approach to building web pages called
progressive enhancement.*

* CONTENT LAYER 

 *This is where the content of
the page lives. The HTML gives
the page structure and adds
semantics. *

* PRESENTATION LAYER 

 *The CSS enhances the HTML
page with rules that state how
the HTML content is presented
(backgrounds, borders, box
dimensions, colors, fonts, etc*

* BEHAVIOR LAYER 

 *This is where we can change
how the page behaves, adding
interactivity. We will aim to keep
as much of our JavaScript as
possible in separate files. *

*JavaScript is written in plain text, just like HTML and CSS, so you do not
need any new tools to write a script*

*When you want to use JavaScript with a web page, you use the HTML
`<script>` element to tell the browser it is coming across a script.
Its src attribute tells people where the JavaScript file is stored.*

*You may see JavaScript in the HTML between
opening `<script>` and closing `</script>` tags
(but it is better to put scripts in their own files)*


         ****         ***           ***