//
// Created by TigerZhao on 2020-08-31.
//


#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        string a, b;
        cin >> n >> a >> b;
        int k = 0;
        string p;
        for (int i = n - 1; i >= 0; i--) {
            if (a[i] != b[i]) {
                if (a[0] == b[i]) {
                    p += "1 ";
                    k++;
                    if (a[0] == '0') {
                        a[0] = '1';
                    } else {
                        a[0] = '0';
                    }
                }
                p += to_string(i + 1) + ' ';
                k++;
                reverse(a.begin(), a.begin() + i + 1);
                for (int j = 0; j <= i; j++) {
                    if (a[j] == '0') {
                        a[j] = '1';
                    } else {
                        a[j] = '0';
                    }
                }
            }
        }
        cout << k << ' ' << p << endl;
    }
    return 0;
}
