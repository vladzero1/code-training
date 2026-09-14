class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashMaps = new Set<number>()
        for (const num of nums) {
            if (hashMaps.has(num)) {
                return true
            }
            hashMaps.add(num)
        }

        return false
    }
}

const obj = new Solution();
console.log(obj.hasDuplicate([1, 2, 3]))