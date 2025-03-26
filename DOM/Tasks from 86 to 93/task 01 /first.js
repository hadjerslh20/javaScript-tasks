/* Using querySelector */
// Method One
var element = document.querySelector(".element");
console.log(element);
// Method two
var element = document.querySelector("#elzero");
console.log(element);
// Method three
var element = document.querySelector("[name='js']");
console.log(element);
// Method four
var element = document.querySelector("div");
console.log(element);
/* Using querySelectors */
// Method five
var element = document.querySelectorAll("div")[0];
console.log(element);
// Method six
var element = document.querySelectorAll(".element")[0];
console.log(element);
// Method seven
var element = document.querySelectorAll("#elzero")[0];
console.log(element);
// Method eight
var element = document.querySelectorAll("[name='js']")[0];
console.log(element);
// Method nine
var element = document.getElementById("elzero");
console.log(element);
// Method ten
var element = document.getElementsByClassName("element")[0];
console.log(element);
// Method eleven
var element = document.getElementsByTagName("div")[0];
console.log(element);
// Method tweleve
var element = document.getElementsByName("js")[0];
console.log(element);
// Method thirteen
var element = document.body.children[0];
console.log(element);
// Method fourteen
var element = document.body.firstElementChild;
console.log(element);
// Method fifteen
var element = document.querySelectorAll("*")[0];
console.log(element);
