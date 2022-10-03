function miniMaxSum(arr) {
    let maxVal = Math.max(...arr),
        minVal = Math.min(...arr);
    const sum = arr.reduce((a, b) => a+b, 0);
    
    console.log(Number(sum - maxVal) +" "+ Number(sum - minVal));
}

miniMaxSum([5, 5, 5, 5]);