"use strict";
// variables //////////////////////////////////
var newCar;
var carArray = new Array();
// functions //////////////////////////////////
function createCar(plate, brand, color) {
    var plateI = document.getElementById("plate").value;
    var brandI = document.getElementById("brand").value.toUpperCase();
    var colorI = document.getElementById("color").value.toUpperCase();
    if (validatePlate() && validateBrand() && validateColor()) {
        newCar = new Car(plateI, brandI, colorI);
        carArray.push(newCar);
        document.getElementById("messageCar").innerHTML = "NEW CAR: \n        <br><br>PLATE: " + newCar.plate + "\n        <br>BRAND: " + newCar.brand + "\n        <br>COLOR: " + newCar.color;
        // display and clean fields ////////////////////////////
        document.getElementById("sectionB2").style.display = "block";
        document.getElementById("sectionB1").style.display = "none";
        cleanCarForm();
    }
    console.log(newCar);
}
function addWheel() {
    var wBrand;
    var wDiameter;
    var wheels = new Array(4);
    var car;
    for (var i = 1; i <= 4; i++) {
        wBrand = document.getElementById("brandWheel" + i).value.toUpperCase();
        wDiameter = Number(document.getElementById("diameterWheel" + i).value);
        if (validateWBrand(wBrand, i) == true) {
            wheels.push(wBrand);
        }
        if (validateWDiameter(wDiameter, i) == true) {
            wheels.push(wDiameter);
        }
        newCar.addWheel(new Wheel(wBrand, wDiameter));
    }
    // revise the result /////////////////////
    console.log("wheels: " + wheels);
    console.log(carArray);
}
// validating functions //////////////////////////////////
function validatePlate() {
    var plateI = document.getElementById("plate");
    var isValid = false;
    var error = document.getElementById("carError");
    var regexPlate = /^([0-9]{4})([A-z]{3})$/;
    // validate pattern //////////
    if ((plateI.value.length < 7) || (regexPlate.test(plateI.value) == false)) {
        document.getElementById("plate").setAttribute("class", "incorrect");
        error.innerHTML = "Please, for the plate, follow the required pattern (like: 1111AAA)";
    }
    else {
        document.getElementById("plate").setAttribute("class", "correct");
        isValid = true;
    }
    // validate if plate exist ////////
    for (var _i = 0, carArray_1 = carArray; _i < carArray_1.length; _i++) {
        var carItem = carArray_1[_i];
        if (carItem.plate === plateI.value) {
            isValid = false;
            document.getElementById("plate").setAttribute("class", "incorrect");
            error.innerHTML = "The plate number already exist so, please, enter a new one.";
        }
        else {
            document.getElementById("plate").setAttribute("class", "correct");
            isValid = true;
        }
    }
    return isValid;
}
function validateBrand() {
    var brandI = document.getElementById("brand");
    var isValid = false;
    var error = document.getElementById("carError");
    if (brandI.value == "") {
        document.getElementById("brand").setAttribute("class", "incorrect");
        error.innerHTML = "Please, this field cannot be empty. Enter the brand";
    }
    else {
        document.getElementById("brand").setAttribute("class", "correct");
        isValid = true;
    }
    return isValid;
}
function validateColor() {
    var colorI = document.getElementById("color");
    var isValid = false;
    var error = document.getElementById("carError");
    if (colorI.value == "") {
        document.getElementById("color").setAttribute("class", "incorrect");
        error.innerHTML = "Please, this field cannot be empty. Enter a colour";
    }
    else {
        document.getElementById("color").setAttribute("class", "correct");
        isValid = true;
    }
    return isValid;
}
function validateWBrand(wbrand, i) {
    var isValid = false;
    var error = document.getElementById("brandError");
    if (wbrand == "") {
        document.getElementById("brandWheel" + i).setAttribute("class", "incorrect");
        error.innerHTML = "The wheel brand cannot be empty";
    }
    else {
        document.getElementById("brandWheel" + i).setAttribute("class", "correct");
        error.innerHTML = "";
        isValid = true;
    }
    return isValid;
}
function validateWDiameter(diam, i) {
    var isValid = false;
    var error = document.getElementById("diamError");
    if ((diam < 0.4) || (diam > 2)) {
        document.getElementById("diameterWheel" + i).setAttribute("class", "incorrect");
        error.innerHTML = "The diameter has to be >0.4 and <2";
    }
    else if (diam === null) {
        document.getElementById("diameterWheel" + i).setAttribute("class", "incorrect");
        error.innerHTML = "The diameter cannot be an empty field";
    }
    else {
        document.getElementById("diameterWheel" + i).setAttribute("class", "correct");
        error.innerHTML = "";
        isValid = true;
    }
    return isValid;
}
// cleaning functions //////////////////////////////////
function cleanCarForm() {
    document.getElementById("plate").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("color").value = "";
    document.getElementById("plate").setAttribute("class", "myCarInput");
    document.getElementById("brand").setAttribute("class", "myCarInput");
    document.getElementById("color").setAttribute("class", "myCarInput");
    document.getElementById("carError").innerHTML = "";
    document.getElementById("messageWheel").innerHTML = "";
}
function cleanWheelForm() {
    document.getElementById("brandWheel1").value = "";
    document.getElementById("brandWheel2").value = "";
    document.getElementById("brandWheel3").value = "";
    document.getElementById("brandWheel4").value = "";
    document.getElementById("diameterWheel1").value = "";
    document.getElementById("diameterWheel2").value = "";
    document.getElementById("diameterWheel3").value = "";
    document.getElementById("diameterWheel4").value = "";
    document.getElementById("brandWheel1").setAttribute("class", "myWheelInput");
    document.getElementById("brandWheel2").setAttribute("class", "myWheelInput");
    document.getElementById("brandWheel3").setAttribute("class", "myWheelInput");
    document.getElementById("brandWheel4").setAttribute("class", "myWheelInput");
    document.getElementById("diameterWheel1").setAttribute("class", "myWheelInput");
    document.getElementById("diameterWheel2").setAttribute("class", "myWheelInput");
    document.getElementById("diameterWheel3").setAttribute("class", "myWheelInput");
    document.getElementById("diameterWheel4").setAttribute("class", "myWheelInput");
    document.getElementById("brandError").innerHTML = "";
    document.getElementById("diamError").innerHTML = "";
    document.getElementById("wheelError").innerHTML = "";
}
