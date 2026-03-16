using System;

class Smallest {

    static int findSmallest(int a, int b, int c) {
        int count = 0;

        while (a>0 && b>0 && c>0) {
            a--;
            b--;
            c--;
            count++;
        }
        return count;
    }

    public static void Main() {
        int a=2; b=5; c=7;
        console.WriteLine(findSmallest(a,b,c));
    }
}
