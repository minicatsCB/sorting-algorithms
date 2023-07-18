export function swap(arr: Array<number>, aIdx: number, bIdx: number): Array<number> {
    const copy = [...arr];
    copy[aIdx] = arr[bIdx];
    copy[bIdx] = arr[aIdx];
    return copy;
}