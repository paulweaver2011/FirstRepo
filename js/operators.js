// < less than
// <= lkess than or equal to
if (10 <= 30) {// this is fucking true
    console.log("10 is less than 20");    
}
// > greater than
// >= greater than or equal to
if (20 >= 10) {
    console.log("20 is greater than 10");
}

// = assign to variable
var myPassword = "ou812";
// == compare values
if (1 == 1) {
    console.log("1 is equal to 1...");
}
// != not equal
if(5 != 1) {
    console.log("5 is not equal to 1");
}
// + add
var apples = 10 + 5;
// += add to current values
apples += apples;
// - subtract
apples - 10;
// -= subtract from the current values
apples -= apples;
// * multiply
var oranages = 10*10;
// / divide
oranages /= 5;

// ++ increment (Add 1, Motherfucker!)
oranages ++;
// -- decrement (Best be subtracting one, Dawg!)
oranages --;

// && and
if (apples >= 0 && oranages >= 2) {
    console.log(apples);
    console.log(oranages);
}
// || or
if (apples < 0 || oranages >= 0) {
    console.log ("One statement is true");
}