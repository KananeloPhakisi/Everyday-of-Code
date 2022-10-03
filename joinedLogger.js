function logger(msg) {
    console.log(`${msg.text}\n`);
}
  
function joinedLogger(level, sep) {
    // write your code here
    return function f() {
        let myMessage = "";
        let myMessageObj = {};
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].level >= level) {
                myMessage = myMessage + arguments[i].text + sep;
                console.log(myMessage);
            }
        }
        console.log(arguments);
        myMessageObj.level = 0;
        myMessageObj.text = myMessage;
        logger(myMessageObj);
    }
}

msg1 = {level: 1, text: "hello"};
msg2 = {level: 2, text: "hello1"};
msg3 = {level: 3, text: "hello3"};

const f = joinedLogger(1, '-');
f(msg1, msg2, msg3);