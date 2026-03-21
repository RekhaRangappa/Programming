function isEvenOrOdd(a) {
    if(a%2 == 0) {
        return true;
    } else {
        return false;
    }
}

let a = 13;
isEvenOrOdd(a) ? console.log(a, "Im Even") : console.log(a, "Im Odd");