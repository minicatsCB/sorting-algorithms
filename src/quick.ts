// Version that mutates the array passed as a parameter
function swap(arr: Array<number>, aIdx: number, bIdx: number): void {
    const temp = arr[aIdx]
    arr[aIdx] = arr[bIdx];
    arr[bIdx] = temp;
}

function getPartitionIdx(arr: Array<number>, start: number, end: number): number {
    let pivotValue: number = arr[end];  // Assume pivot is always at the end
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (arr[j] <= pivotValue) {
            i++;
            swap(arr, i, j);
        }
    }

    i++;
    swap(arr, i, end);
    return i;
}

export function sortAsc(arr: Array<number>, start: number, end: number): Array<number> {
    if (end <= start) {
        return arr;
    }

    let splitIdx: number = getPartitionIdx(arr, start, end);
    sortAsc(arr, start, splitIdx - 1);
    sortAsc(arr, splitIdx + 1, end);

    return arr;
}