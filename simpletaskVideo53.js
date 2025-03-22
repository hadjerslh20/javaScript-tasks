let products= ['Keyboard','Mouse','Pen','Pad','Monitor','GalaxyS20+'];
let colors=['Red','Blue','Green'];
let showCount =5;

document.write(`<h1>Show ${showCount} Products</h1>`)
for(let i=0 ; i<showCount;i++) {
    document.write(`<h3>[${i+1}]${products[i]}</h3>`);
    for(let j=0 ; j<colors.length ; j++) {
        document.write(`<p>${colors[j]}</p>`)
    }
    document.write(`${colors.join(' | ')}`)
}
