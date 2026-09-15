// 1. count all frequent number and track it on map
// 2. Get the top 5
//  2a. insert first k number
//  2b. replace the lowest number count.
//  2c. find the lowest count from the new top K
// time complexity = O(n·k)
// space complexity = O(n)
function topKFrequent(nums: number[], k: number): number[] {
    const numCountMap = new Map<number, number>();
    for (const num of nums) {
        const numCount = numCountMap.get(num)
        if (numCount) {
            const newNumCount = numCount + 1
            numCountMap.set(num, newNumCount)
            continue
        }
        numCountMap.set(num, 1)
    }

    const findLowestCount = (arr: Array<{ num: number, numCount: number }>): [number, number] => {
        let lowestNumIdx = -1;
        let lowestCount = -1;
        for (let index = 0; index < arr.length; index++) {
            const { numCount } = arr[index]!;
            if (lowestCount === -1) {
                lowestNumIdx = index;
                lowestCount = numCount
                continue
            }

            if (lowestCount > numCount) {
                lowestNumIdx = index;
                lowestCount = numCount
            }
        }

        return [lowestNumIdx, lowestCount]
    }

    const topK = new Array<{ num: number, numCount: number }>();
    let loopCount = 0;
    let lowestNumIdx = -1;
    let lowestCount = -1;
    for (const [num, numCount] of numCountMap) {
        // insert till k count
        if (loopCount < k) {
            topK.push({
                num: num,
                numCount: numCount
            })
            if (lowestCount > numCount || lowestCount == -1) {
                lowestCount = numCount
                lowestNumIdx = loopCount
            }
            loopCount++
            continue
        }

        if (lowestCount < numCount) {
            topK[lowestNumIdx] = {
                num: num,
                numCount: numCount
            }

            const [newLowestNumIdx, newLowestCount] = findLowestCount(topK)
            lowestCount = newLowestCount
            lowestNumIdx = newLowestNumIdx
        }
        loopCount++

    }

    const result = new Array<number>()
    for (const { num } of topK) {
        result.push(num)
    }
    return result
}