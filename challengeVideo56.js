let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let neAdmin=[];
document.write(`<div>We Have X Admins</div>`);
let numOfAdmin=0;
let numOfEmp=0;
for (let i=0; i < myAdmins.length; i++) {
    if (myAdmins[i]=="Stop") {
        break;
    }
    numOfAdmin++;
    neAdmin.push(myAdmins[i]);
}
document.write(`<div>We Have ${numOfAdmin} Admins</div> <hr>`)
for(let j=0 ; j <neAdmin.length ; j++) {
    document.write(`<div>`);
    document.write(`<p>The Admin Fro Team ${j+1} is ${neAdmin[j]} </p>`);
    document.write(`<h3>Team Members:</h3>`);
    for(let k=0 ; k < myEmployees.length ; k++){
        if (myEmployees[k].startsWith(neAdmin[j].charAt(0))) {
            numOfEmp++;
            document.write(`<p>- ${numOfEmp} ${myEmployees[k]}</p>`);
        } else {
            numOfEmp+=0;
        }
        
    }
    numOfEmp=0;
    document.write(`</div> <hr>`);
}
