// define global variables for html elements
let registrationForm = document.getElementById('registrationForm');
let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');

// define global variables for error messages
let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let confirmPasswordError = document.getElementById('confirmPasswordError');

// event listener if the input is clicked
let usernameClicked = false;

usernameInput.addEventListener("focus", () => {
    usernameClicked = true;
})

// event listener for username input field
usernameInput.addEventListener("input", (event) => {
    // run everything only if the username has focus
    if (usernameClicked === true) {
        if (usernameInput.validity.valueMissing){
            // add the invalid class and remove valid
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
            usernameError.innerText = "Username required";
        } else if (usernameInput.value.length < 8){
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
            usernameError.innerText = "Username too short";
        } else {
            usernameInput.classList.add('valid');
            usernameInput.classList.remove('invalid');
            usernameError.innerText = '';
        }
    } else {
        // if it's false exit the event listener
        return;
    }
});

// add blur event listener so user is alerted when they move from the input field without a valid username 
usernameInput.addEventListener("blur", (event) => {
    if (usernameClicked === true) {
        if (usernameInput.validity.valueMissing){
            usernameError.innerText = "Username required";
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
        } else if (usernameInput.value.length < 8){
            usernameError.innerText = "Username too short";
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
        } else {
            usernameError.innerText = "";
            usernameInput.classList.add('valid');
            usernameInput.classList.remove('invalid');
        } 
    } else {
        return;
    }
});