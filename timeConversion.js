function timeConversion(s) {
    // Write your code here
    let timeArr = s.split(":");
    if (timeArr[2].charAt(2) === "A") {
        if (Number(timeArr[0]) === 12) timeArr[0] = 0;
        else timeArr[0] = timeArr[0];
    } else if(timeArr[2].charAt(2) === "P") {
        if (Number(timeArr[0]) === 12) timeArr[0] = 12;
        else timeArr[0] = (12 + Number(timeArr[0])).toString();
    }
    if (timeArr[0].toString().length < 2) timeArr[0] = "0"+timeArr[0];
    return timeArr.join(":").substring(0, s.length-2);
}

console.log(timeConversion("12:02:34AM"));