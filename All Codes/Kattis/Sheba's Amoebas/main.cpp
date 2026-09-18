#include <iostream>
#include <vector>

using namespace std;

void dfs() {}

int main() {
    int m, n;
    cin >> m >> n;

    vector < vector < char >> pixels(m);
    vector < vector < bool >> isChecked(m, vector < bool > (n, false));

    auto dfs = [ & ](auto & self, int i, int j) {
        if (i < 0 || j < 0 || i >= m || j >= n || isChecked[i][j] ||
            pixels[i][j] == '.') {
            return;
        }
        isChecked[i][j] = true;

        self(self, i - 1, j - 1);
        self(self, i, j + 1);
        self(self, i, j - 1);
        self(self, i + 1, j - 1);
        self(self, i - 1, j);
        self(self, i + 1, j);
        self(self, i - 1, j + 1);
        self(self, i + 1, j + 1);
    };

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            char temp;
            cin >> temp;
            pixels[i].push_back(temp);
        }
    }

    int result = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (pixels[i][j] == '#' && !isChecked[i][j]) {
                result++;
            }
            dfs(dfs, i, j);
        }
    }

    cout << result;
}