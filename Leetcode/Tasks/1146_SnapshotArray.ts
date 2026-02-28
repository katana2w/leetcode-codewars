/**
 * https://leetcode.com/problems/snapshot-array/editorial/?envType=study-plan-v2&envId=binary-search
 *
 * Implement a SnapshotArray that supports the following interface:
 *
 * SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
 * void set(index, val) sets the element at the given index to be equal to val.
 * int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
 * int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
 *
 *
 * Example 1:
 *
 * Input: ["SnapshotArray","set","snap","set","get"]
 * [[3],[0,5],[],[0,6],[0,0]]
 * Output: [null,null,0,null,5]
 * Explanation:
 * SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
 * snapshotArr.set(0,5);  // Set array[0] = 5
 * snapshotArr.snap();  // Take a snapshot, return snap_id = 0
 * snapshotArr.set(0,6);
 * snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
 */

class SnapshotArray {
    private curSnap = 0;
    private hist: Array<Array<[number, number]>>;

    constructor(length: number) {
        this.hist = Array.from({ length }, () => []);
    }

    set(index: number, val: number): void {
        const arr = this.hist[index];
        const n = arr.length;
        if (n > 0 && arr[n - 1][0] === this.curSnap) {
            arr[n - 1][1] = val;
        } else {
            arr.push([this.curSnap, val]);
        }
    }

    snap(): number {
        return this.curSnap++;
    }

    get(index: number, snap_id: number): number {
        const arr = this.hist[index];
        if (arr.length === 0) return 0;

        let l = 0, r = arr.length - 1;
        let ans = -1;

        while (l <= r) {
            const mid = (l + r) >> 1;
            if (arr[mid][0] <= snap_id) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return ans === -1 ? 0 : arr[ans][1];
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
