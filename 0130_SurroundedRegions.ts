/**
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
 *
 * Connect: A cell is connected to adjacent cells horizontally or vertically.
 * Region: To form a region connect every 'O' cell.
 * Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
 * To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.
 *
 *
 *
 * Example 1:
 *
 * Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 *
 * Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 *
 * Explanation:
 *
 *
 * In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.
 *
 * Example 2:
 *
 * Input: board = [["X"]]
 *
 * Output: [["X"]]
 */

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    if (m === 0 || n === 0) return;

    const queue: [number, number][] = [];

    // 1️⃣ Собираем все 'O' на границе
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') queue.push([i, 0]);
        if (board[i][n - 1] === 'O') queue.push([i, n - 1]);
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') queue.push([0, j]);
        if (board[m - 1][j] === 'O') queue.push([m - 1, j]);
    }

    // направления: вверх, вниз, влево, вправо
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    // 2️⃣ BFS — помечаем безопасные 'O'
    while (queue.length) {
        const [x, y] = queue.shift()!;

        if (
            x < 0 ||
            y < 0 ||
            x >= m ||
            y >= n ||
            board[x][y] !== 'O'
        ) {
            continue;
        }

        board[x][y] = 'S'; // safe

        for (const [dx, dy] of dirs) {
            queue.push([x + dx, y + dy]);
        }
    }

    // 3️⃣ Финальный проход
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X'; // окружённые
            if (board[i][j] === 'S') board[i][j] = 'O'; // вернуть безопасные
        }
    }
};
