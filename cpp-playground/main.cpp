#include <iostream>
using namespace std;

int main() {
  int n, k;
  cin >> n >> k;
  while (k > 0) {
    char temp;
    int temp1, temp2;
    cin >> temp;
    if (temp == 'F') {
      cin >> temp1;
    }
    if (temp == 'C') {
      cin >> temp1 >> temp2;
    }
    cout << temp << endl;
    k--;
  }
}
