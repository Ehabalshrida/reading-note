# Graphs

![](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/assets/CompleteGraph.PNG)

* A graph is a non-linear data structure that can be looked at as a collection of `vertices` (or `nodes`) potentially connected by line segments named `edges`.

## common terminology used when working with Graphs:

1. `Vertex` - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.

2. `Edge` - An edge is a connection between two nodes.

3. `Neighbor` - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.

4. `Degree` - The degree of a vertex is the number of edges connected to that vertex.

## Directed vs Undirected

![](https://sites.google.com/a/cs.christuniversity.in/discrete-mathematics-lectures/_/rsrc/1409480658489/graphs/directed-and-undirected-graph/dir.png)


* #### Undirected Graphs

  An `Undirected Graph` is a graph where each edge is undirected or bi-directional. This means that the `undirected graph` does not move in any direction.

* #### Directed Graphs (Digraph)

  A Directed Graph also called a `Digraph` is a graph where every edge is directed.

## Complete vs Connected vs Disconnected:

![](https://i0.wp.com/algorithms.tutorialhorizon.com/files/2019/10/Connected-Undirected-Graph-Example.png?resize=967%2C397&ssl=1)

- There are many different types of graphs. This depends on how connected the graphs are to other node/vertices.

- The three different types are completed, connected, and disconnected.

* ### Complete Graphs

  A complete graph is when all nodes are connected to all other nodes.


* ### Connected

  A connected graph is graph that has all of vertices/nodes have at least one edge.


* ### Disconnected

A disconnected graph is a graph where some vertices may not have edges.

- It is complelty possible to have standalone nodes or edges (also known as islands) in a graph data structure.


## Acyclic vs Cyclic:

In addition to undirected and directed graphs, we also have acyclic and cyclic graphs.




## Traversals

![](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/assets/BreadthFirst.PNG)


#### Breadth First

In a breadth first traversal, you are starting at a specific vertex/node. This node must be specified when calling the `BreadthFirst()` method. The breadth-first traversal of a graph is like that of a tree, with the exception that graphs can have cycles. Traversing a graph that has cycles will result in an infinite loop….this is bad. To prevent such behavior, we need to have some way to keep track of whether a vertex has been “visited” before. Upon each visit, we’ll add the previously-unvisited vertex to a `visited` set, so we know not to visit it again as traversal continues.

##### Algorithm:

1. `Enqueue` the declared start node into the Queue.

2. Create a loop that will run while the node still has nodes present.

3. `Dequeue` the first node from the queue

4. if the Dequeue‘d node has unvisited child nodes, add the unvisited children to `visited` set and insert them into the queue.

#### Depth First

In a depth first traversal, we approach it a bit different than the way we do when working with a depth first traversal of a tree. Similar to how the breadth-first uses a queue, we are going to use a Stack for our depth-first traversal.


##### Algorithm:

1. `Push` the root node into the stack

2. Start a while loop while the stack is not empty

3. `Peek` at the top node in the stack

4. If the top node has unvisited children, mark the top node as visited, and then `Push` any unvisited children back into the stack.

5. If the top node does not have any unvisited children, `Pop` that node off the stack

6. repeat until the stack is empty.

### Real World Uses of Graphs

- Graphs are extremely popular when it comes to it’s uses. Here are just a few examples of graphs in use:

* GPS and Mapping
* Driving Directions
* Social Networks
* Airline Traffic
* Netflix uses graphs for suggestions of products