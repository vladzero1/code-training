class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMap = new Map<string, string[]>()
        for (const str of strs) {
            // key = char, val = char count
            const count: number[] = new Array(26).fill(0);
            for (const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]! += 1
            }

            let strGroup: string = count.join(",")
            console.log(strGroup)
            const group = strMap.get(strGroup)
            if (group) {
                group.push(str);
                strMap.set(strGroup, group)
                continue
            }

            strMap.set(strGroup, [str])
        }

        const result: string[][] = []
        for (const [, group] of strMap) {
            result.push(group)
        }

        return result
    }
}


const obj = new Solution();
console.log(obj.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))
console.log(obj.groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))
// console.log(obj.groupAnagrams([""]))
// console.log(obj.groupAnagrams(["x "]))