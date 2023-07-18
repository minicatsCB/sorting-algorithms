import { swap } from "./common";

// It starts from the next to last element of the array and swaps greater numbers to the right until it finds a number greater than itself
export function sortAsc(arr: Array<number>): Array<number> {
    for (let i = 1; i <= arr.length - 1; i++) {
        let j = i;
        while((j > 0) && (arr[j] < arr[j - 1])) {  // j: am I less than my left mate? If yes, take me as close as possible to the beginning of the array until I find a mate less than me. If so, leave me there and continue with te mate that was to my right originally
            arr = swap(arr, j, j - 1);
            j--;
        }
    }

    return arr;
}

// It starts from second element of the array and swaps smaller numbers to the left until it finds a number less than itself
export function sortDesc(arr: Array<number>): Array<number> {
    for (let i = 1; i <= arr.length - 1; i++) {
        let j = i;
        while((j > 0) && (arr[j] > arr[j-1])) { // j: am I greater than my left mate? If yes, take me as close as possible to the beginning of the array until I find a mate greater than me. If so, leave me there and continue with te mate that was to my right originally
            arr = swap(arr, j, j - 1);
            j--;
        }
    }

    return arr;
}

// See: https://www.youtube.com/watch?v=8mJ-OhcfpYg