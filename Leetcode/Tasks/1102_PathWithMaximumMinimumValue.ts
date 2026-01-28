/**
 * Given an m x n integer matrix grid, return the maximum score of a path starting at (0, 0) and ending at (m - 1, n - 1) moving in the 4 cardinal directions.
 *
 * The score of a path is the minimum value in that path.
 *
 * For example, the score of the path 8 → 4 → 5 → 9 is 4.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[5,4,5],[1,2,6],[7,4,6]]
 * Output: 4
 * Explanation: The path with the maximum score is highlighted in yellow.
 * Example 2:
 *
 *
 * Input: grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
 * Output: 2
 * Example 3:
 *
 *
 * Input: grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
 * Output: 3
 *
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * 0 <= grid[i][j] <= 109
 */
function maximumMinimumPath(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const best: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
    best[0][0] = grid[0][0];

    type Node = [score: number, r: number, c: number];

    class MaxHeap {
        private a: Node[] = [];
        size() { return this.a.length; }
        push(x: Node) {
            const a = this.a;
            a.push(x);
            let i = a.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (a[p][0] >= a[i][0]) break;
                [a[p], a[i]] = [a[i], a[p]];
                i = p;
            }
        }
        pop(): Node | undefined {
            const a = this.a;
            if (a.length === 0) return undefined;
            const top = a[0];
            const last = a.pop()!;
            if (a.length > 0) {
                a[0] = last;
                let i = 0;
                while (true) {
                    let bestIdx = i;
                    const l = i * 2 + 1, r = l + 1;
                    if (l < a.length && a[l][0] > a[bestIdx][0]) bestIdx = l;
                    if (r < a.length && a[r][0] > a[bestIdx][0]) bestIdx = r;
                    if (bestIdx === i) break;
                    [a[i], a[bestIdx]] = [a[bestIdx], a[i]];
                    i = bestIdx;
                }
            }
            return top;
        }
    }

    const pq = new MaxHeap();
    pq.push([best[0][0], 0, 0]);

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (pq.size() > 0) {
        const cur = pq.pop()!;
        const score = cur[0], r = cur[1], c = cur[2];

        if (score !== best[r][c]) continue;

        if (r === m - 1 && c === n - 1) return score;

        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

            const nscore = Math.min(score, grid[nr][nc]);
            if (nscore > best[nr][nc]) {
                best[nr][nc] = nscore;
                pq.push([nscore, nr, nc]);
            }
        }
    }

    return -1;
};
