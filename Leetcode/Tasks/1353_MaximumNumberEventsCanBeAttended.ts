/*
You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startDayi <= d <= endDayi. You can only attend one event at any time d.

Return the maximum number of events you can attend.



Example 1:


Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.
Example 2:

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4
 */

function maxEvents(events: number[][]): number {
    // Sort by start day
    events.sort((a, b) => a[0] - b[0]);

    // Min-heap of end days
    const heap: number[] = [];

    const heapPush = (x: number) => {
        heap.push(x);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const heapPop = (): number => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                const l = i * 2 + 1;
                const r = l + 1;
                let s = i;

                if (l < heap.length && heap[l] < heap[s]) s = l;
                if (r < heap.length && heap[r] < heap[s]) s = r;
                if (s === i) break;

                [heap[i], heap[s]] = [heap[s], heap[i]];
                i = s;
            }
        }
        return top;
    };

    const heapPeek = () => heap[0];

    let i = 0;
    let attended = 0;
    const n = events.length;

    // We don't want to iterate to huge maxDay by default.
    // Instead: day jumps forward when heap is empty.
    let day = 0;

    while (i < n || heap.length > 0) {
        if (heap.length === 0) {
            // jump day to next start
            day = events[i][0];
        }

        // add all events that start on/before "day"
        while (i < n && events[i][0] <= day) {
            heapPush(events[i][1]);
            i++;
        }

        // remove expired events
        while (heap.length > 0 && heapPeek() < day) {
            heapPop();
        }

        // attend one event today
        if (heap.length > 0) {
            heapPop();
            attended++;
            day++;
        }
    }

    return attended;
}
