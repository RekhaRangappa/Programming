function findSmallest(a, b, c) {
    let count = 0;

    while (a>0 && b>0 && c>0) {
        a--;
        b--;
        c--;
        count++;
    }
    return count;
}

let a=2, b=5, c=7;
console.log(findSmallest(a, b, c));