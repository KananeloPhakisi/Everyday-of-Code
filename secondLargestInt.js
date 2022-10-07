function getSecondLargest(nums) {
    // Complete the function
    let max = Math.max(...nums),
        secondMax = -1;
    for (let i = 0; i < nums.length; i++) {
        if (secondMax < nums[i] && nums[i] !== max) secondMax = nums[i];
    }
    
    return secondMax;
}


console.log(getSecondLargest([1,2,3,4,5]));