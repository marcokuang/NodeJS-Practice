var waitTime = 3000;
var timeInterval = 500;
var currentTime = 0;
console.log("wait...");

function logPercentage(current, total) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${Math.floor(current/total*100)}%`);
    
}

var currentInterval = setInterval(()=> {
    currentTime += timeInterval;
    // console.log("waited " + currentTime/1000 + " seconds");
    logPercentage(currentTime, waitTime);
    // process.stdout.write(`waiting... 100%\n`);
}, timeInterval);

setTimeout(() => {
    clearInterval(currentInterval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done...");
    
}, waitTime);