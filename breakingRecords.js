function breakingRecords(scores) {
    // Write your code here
    let maxScore, minScore;
    let maxCount = 0, minCount = 0;
    
    maxScore = scores[0];
    minScore = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount += 1;
        } else if (scores[i] < minScore) {
            minScore = scores[i];
            minCount += 1;
        }
    }
    return [maxCount, minCount];
}