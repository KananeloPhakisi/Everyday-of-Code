function matchingStrings(strings, queries) {
    // Write your code here
    let results = [],
        count = 0;
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) count++;
        }
        results.push(count);
        count = 0;
    }
    return results;
}

let strings = ['ab', 'ab', 'abc'],
    queries = ['ab', 'abc', 'bc'];

console.log(matchingStrings(strings, queries));