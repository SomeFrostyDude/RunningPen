function random_number () {
    var num = Math.floor((Math.random() * 100) + 1);
    num.toString();
    return num;
}

var goal = Number(random_number())

function compare() {

    var guess = Number(document.getElementById("ninput").value);



    if (guess > goal) {
        document.getElementById("output").innerHTML = "guess is too high";
    }

    if (guess < goal) {
        document.getElementById("output").innerHTML = "guess is too low";
    }

    if (guess == goal) {
        document.getElementById("output").innerHTML = "";
        goal = Number(random_number());
        alert(guess + " is correct. picking new number...")

    }

}