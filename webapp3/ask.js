/**
 * Ask some questions in a row and output the answered to stdout
 *  
 */

var questions = ["What's the date?",
"What's the time?",
"Is it in the morning?"];
var answers = [];

function askAQuestion(question){
    process.stdout.write(`\n${questions[question]}\n`);
    process.stdout.write("> ");
}

process.stdin.on('data', function (data) {
   answers.push(data.toString().trim()); 

    if(answers.length < questions.length){
        askAQuestion(answers.length);
    }
    else{
        process.exit();
    }
});

process.on('exit', function (){
    process.stdout.write(`you have enter: ${answers[0]}, ${answers[1]}, ${answers[2]}\n`);
});

askAQuestion(0);