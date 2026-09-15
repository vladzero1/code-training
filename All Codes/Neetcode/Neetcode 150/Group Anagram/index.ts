
// solution 1: sort the str inside the strs solution
// time complexity = o(n⋅m⋅logm), n = strs count, m = string length inside the n
function groupAnagrams(strs: string[]): string[][] {
    const strMap = new Map<string, string[]>();
    for (const str of strs) {
        const sortedStr = str.split("").sort().join();
        const group = strMap.get(sortedStr);
        if (group) {
            group.push(str)
            strMap.set(sortedStr, group)
            continue
        }
        strMap.set(sortedStr, [str])
    }

    const result: string[][] = []
    for (const [, group] of strMap) {
        result.push(group)
    }
    return result
}
// solution 2: calculate the char count on every str and group them
// time complexity = o(n⋅m), n = strs count, m = string length inside the n
function groupAnagrams2(strs: string[]): string[][] {
    const strMap = new Map<string, string[]>()
    for (const str of strs) {
        // key = char, val = char count
        const count: number[] = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]! += 1
        }

        let strGroup: string = count.join(",")

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