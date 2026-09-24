class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        // 3x3 sub-boxes dimension
        const subBoxesXY = 3;
        for (let i = 0; i < board.length; i++) {
            // check sub-boxes validity
            const map = new Map<string, boolean>();
            for (let j = 0; j < subBoxesXY; j++) {
                for (let k = 0; k < subBoxesXY; k++) {
                    const idxX = j + (Math.floor(i / subBoxesXY) * subBoxesXY);
                    const idxY = k + (i % subBoxesXY * subBoxesXY);
                    const grid = board[idxX]![idxY]!;
                    if (map.has(grid) && grid != ".") {
                        return false;
                    }
                    map.set(grid, true);
                    // console.log(`grid=${grid} - [${idxX}][${idxY}]`)
                }
            }

            // check row validity
            const rowMap = new Map<string, boolean>();
            for (let j = 0; j < board[i]!.length; j++) {
                const grid = board[i]![j]!;
                if (rowMap.has(grid) && grid != ".") {
                    return false;
                }
                rowMap.set(grid, true);
                // console.log(`grid=${grid} - [${i}][${j}]`)
            }

            // check Column validity
            const colMap = new Map<string, boolean>();
            for (let j = 0; j < board[i]!.length; j++) {
                const grid = board[j]![i]!;
                if (colMap.has(grid) && grid != ".") {
                    return false;
                }
                colMap.set(grid, true);
                // console.log(`grid=${grid} - [${i}][${j}]`)
            }
        }
        
        return true;
    }
}

const obj = new Solution();
// console.log(obj.isValidSudoku([
//     ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//     ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", "9", "1", ".", ".", ".", ".", ".", "3"],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", ".", "2", ".", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) //false

// console.log(obj.isValidSudoku([
//     ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//     ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", ".", "3"],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", ".", "2", ".", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) //true

console.log(obj.isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", ".", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", ".", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]])) //false
