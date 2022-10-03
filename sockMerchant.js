'use strict';

function sortAr(ar) {
    return ar.sort((x, y) => x - y);
}

function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    let sortedAr = sortAr(ar);
    
    for (let i = 0; i < n-1; i++) {
        if (sortedAr[i] === sortedAr[i+1]) {
            count++;
            i++;
        }
    }
    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));