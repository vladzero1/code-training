// time complexity O(n)
// memory complexit O(n)
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