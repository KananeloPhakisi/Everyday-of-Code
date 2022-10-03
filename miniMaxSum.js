function miniMaxSum(arr) {
    // Write your code here
    let maxVal = Math.max(...arr),
        minVal = Math.min(...arr);
    let minSum = 0, maxSum = 0;
    
    if (maxVal !== minVal) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== maxVal) minSum += arr[i];
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== minVal) maxSum += arr[i];
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            minSum += arr[i];
        }
        maxSum = minSum;
    }
    
    console.log(minSum +" "+ maxSum);
}

miniMaxSum([5, 5, 5, 5]);