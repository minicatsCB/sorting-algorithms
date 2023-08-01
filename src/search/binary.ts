// IMPORTANT: is mandatory that the array is sorted so the algorithm works
export function search(arr: Array<number>, target: number): number {
    let low: number = 0;
    let high: number = arr.length - 1;
    
    while(low < high) {
        let middle: number = Math.floor(low + (high - low) / 2);
        let value = arr[middle];

        if (target > value ) {
            low = middle + 1;
        } else if (target < value) {
            high = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

export function searchRecursive(arr: Array<number>, target: number, low: number = 0, high: number = arr.length - 1): number {
    let middle: number = Math.floor(low + (high - low) / 2);
    let value = arr[middle];

    if(value === target) {
        return middle;
    }
    if(low >= high) {
        return -1
    }

    if(target < value) {
        return searchRecursive(arr, target, low, middle - 1);
    } else {
        return searchRecursive(arr, target, middle + 1, high);
    }
}