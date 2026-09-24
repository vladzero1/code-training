// Time Complexity = O(m·n), m = row, n = column
// Memory Complexity = O(m·n), m = row, n = column
function isValidSudoku(board: string[][]): boolean {

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

        // check column validity
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