let day = "   friday  ";
let dayOne = day.trim()
let finalDay= dayOne.charAt(0).toUpperCase() + dayOne.slice(1)
switch(finalDay) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log(`No Appointments Available`);
        break;
    case "Monday":
    case "Thursday" :
        console.log(`From 10:00 AM To 5:00 PM`);
        break;
    case "Tuesday" :
        console.log(`From 10:00 AM To 6:00 PM`);
        break;
    case "Wednesday" :
        console.log(`From 10:00 AM To 7:00 PM`);
        break;
    default :
        console.log(`Its Not A Valid Day`)
}
