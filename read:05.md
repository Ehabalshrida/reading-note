# Operators
*JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.*

- Assignment operators
- Comparison operators
-Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operators

**JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator**

## Assignment operators
*An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = y assigns the value of y to x*

## Comparison operators
*A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality.*

## Arithmetic operators
*An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity)*

## Bitwise operators
* A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.*

## Logical operators
*Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value*
## String operators
*In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings*
## Conditional (ternary) operator
*The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition*
##Comma operator
*The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.*

## Unary operators
*A unary operation is an operation with only one operand.*
## Relational operators
*A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.*


# Loops and iteration
*Loops offer a quick and easy way to do something repeatedly,You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop*

*There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)*

*The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.*

**The statements for loops provided in JavaScript are:**

*  for statement
* do...while statement
* while statement
* labeled statement
* break statement
* continue statement
* for...in statement
* for...of statement

## for statement

*A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.*

***A for statement looks as follows:***

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
Copy to Clipboard
When a for loop executes, the following occurs:

*The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.*
*The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. If the value of condition is false, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
If present, the update expression incrementExpression is executed.*
*Control returns to Step 2.*

## while statement
*A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:*

*while (condition)*

  *statement*

*If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.*

*The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.*

*To execute multiple statements, use a block statement ({ ... }) to group those statements.*