class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    private delimiter = "+"
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return ""
        }
        let sizePerGroup = ""
        let result = ""
        for (const str of strs) {
            sizePerGroup = sizePerGroup.concat(str.length.toString()).concat(",")
            result = result.concat(str)
        }

        let finalResult = sizePerGroup.concat(this.delimiter).concat(result)
        return finalResult
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length === 0) {
            return []
        }

        let tempChar = ""
        let lengths: number[] = []
        let result: string[] = []
        let isDelimiterFound = false
        let tempCount = 0
        let lengthPos = 0
        for (const char of str) {
            if (!isDelimiterFound && char !== this.delimiter) {
                if (char !== ",") {
                    tempChar = tempChar.concat(char)
                } else {
                    lengths.push(Number(tempChar))
                    tempChar = "" //reset the temp
                }
                continue
            }

            if (!isDelimiterFound && char === this.delimiter) {
                isDelimiterFound = true
                tempChar = ""
                continue
            }
            let currLength = lengths[lengthPos]!
            while (currLength === 0) {
                tempCount = 0
                lengthPos += 1
                result.push(tempChar)
                currLength = lengths[lengthPos]!
            }
            if (tempCount < currLength) {
                tempChar = tempChar.concat(char)
                tempCount++
                if (tempCount === currLength) {
                    tempCount = 0
                    lengthPos += 1
                    result.push(tempChar)
                    tempChar = ""
                }
            }
        }
        while (lengths.length !== result.length) {
            result.push("")
        }

        return result
    }
}


const obj = new Solution();
const encodedStr3 = obj.encode([""])
console.log(encodedStr3)
console.log(obj.decode(encodedStr3))

// const encodedStr4 = obj.encode([])
// console.log(encodedStr4)
// console.log(obj.decode(encodedStr4))