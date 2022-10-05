function reverseString(s) {
    try {
        let revStr = s.split("");
        revStr = revStr.reverse();
        revStr = revStr.join('');
        s = revStr;
    } catch (err) {
        console.log(err.message);
    }
    console.log(s);
}

reverseString("1234");