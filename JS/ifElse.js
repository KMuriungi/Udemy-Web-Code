var age = 28;

if (age < 25) {
    document.getElementById("box1").innerHTML = "You are a YoungStar!!";
    document.getElementById("box1").style.color = "green";
}

else if (age > 25 && age < 30) {
    document.getElementById("box1").innerHTML = "You are a YoungStar!!";
    document.getElementById("box1").style.color = "yellow";
}

else {
    window.alert("You are a YoungStar!!");
}