function countingValleys(steps, path) {
    // Write your code here
    let depth = 0;
    let valleys = 0;
    for (let i = 0; i < steps; i++) {
        if (depth == 0 && path.charAt(i) == "D") {
            depth -= 1;
            valleys++;
        } else if (path.charAt(i) == "D") {
            depth--;
        } else {
            depth++;
        }
    }

    return valleys;
}

console.log(countingValleys(8, "UDDDUDUUDDUU"));