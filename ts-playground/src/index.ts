class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // key = number, value = index of the number
        const hashMaps = new Map<number, number[]>()
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index]!;
            const indexes = hashMaps.get(num);
            if (indexes) {
                indexes.push(index)
                hashMaps.set(num, indexes)
                continue
            }

            hashMaps.set(num, [index])
        }

        // find the difference and check it on the hashmap created previously
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index]!;
            const diff = target - num;
            const indexes = hashMaps.get(diff)
            if (indexes !== undefined && indexes.length > 0) {
                if (indexes[0] === index) {
                    if (indexes[1]) {
                        return [index, indexes[1]]
                    }
                    continue
                }

                return [index, indexes[0]!]
            }
        }

        return [0, 0]
    }
}


const obj = new Solution();
// console.log(obj.twoSum([3, 4, 4, 5, 4, 6], 7))
// console.log(obj.twoSum([4, 5, 6], 10))
// console.log(obj.twoSum([5, 5], 10))
console.log(obj.twoSum([1, 3, 4, 2], 6))