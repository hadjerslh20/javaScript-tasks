// Challenge One
let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
/*Ternary if syntax*/
a<10 ? console.log(10) :a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") :  console.log("Unknown") ;

// Challenge Two 
let st = "Elzero Web School";

if ((2*(st.length)).toString()=== '34') {
  console.log('Good');
}
// Challenge Three
let st = "Elzero Web School";
if (st.charAt(7).toLowerCase() === "w") {
    console.log("Good");
}

// Challenge Four 
let st = "Elzero Web School";
if (typeof(st.length )!== "string") {
    console.log("Good");
}
// Challenge Five 
let st = "Elzero Web School";
if ( typeof(st.length ) === "number") {
    console.log("Good");
} 
// Challenge Five 
let st = "Elzero Web School";
if (st.substring(0,6) + st.substring(0,6) === "ElzeroElzero") {
    console.log("Good");
}
