/*
* There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.


Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
   Hide Hint #1
This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
   Hide Hint #2
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
   Hide Hint #3
Topological sort could also be done via BFS.
* */

/*
* class Solution {
    char[] color;
    List<Integer>[] adjlist;

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // declare adjacency list
        adjlist = new ArrayList[numCourses];
        for (int i = 0; i < numCourses; i++)
            adjlist[i] = new ArrayList<>();

        // initialize adjacency list
        for (int[] edge : prerequisites) {
            int u = edge[0];
            int v = edge[1];
            adjlist[u].add(v);
        }

        // initialize colors to white
        color = new char[numCourses];
        for (int i = 0; i < color.length; i++) color[i] = 'w';

        // modified DFS
        // returns true if graph is acyclic, false if graph contains cycle
        for (int u = 0; u < numCourses; u++)
            if (color[u] == 'w' && visit(u))
                return false;
        return true;
    }

    // modified DFS helper function (visit)
    // returns true if a cycle is found, false otherwise
    private boolean visit(int u) {
        color[u] = 'g';
        for (int v : adjlist[u])
            if (color[v] == 'w' && visit(v) || color[v] == 'g')
                return true;
        color[u] = 'b';
        return false;
    }
}
* */


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // declare adjacency list
    let adjlist = [];
    for (let i = 0; i < numCourses; i++)
        adjlist[i] = [];

    // initialize adjacency list
    for (let edge of prerequisites) {
        let u = edge[0];
        let v = edge[1];
        adjlist[u].push(v);
    }

    // initialize colors to white
    let color = Array.from({length: numCourses});
    for (let i = 0; i < color.length; i++) color[i] = 'w';

    // modified DFS
    // returns true if graph is acyclic, false if graph contains cycle
    for (let u = 0; u < numCourses; u++)
        if (color[u] == 'w' && visit(u))
            return false;
    return true;


    // modified DFS helper function (visit)
    // returns true if a cycle is found, false otherwise
    function visit(u) {
        color[u] = 'g';
        for (let v of adjlist[u])
            if (color[v] === 'w' && visit(v) || color[v] === 'g')
                return true;
        color[u] = 'b';
        return false;
    }
};

// console.log(canFinish(2,[[1,0]]))
console.log(canFinish(2,[[1,0],[0,1]]))
