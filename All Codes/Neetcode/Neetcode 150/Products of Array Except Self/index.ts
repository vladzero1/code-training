// Solution 1 - By Division
// time Complexity = O(n)
// memory Complexity = O(n)
function productExceptSelf(nums: number[]): number[] {
    // key = index, val = isZero
    let numZeroIndexes = new Map<number, boolean>();
    let nonZeroTotalMultiply = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]!;
        if (num != 0) {
            nonZeroTotalMultiply *= num;
            continue
        }

        numZeroIndexes.set(i, true);
    }

    const result: number[] = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]!;
        // handle multiple index with num 0
        if (numZeroIndexes.size > 1) {
            result.push(0)
            continue
        }

        if (num != 0) {
            // handle 1 of the index is 0 and currently not on the 0 index
            if (numZeroIndexes.size > 0 && !numZeroIndexes.get(i)) {
                result.push(0)
                continue
            }
            // handle standard case where all num is non-zer
            result.push(nonZeroTotalMultiply / num);
            continue
        }

        // handle for num 0 with size of only 1
        result.push(nonZeroTotalMultiply);
    }
    return result
}

// Solution 2 - By Prefix Suffix
// time Complexity = O(n)
// memory Complexity = O(n)
function productExceptSelf2(nums: number[]): number[] {
    const result: number[] = Array<number>(nums.length).fill(1);

    // calculate Prefix
    let prevPrefix = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]!;
        result[i]! *= prevPrefix;
        // to calculate the prefix we will always multiply it with the prev Index
        prevPrefix *= num;
    }

    // result at this line state is pretty much an array of prefix

    // calculate Suffix
    let prevSuffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]!;
        result[i]! *= prevSuffix;
        // to calculate the suffix we will always multiply it with the right Index which we store on prevSuffix
        prevSuffix *= num
    }

    return result
}