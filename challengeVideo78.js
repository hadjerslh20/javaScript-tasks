let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(',').filter(function(el){
    if (isNaN(el) && el!== '_'  && el !== 'Z') {
        return el ;
    }
}

);

console.log(solution.join('')); // Elzero Web School
