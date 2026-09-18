#include <iostream>
#include <ostream>
#include <queue>
#include <utility>
#include <vector>

using namespace std;

int main() {
  int n, m;
  cin >> n >> m;

  vector<vector<int>> grids(n, vector<int>(m));
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      char temp;
      cin >> temp;
      grids[i][j] = temp - '0';
    }
  }

  vector<vector<bool>> isTraversed(n, vector<bool>(m, false));

  queue<pair<pair<int, int>, int>> posQueue;
  vector<vector<int>> moveCountPerPos(n, vector<int>(m, -1));
  posQueue.push({{0, 0}, -1});

  auto traverse = [&](int nPos, int mPos, int currMoveCount) {
    if (nPos < 0 || mPos < 0 || nPos >= n || mPos >= m ||
        isTraversed[nPos][mPos]) {
      return;
    }
    isTraversed[nPos][mPos] = true;

    int currGridVal = grids[nPos][mPos];
    posQueue.push({{nPos - currGridVal, mPos}, currMoveCount + 1});
    posQueue.push({{nPos + currGridVal, mPos}, currMoveCount + 1});
    posQueue.push({{nPos, mPos - currGridVal}, currMoveCount + 1});
    posQueue.push({{nPos, mPos + currGridVal}, currMoveCount + 1});

    moveCountPerPos[nPos][mPos] = currMoveCount + 1;
  };

  while (!posQueue.empty()) {
    int nPos = posQueue.front().first.first;
    int mPos = posQueue.front().first.second;
    int currMoveCount = posQueue.front().second;
    traverse(nPos, mPos, currMoveCount);

    posQueue.pop();
  }

  cout << moveCountPerPos[n - 1][m - 1];
}