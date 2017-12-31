/**
 * We can use the process object to get environment information, 
 * read environment variables, communicate with the terminal, or parent processes
 */

console.log(process.argv);


function validate(keyword) {
    let index = process.argv.indexOf(keyword);

    return ((index === -1) ? null : process.argv[index + 1]);
}

let month = validate('--month');
let date = validate('--date');

if (month == null || date == null){
    console.log("ERROR, PLEASE TRY AGAIN!");
}
else{
    console.log(`The date you chose is ${month} ${date}`);
}
