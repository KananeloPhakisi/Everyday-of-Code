function processData(input) {
    //Enter your code here
    let evenStr = "",
        oddStr = "";
    let str = input.split('\n');
    
    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            if (j % 2 === 0) evenStr += str[i][j];
            else oddStr += str[i][j]
        }
        console.log(evenStr, oddStr);
        evenStr = "";
        oddStr = "";
    }
} 