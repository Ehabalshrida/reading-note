# Readings: Linked Lists

## Big O(oh) notation

*is used to describe the efficiency of an algorithm or function. This efficiency is evaluated based on 2 factors:*

- Running Time (also known as time efficiency / complexity)
The amount of time a function needs to complete.

- Memory Space (also known as space efficiency / complexity)
The amount of memory resources a function uses to store data and instructions.

## Big O’s role in algorithm efficiency
*is to describe the Worst Case of efficiency an algorithm can have in performing it’s job. It specifically looks at the factors mentioned above, which we often refer to as Space and Time.*

In order to analyze these limiting factors, we should consider 4 Key
Areas for analysis:*

- Input Size

- Units of Measurement
- Orders of Growth
- Best Case, Worst Case, and Average Case


**Input Size**

*Input Size refers to the size of the parameter values that are read by the algorithm. This does not simply refer to the number of parameters an algorithm reads, but takes into account the size of each parameter value as well.*

**Units of Measurement**

*To evaluate a function for Time and Space complexity, we need a way to measure each of these factors.*


**In order to quantify the Running Time in our analysis, we will consider Three Measurements of time:**

- The time in milliseconds from the start of a function execution until it ends

- The number of operations that are executed
- The number of “Basic Operations” that are executed.


**In order to quantify Memory Space, we can consider Four Sources of Memory Usage during function run-time:**

- The amount of space needed to hold the code for the algorithm

- The amount of space needed to hold the input data
- The amount of space needed for the output data.
- The amount of space needed to hold working space during the calculation



## Orders of Growth

*We can describe overall efficiency by using the input size n and measuring the overall Units of Space and Time required for the given input size n. As the value of n grows, the Order of Growth represents the increase in Running Time or Memory Space.*



## Worst Case, Best Case, Average Case


*Even though Big O describes the Worst Case for algorithm efficiency, we can still think about Best and Average cases. Each of these cases could be analyzed as we consider the overall question: As inputs n fluctuate in size and order, how does this affect our orders of Growth?*


- Worst Case: The efficiency for the worst possible input of size `n`

- Best Case: The efficiency for the best possible input of size `n`

- Average Case: The efficiency for a “typical” or “random” input of size `n`.


## Asymptotic Notations


*For each of the cases mentioned above, academics use the following notations in the following table to describe the differing complexities of an algorithm. Also (as mentioned earlier), we are focused more on Big O as an industry standard, but it’s helpful to be aware that there are other ways we can analyze algorithmic efficiencies.*


- **Big O(oh):** This notation describes the Worst Case for an algorithm. The Order of Growth used represents the upper bounds of Time and Space.

- **Big Omega:**This notation describes the Best Case for a given algorithm. The Order of Growth used represents the lower bounds of Time and Space.
- **Big Theta:** This notation describes the Average Case. The Order of Growth used represents the tight bound of Time and Space.