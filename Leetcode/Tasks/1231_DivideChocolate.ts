/**
 * https://leetcode.com/problems/divide-chocolate/description/?envType=study-plan-v2&envId=binary-search
 *
 * You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.
 *
 * You want to share the chocolate with your k friends so you start cutting the chocolate bar into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.
 *
 * Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.
 *
 * Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.
 *
 *
 *
 * Example 1:
 *
 * Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5
 * Output: 6
 * Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
 * Example 2:
 *
 * Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8
 * Output: 1
 * Explanation: There is only one way to cut the bar into 9 pieces.
 * Example 3:
 *
 * Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2
 * Output: 5
 * Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]
 *
 *
 * Constraints:
 *
 * 0 <= k < sweetness.length <= 104
 * 1 <= sweetness[i] <= 105
 */

function maximizeSweetness(sweetness: number[], k: number): number {
    let left = 1;
    let right = Math.floor(
        sweetness.reduce((a, b) => a + b, 0) / (k + 1)
    );

    const canDivide = (minSweet: number): boolean => {
        let pieces = 0;
        let sum = 0;

        for (const s of sweetness) {
            sum += s;

            if (sum >= minSweet) {
                pieces++;
                sum = 0;
            }
        }

        return pieces >= k + 1;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canDivide(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}