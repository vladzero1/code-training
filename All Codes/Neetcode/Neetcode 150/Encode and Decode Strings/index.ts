// time complexity = O(n+m), n = total string count, m = total string length
const delimiter = "+"
function encode(strs: string[]): string {
    if (strs.length === 0) {
        return ""
    }
    let sizePerGroup = ""
    let result = ""
    for (const str of strs) {
        sizePerGroup = sizePerGroup.concat(str.length.toString()).concat(",")
        result = result.concat(str)
    }

    let finalResult = sizePerGroup.concat(delimiter).concat(result)
    return finalResult
}

// time complexity = O(n+m), n = total string count, m = total string length
function decode(str: string): string[] {
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
        if (!isDelimiterFound && char !== delimiter) {
            if (char !== ",") {
                tempChar = tempChar.concat(char)
            } else {
                lengths.push(Number(tempChar))
                tempChar = "" //reset the temp
            }
            continue
        }

        if (!isDelimiterFound && char === delimiter) {
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

    // handle empty string case
    while (lengths.length !== result.length) {
        result.push("")
    }

    return result
}