function BinarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(high >= low) {
        mid = low + Math.floor((high - low) /2);

        if (arr[mid] == x)
            return mid;

        if(arr[mid] > x) 
            high = mid - 1;

        else 
            low = mid + 1;
    }

    return -1;
}

arr = new Array(2, 3, 4 , 10, 40);
x = 10;
result = BinarySearch(arr, x);
if(result == -1) {
    console.log("Number not found");
} else {
    console.log("Element is present at index ", result);
}