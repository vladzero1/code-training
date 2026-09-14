#include <bits/stdc++.h>

using namespace std;

struct Node {
 int val;
 Node * left;
 Node * right;
};

int Query(int fromIdx, int untilIdx, Node &root){
 cout << fromIdx <<" "<< untilIdx<<" - ";
 return 0;
}

Node CreateNode(vector < int > & nodes, int lowerBound, int higherBound) {
 // cout << lowerBound << " " << higherBound << "\n";
 if (lowerBound == higherBound) {
 // return leaf node
 return {
 val: nodes[lowerBound],
 left: NULL,
 right: NULL,
 };
 }

 int leftHigherBound = max(higherBound / 2, lowerBound);
 Node left = CreateNode(nodes, lowerBound, leftHigherBound);

 Node right = CreateNode(nodes, leftHigherBound + 1, higherBound);
 return Node {
 val: min(left.val, right.val),
 left: & left,
 right: & right,
 };
}

vector < int > split(const string & s, char delim) {
 vector < int > result;
 stringstream ss(s);
 string item;

 while (getline(ss, item, delim)) {
 result.push_back(stoi(item));
 }

 return result;
}


int main() {
 int n, q;
 cin >> n >> q;
 vector < int > originalNodes;
 for (int i = 0; i < n; i++) {
 int temp = 0;
 cin >> temp;
 originalNodes.push_back(temp);
 }

 //init segment tree
 Node root = CreateNode(originalNodes, 0, originalNodes.size() - 1);

 cin.ignore();
 string input;
 while (getline(cin, input)) {
 string command = input.substr(0, 5);
 cout << command << "\n";
 vector < int > inputNum = split(input.substr(6, input.length() - 7), ',');
 if(command == "query"){
 cout << Query(inputNum[0],inputNum[1],root);
 }
 }
}