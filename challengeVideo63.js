function showDetails(p1,p2,p3) {
    if (typeof(p1)=="string") {
        if(typeof(p2)=="number") {
            if(typeof(p3)=="boolean") {
                if(p3== true) {
                    console.log(`Hello ${p1}, Your Age Is ${p2} ,You Are Available For Hire`);
                } else {
                    console.log(`Hello ${p1}, Your Age Is ${p2} ,You Are Not Available For Hire`);
                }
                
            }
        } else if (typeof(p2)=="boolean" && typeof(p3)=="number") {
            if(p2== true) {
                console.log(`Hello ${p1}, Your Age Is ${p3} ,You Are Available For Hire`);
            } else {
                console.log(`Hello ${p1}, Your Age Is ${p3} ,You Are Not Available For Hire`);
            }
        }
    } else if (typeof(p1)=="number") {
        if (typeof(p2)=="string") {
            if(typeof(p3)=="boolean") {
                if(p3== true) {
                    console.log(`Hello ${p2}, Your Age Is ${p1} ,You Are Available For Hire`);
                } else {
                    console.log(`Hello ${p2}, Your Age Is ${p1} ,You Are Not Available For Hire`);
                }
                
            }
        } else if (typeof(p2)=="boolean" && typeof(p3)=="string") {
            if(p2== true) {
                console.log(`Hello ${p3}, Your Age Is ${p1} ,You Are Available For Hire`);
            } else {
                console.log(`Hello ${p3}, Your Age Is ${p1} ,You Are Not Available For Hire`);
            }
        }

    } else if (typeof(p1)=="boolean") {
        if (typeof(p2)=="string") {
            if(typeof(p3)=="number") {
                if(p1== true) {
                    console.log(`Hello ${p2}, Your Age Is ${p3} ,You Are Available For Hire`);
                } else {
                    console.log(`Hello ${p2}, Your Age Is ${p3} ,You Are Not Available For Hire`);
                }
                
            }
        } else if (typeof(p2)=="number" && typeof(p3)=="string") {
            if(p1== true) {
                console.log(`Hello ${p3}, Your Age Is ${p2} ,You Are Available For Hire`);
            } else {
                console.log(`Hello ${p3}, Your Age Is ${p2} ,You Are Not Available For Hire`);
            }
        }
    }
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
