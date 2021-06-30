# JavaScript

*JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.*

*This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about API specifics to Web pages, please see Web APIs and DOM.*

*The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). The JavaScript documentation throughout MDN is based on the latest draft versions of ECMA-262 and ECMA-402. And in cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features.*

*Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantic, and use.*

# Input Output in plain JavaScript:
*In the JavaScript code we have a function called say_hi. It used the getElementById we have already seen to locate the DOM element representing the input element with the id first_name. The object returned has a method value that will return the text the user has typed in that field.*

*We use this technique to retrieve the content of both input fields and assign their content to two variables: fname and lname.*

*Then, using these variable we create an HTML snippet and assign it to a new variable called html.*

*Then we set the innerHTML attribute as earlier to show the HTML we generated.*


*Creating HTML is cumbersome
Even in such a simple HTML we wanted to create we had to use + several time and the code is quite unreadable. Imagine what would happen if we wanted to build a more complex application where we might want to build a list of items, or even a table. Building the HTML on the fly and the inserting in the DOM would be quite nasty.*

*In the back-end systems written in Perl, Python or Ruby, people have encountered the same problem and the solution was the creation of various templating engines. Basically a template would be an HTML snippet with some place holders and then a function call that gets the HTML snippet (the template) as a parameter, and gets several key-value pairs. The function then returns a new HTML snippet in which the place holders were replaced by the value of the appropriate key.*
