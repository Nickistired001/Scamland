var test = "I am a global var";
let year = 0; // 1 year = 72 minutes = 1.2 hours
let month = 0; // 1 month = 6 minutes
let day = 0; // 1 day = 12 seconds
let hour = 0; // 1 hour = 1/2 second

let billboards = 0; // Bought using money, last for 1 year
let advertisement = 0; // Formula for advertisement is 1 + 2 * billboards + 5 * spammers + 3 * internetPresence. Feel free to change it if some methods are too OP
let spammers = 0; // hired through a menu, costs monthly upkeep
let internetPresence = 0; // increased by buying advertisements, which only last for a month each
let parkingSpaces = 10; // Parking spaces increases maximum amount of customers, increased by buying more parking spaces.
let buildingUpgrades = 0;
let money = 0;

runmain();

function runmain() {
    let test = "I am a local var";
    //I am a comment
    console.log(test);
    console.log(testintputoutput(1, 2, 3));
    console.log(testintputoutput("Hello ", "How ", "Are You?"));
    console.log(testintputoutput(false, null, null));

    window.setInterval(calculateprofit, 1000);
}

function testintputoutput(test, test2, test3) {
    if (test != null && test2 !== null && test3 != null) {
        return test + test2 + test3;
    } else if (test === 2 || test == 3) {
        return 2;
    } else if (test == 0 || test2 == true) {
        return "test is false or test2 is true";
    } else {
        return "rip"
    }
}

function calculateprofit() {
    
    console.log(money);
}