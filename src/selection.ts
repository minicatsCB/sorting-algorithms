import { swap } from "./common";

export function sortAsc(arr: Array<number>): Array<number> {
    for(let i = 0; i < arr.length; i++ ) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        arr = swap(arr, i, minIdx);
    }

    return arr;
}

export function sortDesc(arr: Array<number>): Array<number> {
    for(let i = 0; i < arr.length; i++ ) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[minIdx]) {
                minIdx = j;
            }
        }
        arr = swap(arr, i, minIdx);
    }

    return arr;
}