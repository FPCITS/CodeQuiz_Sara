var counter = 30
var countdown = function() {
    console.log(counter);
    counter--;
    if (counter===0)
    console.log ("All done!");
    clearineterval(startcountdown);
};
var startcountdown=setineterval (countdown, 1000);