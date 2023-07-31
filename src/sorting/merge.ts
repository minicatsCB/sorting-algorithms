function mergeAsc(firstBranch: Array<number>, secondBranch: Array<number>): Array<number> {
    const fLength: number = firstBranch.length;
    const sLength: number = secondBranch.length;
    const totalLength: number = fLength + sLength;
    const mergeResult: Array<number> = Array(totalLength);

    let i: number = 0;
    let fIdx: number = i;
    let sIdx: number = i;

    while((fIdx < fLength) && (sIdx < sLength)) {
        const fElement: number = firstBranch[fIdx];
        const sElement: number = secondBranch[sIdx];
        if (fElement < sElement) { // The DESC version only differs in that it uses > instead of <
            mergeResult[i] = fElement;
            fIdx++;
        } else {
            mergeResult[i] = sElement;
            sIdx++;
        }
        i++;
    }

    while(fIdx < fLength) {
        mergeResult[i] = firstBranch[fIdx];
        fIdx++;
        i++;
    }

    while(sIdx < sLength) {
        mergeResult[i] = secondBranch[sIdx];
        sIdx++;
        i++;
    }

    return mergeResult;
}

function mergeDesc(firstBranch: Array<number>, secondBranch: Array<number>): Array<number> {
    const fLength: number = firstBranch.length;
    const sLength: number = secondBranch.length;
    const totalLength: number = fLength + sLength;
    const mergeResult: Array<number> = Array(totalLength);

    let i: number = 0;
    let fIdx: number = i;
    let sIdx: number = i;

    while((fIdx < fLength) && (sIdx < sLength)) {
        const fElement: number = firstBranch[fIdx];
        const sElement: number = secondBranch[sIdx];
        if (fElement > sElement) {
            mergeResult[i] = fElement;
            fIdx++;
        } else {
            mergeResult[i] = sElement;
            sIdx++;
        }
        i++;
    }

    while(fIdx < fLength) {
        mergeResult[i] = firstBranch[fIdx];
        fIdx++;
        i++;
    }

    while(sIdx < sLength) {
        mergeResult[i] = secondBranch[sIdx];
        sIdx++;
        i++;
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

    const sortedResult = mergeAsc(firstBranch, secondBranch); // No more rabit holes.
    return sortedResult;
}

export function sortDesc(arr: Array<number>): Array<number> {
    if (arr.length === 1) {
        return arr;
    }
    const splitIdx: number = Math.ceil(arr.length / 2); // With Math.ceil(), if the number of elements is odd, the first half will contain 1 element more than the second half
    const firstHalf: Array<number> = arr.slice(0, splitIdx);
    const secondHalf: Array<number> = arr.slice(splitIdx);

    const firstBranch: Array<number> = sortDesc(firstHalf); // Enter the rabbit hole. You will exit at some point when you find a trivial case. As soon as you do, continue with the execution from where you left it
    const secondBranch: Array<number> = sortDesc(secondHalf);  // Enter another rabbit hole

    const sortedResult = mergeDesc(firstBranch, secondBranch); // No more rabit holes.
    return sortedResult;
}