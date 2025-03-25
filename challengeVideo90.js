for(let i=0 ; i<100; i++) {
let myElement = document.createElement("div");
let head3 = document.createElement("h3");
let para = document.createElement("p");
let htext = document.createTextNode(`Product ${i+1}`);
let ptext = document.createTextNode("this is a good product .");

myElement.className="product";
head3.appendChild(htext);
para.appendChild(ptext);
myElement.appendChild(head3);
myElement.appendChild(para);
document.body.appendChild(myElement);
document.write('<hr>');
}
