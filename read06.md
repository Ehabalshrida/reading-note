# What is CSS?
*CSS (Cascading Style Sheets) allows you to create great-looking web pages*

## What is CSS for?
*CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.*

*A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.*

*Presenting a document to a user means converting it into a form usable by your audience. Browsers, like Firefox, Chrome, or Edge , are designed to present documents visually, for example, on a computer screen, projector or printer.*

*CSS can be used for very basic document text styling — for example changing the color and size of headings and links. It can be used to create layout — for example turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation*

## CSS syntax
*CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web page
The rule opens with a selector . This selects the HTML element that we are going to style.
We then have a set of curly braces { }. Inside those will be one or more declarations, which take the form of property and value pairs. Each pair specifies a property of the element(s) we are selecting, then a value that we'd like to give the property.*
*Before the colon, we have the property, and after the colon, the value. CSS properties have different allowable values, depending on which property is being specified.*

## CSS Modules
 *As there are so many things that you could style using CSS, the language is broken down into modules,You'll see reference to these modules as you explore MDN and many of the documentation pages are organized around a particular module*

## CSS color Property
*The color property specifies the color of text.*

**CSS Syntax**

{color: color|initial|inherit;}

	
color:  Specifies the text color. 

initial:	Sets this property to its default value. 

inherit:	Inherits this property from its parent element. 

# CSS reference

**Style rule syntax**

style-rule ::=

    selectors-list {
      properties-list
    }


... where :

selectors-list ::=

    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=

    [property : value] [; properties-list]



## CSS Tools: Reset CSS
*The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on. The general reasoning behind this was discussed in a May 2007 post, if you're interested. Reset styles quite often appear in CSS frameworks, and the original "meyerweb reset" found its way into Blueprint, among others.

The reset styles given here are intentionally very generic. There isn't any default color or background set for the body element, for example. I don't particularly recommend that you just use this in its unaltered state in your own projects. It should be tweaked, edited, extended, and otherwise tuned to match your specific reset baseline. Fill in your preferred colors for the page, links, and so on.

In other words, this is a starting point, not a self-contained black box of no-touchiness*
