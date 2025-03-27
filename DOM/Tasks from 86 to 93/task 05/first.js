for(let i=0 ; i<5 ;i++) {
    let altValue = document.querySelectorAll('img')[i].getAttribute('alt');
    let altCheck = document.querySelectorAll('img')[i].hasAttribute('alt');
    if (altCheck == false) {
        document.querySelectorAll('img')[i].setAttribute('alt','Elzero New');
    }else {
        document.querySelectorAll('img')[i].setAttribute('alt','Old');
    }
}
