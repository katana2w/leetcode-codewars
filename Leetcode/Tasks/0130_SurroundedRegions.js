/*
* Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
* */


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board === null || board.length === 0) return;
    let rows = board.length, cols = board[0].length, visited = JSON.parse(JSON.stringify(board));

    for(let j = 0; j < cols; j++) {
        if(board[0][j].localeCompare('O') === 0) {
            dfs(board, 0, j, visited, false);
        }
        if(board[rows - 1][j].localeCompare('O') === 0) {
            dfs(board, rows - 1, j, visited, false);
        }
    }

    for(let j = 0; j < rows; j++) {
        if(board[j][0].localeCompare('O') === 0) {
            dfs(board, j, 0, visited, false);
        }
        if(board[j][cols - 1].localeCompare('O') === 0) {
            dfs(board, j, cols - 1, visited, false);
        }
    }

    for(let i = 1; i < rows - 1; i++) {
        for(let j = 1; j < cols - 1; j++) {
            if(board[i][j].localeCompare('O') === 0 && visited[i][j] !== 1) {
                dfs(board, i, j, visited, true);
            }
        }
    }

    function dfs(board, row, col, visited, flip) {
        if(row < 0 || col < 0 || row > board.length - 1 || col > board[0].length - 1) return;
        if(visited[row][col] === 1) return;
        if(board[row][col] == 'X') return;
        if(flip) {
            board[row][col] = 'X'
        }
        visited[row][col] = 1;
        dfs(board, row + 1, col, visited, flip);
        dfs(board, row - 1, col, visited, flip);
        dfs(board, row, col + 1, visited, flip);
        dfs(board, row, col - 1, visited, flip);
    }

};

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
