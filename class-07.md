# Readings : Object-Oriented Programming, HTML Tables


## Tables 

### Basic Table Structure

`<table>`

*The `<table>` element is used
to create a table. The contents
of the table are written out row
by row.*


`<tr>`

*You indicate the start of each
row using the opening `<tr>` tag.
(The tr stands for table row.)
It is followed by one or more
`<td>` elements (one for each cell
in that row).
At the end of the row you use a
closing `</tr>` tag.*

`<td>`

*Each cell of a table is
represented using a <td>
element. (The td stands for
table data.)*

*At the end of each cell you use a
closing `</td>` tag.*



#### Table Headings 

`<th>`

*The `<th>` element is used just
like the `<td>` element but its
purpose is to represent the
heading for either a column or
a row. (The th stands for table
heading.)*


### Spanning ColumnS 

*Sometimes you may need the
entries in a table to stretch
across more than one column.
The colspan attribute can be
used on a `<th>` or `<td>` element
and indicates how many columns
that cell should run across.*



### Spanning Rows


*You may also need entries in
a table to stretch down across
more than one row.
The rowspan attribute can be
used on a `<th>` or `<td>` element
to indicate how many rows a cell
should span down the table.*



### Long Tables 

*There are three elements that
help distinguish between the
main content of the table and
the first and last rows (which can
contain different content).
These elements help people
who use screen readers and also
allow you to style these sections
in a different manner than the
rest of the table (as you will see
when you learn about CSS).*



`<thead>`

*The headings of the table should
sit inside the `<thead>` element.*

`<tbody>`

*The body should sit inside the
`<tbody>` element.*


`<tfoot>`

*The footer belongs inside the
`<tfoot>` element*


### Old Code: Width & Spacing

*There are some outdated
attributes which you should not
use on new websites. You may,
however, come across some
of them when looking at older
code, so I will mention them
here. All of these attributes have
been replaced by the use of CSS.*


### Old Code: Border & Background


*The border attribute was used
on both the `<table>` and `<td>`
elements to indicate the width of
the border in pixels.*

