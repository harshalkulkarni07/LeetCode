
/*
   https://leetcode.com/problems/unique-paths/
*/



var uniquePaths = function(m, n) {
    // Create m x n grid filled with 0
    let grid = Array.from({ length: m }, () => Array(n).fill(0));

    // First column = 1
    for (let i = 0; i < m; i++) {
        grid[i][0] = 1;
    }

    // First row = 1
    for (let j = 0; j < n; j++) {
        grid[0][j] = 1;
    }

    // Fill rest of grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }

    return grid[m - 1][n - 1];
};