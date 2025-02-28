// challenge 01
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++); // 11+20+80-11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 13-21+81+13+14 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81+21+13*21-22*13-1= 100
// challenge 02
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * +e);
console.log(-d + +e*2 + f + +g*3 );
