var FName = document.getElementById("FName");
var LName = document.getElementById("LName");
var Address = document.getElementById("Address");
var City = document.getElementById("City");
var PCode = document.getElementById("PCode");
var Province = document.getElementById("Province");
var Age = document.getElementById("Age");

var Password = document.getElementById("Password");
var Confirm = document.getElementById("Confirm");

var Email = document.getElementById("Email");

var InputValues = document.querySelectorAll("input");
var InputLabels = document.querySelectorAll("label");

var errordiv = document.getElementById("error");
var showAlert = true;

var alertmessages = "";


function showError(inputtxt, i) {
    inputtxt.style.background = "rgb(255,233,233)";
    inputtxt.setCustomValidity("All values are required");

    if (showAlert) {
        alertmessages += "All fields are required!!<br>"
        showAlert = false;
    }

}

function removeError(inputtxt) {
    inputtxt.style.background = "";
    inputtxt.setCustomValidity("");
}

function validate() {

    if (document.contains(document.getElementsByClassName("alert")[0])) {
        document.getElementsByClassName("alert")[0].remove();
    }

    if (document.contains(document.getElementsByClassName("success")[0])) {
        document.getElementsByClassName("success")[0].remove();
    }


    showAlert = true;
    alertmessages = "";

    for (var i = 0; i < InputValues.length; i++) {
        if (document.getElementById(InputValues[i].id).value.length == 0) {
            showError(document.getElementById(InputValues[i].id), i);
        } else {
            removeError(document.getElementById(InputValues[i].id));
        }
    }

    validateProstalCode()
    validateProvince();
    validateAge();

    validateEmail();
    validatePass();

    matchPassword();

    if (!alertmessages == "") {
        var alertdiv = document.getElementById("alertdiv");

        var alertmessage = document.createElement('div');
        alertmessage.className = "alert";
        alertmessage.innerHTML = alertmessages;

        alertdiv.appendChild(alertmessage);

    } else {
        var alertdiv = document.getElementById("alertdiv");

        var alertmessage = document.createElement('div');
        alertmessage.className = "success";
        alertmessage.innerHTML = "Thanks for registering with our website, your customer record was created successfully. ";

        alertdiv.appendChild(alertmessage);
    }
}

function validatePass() {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!re.test(Password.value) && Password.value != "") {
        Password.style.background = "rgb(255,233,233)";
        Confirm.style.background = "rgb(255,233,233)";
        alertmessages += "Pasword must have at least 6 characters, contain at least one digit, one upper-case, one lower-case character, and special character<br>"
    }
}

function matchPassword() {
    if (Password.value != Confirm.value && Password.value != "" && Confirm.value != "") {
        Confirm.style.background = "rgb(255,233,233)";
        alertmessages += "Password and confirm password should be same<br>"
    }
}

function validateEmail() {
    var re = /\S+@\S+\.\S+/;
    if (!re.test(Email.value) && Email.value != "") {
        Email.style.background = "rgb(255,233,233)";
        alertmessages += "Input email correctly (e.g. abc@xyz.com)<br>";
    }
}

function validateAge() {
    if (Age.value < 18 && Age.value != "") {
        Age.style.background = "rgb(255,233,233)";
        alertmessages += "Age must be atleast 18 years old<br>";
    }
}

function validateProvince() {
    const myStringArray = ["QC", "ON", "MN", "SK", "AB", "BC"];
    if (!myStringArray.includes(Province.value) && Province.value != "") {
        Province.style.background = "rgb(255,233,233)";
        alertmessages += "The province " + Province.value + " is not allowed. Please enter: QC, ON, MN, SK, AB, or BC<br>";
    }
}

function validateProstalCode() {
    if (!PCode.value == 0) {
        PCode.style.background = "rgb(255,233,233)";
        postalCode = PCode.value.toString().trim();
        var ca = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);

        if (!ca.test(postalCode.toString())) {
            alertmessages += "Enter postal code correctly<br>";
        }
    }
}




function createEventListeners() {

    var submitbtn = document.getElementById("RegisterNow");

    if (submitbtn.addEventListener) {
        submitbtn.addEventListener("click", validate, false);
    } else if (submitbtn.attachEvent) {
        submitbtn.attachEvent("onclick", validate);
    }
}



if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}