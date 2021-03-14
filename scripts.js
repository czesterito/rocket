let button = document.getElementById("ok-button");
let password = document.getElementById("pass");
let disChbox = document.getElementsByName("ch-box");
let disLever = document.getElementsByName("lever");
let startButton = document.getElementById("launch-button");
let rocket = document.getElementById("rocket");
let correctpass = "TrustNo1";

//checking if password is correct and if it is - disable "disable" attribute
function passCheck(){
    if (correctpass === password.value){
        for (let i = 0; i < disChbox.length; i++){
            disChbox[i].disabled = false;
        }
        for (let i = 0; i < disLever.length; i++){
            disLever[i].disabled = false;
        }
    } else {
        console.log("Wrong password");
    }
}

button.addEventListener("click", passCheck);

//checking if checkboxes are clicked
function checkButtons(){
    for (let i = 0; i < disChbox.length; i++){
        if (disChbox[i].checked === false){
            return false;
        }
    }
    return true;
}

//checking if "levers" have max values
function checkLevers(){
    for (let i = 0; i < disLever.length; i++){
        if (disLever[i].value !== disLever[i].max){
            return false;
        }
    }
    return true;
}

//changing "disable" state of startButton element if both checkboxes are clicked and "levers" have max value
function changeStartButton(){
    let chbox = checkButtons();
    let lev = checkLevers();
    if (chbox && lev === true){
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

//listening to "change" event of checkboxes
disChbox.forEach(function (item){
    item.addEventListener("change", changeStartButton)
})

//listening to "click" event ov "levers"
disLever.forEach(function (item){
    item.addEventListener("click", changeStartButton)
})

function startAnimation(){
    rocket.classList.add("animation");
}

startButton.addEventListener("click", startAnimation);