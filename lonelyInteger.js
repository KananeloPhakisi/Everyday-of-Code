function lonelyinteger(a) {
    // Write your code here
    let counts = {};
    
    for (let i = 0; i < a.length; i++) {
        counts[a[i]] = counts[a[i]] ? counts[a[i]] + 1 : 1; 
    }
    for (const prop in counts) {
        if (counts[prop] === 1) return prop;
    }
}

console.log(lonelyinteger([1, 2, 4, 3, 2, 3, 1]))