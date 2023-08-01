import { swap } from "./common";

// Starts from the beginning of the array, checks each pair of numbers and swap them if the first is less than the second.
function sortAsc(arr: Array<number>): Array<number> {
    for(let lap = 0; lap < arr.length - 1; lap++) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                arr = swap(arr, i, i + 1);
            }
        }
    }

    return arr;
}

function sortDesc(arr: Array<number>): Array<number> {
    for(let lap = 0; lap < arr.length - 1; lap++) {
        for(let i = arr.length - 1; i > 0; i--) {
            if(arr[i] > arr[i - 1]) {
                arr = swap(arr, i, i - 1);
            }
        }
    }

    return arr;
}