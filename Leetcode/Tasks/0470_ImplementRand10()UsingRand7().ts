/**
 * https://leetcode.com/problems/implement-rand10-using-rand7/description/
 *
 * Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.
 *
 * Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().
 *
 *
 *
 * Example 1:
 *
 * Input: n = 1
 * Output: [2]
 * Example 2:
 *
 * Input: n = 2
 * Output: [2,8]
 * Example 3:
 *
 * Input: n = 3
 * Output: [3,8,10]
 *
 *
 * Constraints:
 *
 * 1 <= n <= 105
 *
 *
 * Follow up:
 *
 * What is the expected value for the number of calls to rand7() function?
 * Could you minimize the number of calls to rand7()?
 */

function rand10(): number {
    const hash = () => {
        let h = 0;

        for (let i = 1; i < 4; i++) {
            h = (227 * h + rand7()) % 10;
        }

        return h
    }

    const h = hash()
    const minVal = 1;
    const maxVal = 10;

    return minVal + (h % (maxVal - minVal + 1));
};

function rand10(): number {
    while (true) {
        // 0..48
        let idx = (rand7() - 1) * 7 + (rand7() - 1);
        if (idx < 40) return (idx % 10) + 1;

        // 0..8
        idx -= 40;
        // 0..62
        idx = idx * 7 + (rand7() - 1);
        if (idx < 60) return (idx % 10) + 1;

        // 0..2
        idx -= 60;
        // 0..20
        idx = idx * 7 + (rand7() - 1);
        if (idx < 20) return (idx % 10) + 1;

        // иначе (idx == 20) — 1 значение, просто перезапускаем цикл
    }
};
