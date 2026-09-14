class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sHashMaps = new Map<string, number>();
        for (const char of s) {
            const count = sHashMaps.get(char)
            if (count !== undefined) {
                sHashMaps.set(char, count + 1)
                continue
            }

            sHashMaps.set(char, 1)
        }

        const tHashMaps = new Map<string, number>();
        for (const char of t) {
            const count = tHashMaps.get(char)
            if (count !== undefined) {
                tHashMaps.set(char, count + 1)
                continue
            }

            tHashMaps.set(char, 1)
        }

        if(sHashMaps.size !== tHashMaps.size){
            return false
        }

        // check all char count
        for (const [char, sCount] of sHashMaps) {
            const tCount = tHashMaps.get(char)
            if(sCount !== tCount){
                return false
            }
        }

        return true
    }
}

const obj = new Solution();
console.log(obj.isAnagram("racecar", "carrace"))
console.log(obj.isAnagram("jar", "jam"))
console.log(obj.isAnagram("a", "ab"))