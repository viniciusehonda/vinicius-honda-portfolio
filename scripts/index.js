function Initialize() {
    
    let ageElement = document.getElementById("age-text");
    ageElement.innerText = getMyAge();
}

function getMyAge() {
    var myBDay = new Date(1997, 9, 15);
    var diff = Date.now() - myBDay.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}