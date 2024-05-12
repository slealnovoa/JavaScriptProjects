function bmrMetric(age, weight, height, Gender, activity) {
    event.preventDefault();
    var age = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var Gender = document.getElementById("Gender").value;
    var activity = document.getElementById("activity").value;
    var bmr;

    if (Gender === "Male") {
        bmr = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age);
    }
    if (Gender === "Female") {
        bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    var caloriesPerDay;
    switch (activity) {
        case '1':
            caloriesPerDay = bmr * 1.2;
            break;

        case '2':
            caloriesPerDay = bmr * 1.375;
            break;

        case '3':
            caloriesPerDay = bmr * 1.55;
            break;

        case '4':
            caloriesPerDay = bmr * 1.725;
            break;

        case '5':
            caloriesPerDay = bmr * 1.9;
            break;
    }
    var bmrThreeDec = bmr.toFixed(3);
    var caloriesPerDayThreeDec = caloriesPerDay.toFixed(3);

    document.getElementById('resultBmr').innerHTML = bmrThreeDec;
    document.getElementById('resultCal').innerHTML = caloriesPerDayThreeDec;
}

var submit = document.getElementById("submitMetric");
submit.addEventListener("click", bmrMetric, false);

function bmrImperial(heightImperial, ageImperial, activityImperial, GenderImperial, weightImperial) {
    event.preventDefault();
    var ageImperial = parseInt(document.getElementById("ageImperial").value);
    var weightImperial = parseInt(document.getElementById("weightImperial").value);
    var heightImperial = parseInt(document.getElementById("heightImperial").value);
    var GenderImperial = document.getElementById("GenderImperial").value;
    var activityImperial = document.getElementById("activityImperial").value;
    var bmrImp;

    if (GenderImperial === "Male") {
        bmrImp = 66 + (6.2 * weightImperial) + (12.7 * heightImperial) - (6.76 * ageImperial);
    }
    if (GenderImperial === "Female") {
        bmrImp = 655 + (4.35 * weightImperial) + (4.7 * heightImperial) - (4.7 * ageImperial)
    }
    var caloriesPerDayImp;
    switch (activityImperial) {

        case '1':
            caloriesPerDayImp = bmrImp * 1.2;
            break;

        case '2':
            caloriesPerDayImp = bmrImp * 1.375;
            break;

        case '3':
            caloriesPerDayImp = bmrImp * 1.55;
            break;

        case '4':
            caloriesPerDayImp = bmrImp * 1.725;
            break;

        case '5':
            caloriesPerDayImp = bmrImp * 1.9;
            break;
    }
    var bmrImp3Dec = bmrImp.toFixed(3)
    var caloriesPerDayImp3Dec = caloriesPerDayImp.toFixed(3)

    document.getElementById('resultBmr2').innerHTML = bmrImp3Dec;
    document.getElementById('resultCal2').innerHTML = caloriesPerDayImp3Dec;
}

var submit = document.getElementById("submitImperial");
submit.addEventListener("click", bmrImperial, false);