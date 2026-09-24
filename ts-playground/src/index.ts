class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = Array<number>(nums.length).fill(1);

        // calculate Prefix
        let prevPrefix = 1;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]!;
            // to calculate the prefix we will always multiply it with the prev Index
            result[i]! *= prevPrefix;
            prevPrefix *= num;
            // console.log("pref=",prevPrefix)
        }
        // console.log(result)
        // calculate Suffix
        let prevSuffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i]!;
            // to calculate the suffix we will always multiply it with the right Index which we store on prevSuffix
            result[i]! *= prevSuffix;
            prevSuffix *= num
        }

        return result
    }
}


const obj = new Solution();
//1. [1,1,2,8] suffix [48,24,6,1]
console.log(obj.productExceptSelf([1, 2, 4, 6])) // [48,24,12,8]
console.log(obj.productExceptSelf([-1, 0, 1, 2, 3])) // [0,-6,0,0,0]
console.log(obj.productExceptSelf([-1, 0, 0, 2, 3]))