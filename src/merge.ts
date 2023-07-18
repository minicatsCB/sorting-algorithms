function merge(firstBranch: Array<number>, secondBranch: Array<number>): Array<number> {
    console.log(`merging... [${firstBranch.toString()}] + [${secondBranch.toString()}]`);
    const totalLength: number = firstBranch.length + secondBranch.length;
    const mergeResult: Array<number> = Array(totalLength);
    let i: number = 0;
    let f: number = i;
    let s: number = i;

    for(; (f < firstBranch.length) && (s < secondBranch.length); i++ ){
        const fElement: number = firstBranch[f];
        const sElement: number = secondBranch[s];
        if (fElement < sElement) {
            mergeResult[i] = fElement;
            f++;
        } else {
            mergeResult[i] = sElement;
            s++;
        }
    }

    for (; f < firstBranch.length; i++, f++) {
        mergeResult[i] = firstBranch[f];
    }

    for (; s < secondBranch.length; i++, s++) {
        mergeResult[i] = secondBranch[s];
    }

    return mergeResult;
}

export function sortAsc(arr: Array<number>): Array<number> {
    if (arr.length === 1) {
        return arr;
    }
    const splitIdx: number = Math.ceil(arr.length / 2); // With Math.ceil(), if the number of elements is odd, the first half will contain 1 element more than the second half
    const firstHalf: Array<number> = arr.slice(0, splitIdx);
    const secondHalf: Array<number> = arr.slice(splitIdx);

    const firstBranch: Array<number> = sortAsc(firstHalf); // Enter the rabbit hole. You will exit at some point when you find a trivial case. As soon as you do, continue with the execution from where you left it
    const secondBranch: Array<number> = sortAsc(secondHalf);  // Enter another rabbit hole

    const sortedResult = merge(firstBranch, secondBranch); // No more rabit holes.
    return sortedResult;
}