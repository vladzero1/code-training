
#include <iostream>
#include <map>
#include <vector>
using namespace std;

int main() {
  // C = number of country
  // P = number of trading partnership
  // X = number of home country
  // L = number of country that leave
  int c, p, x, l;
  cin >> c >> p >> x >> l;

  // index = country, value = partners of the country
  vector<vector<int>> partners(c + 1);
  // index = country, value = total partner that already left
  vector<int> partnerLeaveCount(c + 1);
  // true = stay
  map<int, bool> countryStatus;
  for (int i = 0; i < p; i++) {
    int temp, temp1;
    cin >> temp >> temp1;
    partners[temp].push_back(temp1);
    partners[temp1].push_back(temp);

    countryStatus[temp] = true;
    countryStatus[temp1] = true;
  }

  auto leaveCountry = [&](auto &self, int currCountry, bool isLeave) {
    if (!countryStatus[currCountry]) {
      return;
    }

    if (isLeave) {
      countryStatus[currCountry] = false;
      for (int partner : partners[currCountry]) {
        self(self, partner, false);
      }
      return;
    }

    partnerLeaveCount[currCountry] += 1;

    if (partnerLeaveCount[currCountry] * 2 >= partners[currCountry].size()) {
      self(self, currCountry, true);
    }
  };

  leaveCountry(leaveCountry, l, true);
  if (countryStatus[x]) {
    cout << "stay";
    return 0;
  }

  cout << "leave";
}