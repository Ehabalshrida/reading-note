# Readings: Readings: Data Modeling


## Name 3 advantages to Test Driven Development

- The software design becomes modular

*When using the TDD approach, developers narrow their focus to a single feature at a time, not moving to the next one until the associated unit test is passed. Written in such iterations, the code quality is naturally enhanced, making it easier to discover bugs and reuse the code, as well.  When the code eventually becomes modular, and thus, unit-testable, it contributes to better solution architecture. This corresponds to modular software design principles and teaches developers to keep the code clean.*


- The code is easier to maintain

*Arranged code is much easier to deal with when it comes to modifications. When the TDD approach is applied, developers naturally produce a cleaner, more readable, and manageable code. Focusing on smaller and more digestible code chunks requires less effort from developers and makes it easier to adhere to test requirements. Clean code especially comes in handy when the tasks are transferred between different members of the product team.*


- Code refactoring goes more smoothly


 *One of the greatest advantages of test-driven development is making the code much more manageable. Furthermore, TDD helps to significantly cut the total hours spent on testing and maintenance activities. Some studies show that application maintenance requires twice as much as time without TDD, compared to software development lifecycles where TDD is used.*


- Project costs descrease; ROI goes up

*With the implementation of the TDD approach, the general cost of product development typically decreases, as maintenance and bug fixes take less time and effort. The result is a lower cost for building a custom marketplace, SaaS products, and other custom solutions.*



## In what case would you need to use beforeEach() or afterEach() in a test suite?

*when we want to connect the servere to database to test so we need to connect it *

## What is one downside of Test Driven Development


- Big time investment.

*For the simple case you lose about 20% of the actual implementation, but for complicated cases you lose much more.*
- Additional Complexity. 

*For complex cases your test cases are harder to calculate, I'd suggest in cases like that to try and use automatic reference code that will run in parallel in the debug version / test run, instead of the unit test of simplest cases.*
- Design Impacts. 

*Sometimes the design is not clear at the start and evolves as you go along - this will force you to redo your test which will generate a big time lose. I would suggest postponing unit tests in this case until you have some grasp of the design in mind.*
- Continuous Tweaking.

*For data structures and black box algorithms unit tests would be perfect, but for algorithms that tend to be changed, tweaked or fine tuned, this can cause a big time investment that one might claim is not justified. So use it when you think it actually fits the system and don't force the design to fit to TDD*


## What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?

*A ES6 class defines a type that can be instantiated while prototype classes is an object instance. The best way to think of this is that the ES6 class will be the same same as its prototype, not a copy.*


## Why REST?

*
Representational state transfer (REST) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale distributed hypermedia system, such as the Web, should behave*

 *
One of the key advantages of REST APIs is that they provide a great deal of flexibility. Data is not tied to resources or methods, so REST can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia*


## functional programming

*Functional programming means using functions to the best effect for creating clean and maintainable software.*

## object-oriented programming (OOP)

*Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.*


## class

*encapsulates data and functions that manipulate data. Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance. In other words, ES6 classes are just special functions*

## TDD

*is a programming practice that instructs developers to write new code only if an automated test has failed*


## JEST

*is a delightful JavaScript Testing Framework with a focus on simplicity*


## Continuous Integration

*is the practice of automating the integration of code changes from multiple contributors into a single software project. It’s a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository where builds and tests then run. Automated tools are used to assert the new code’s correctness before integration.*

## REST


*Representational state transfer (REST) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale distributed hypermedia system, such as the Web, should behave*


## Data model

*an abstract model that organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities*


