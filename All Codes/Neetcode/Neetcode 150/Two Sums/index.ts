// time complexity = O(n)
// space complexity = O(n)
function twoSum(nums: number[], target: number): number[] {
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
            // handling where target = index/2 and the input only have 1 of them
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