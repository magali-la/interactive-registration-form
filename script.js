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

// handle form submission
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // if every input is valid, give user alert 
    if (usernameInput.validity.valid && emailInput.validity.valid && passwordInput.validity.valid && confirmPasswordInput.validity.valid){
        alert("Everything is valid, Form submitted and username saved! Refresh the page.");
        // store the username in local storage and refresh the page or remove all inputs
        localStorage.setItem('username', usernameInput.value);
        registrationForm.reset();
    } else {
        alert("Please fill out invalid fields!");
    }
});

// handle local storage and retrieve username once the page loads
window.addEventListener("load", () => {
    let savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert("Your username was saved!");
        usernameInput.value = savedUsername;
    };
});

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

// email section
// event listener if the input is clicked
let emailClicked = false;

emailInput.addEventListener("focus", () => {
    emailClicked = true;
});

// event listener for username input field
emailInput.addEventListener("input", (event) => {
    // run everything only if the username has focus
    if (emailClicked === true) {
        if (emailInput.validity.valueMissing){
            // add the invalid class and remove valid
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.innerText = "Email required";
        } else if (emailInput.validity.typeMismatch){
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.innerText = "Email invalid";
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailError.innerText = '';
        }
    } else {
        // if it's false exit the event listener
        return;
    }
});

// add blur event listener so user is alerted when they move from the input field without a valid email 
emailInput.addEventListener("blur", (event) => {
    // run everything only if the username has focus
    if (emailClicked === true) {
        if (emailInput.validity.valueMissing){
            // add the invalid class and remove valid
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.innerText = "Email required";
        } else if (emailInput.validity.typeMismatch){
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.innerText = "Email invalid";
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailError.innerText = '';
        }
    } else {
        // if it's false exit the event listener
        return;
    }
});

// password section
let passwordClicked = false;

passwordInput.addEventListener("focus", () => {
    passwordClicked = true;
})

passwordInput.addEventListener("input", (event) => {
    if (passwordClicked == true){
        if (passwordInput.validity.patternMismatch){
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.innerText = 'Password does not meet all requirements';
        } else if (passwordInput.validity.valueMissing){
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.innerText = 'Password required'; 
        } else {
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid');
            passwordError.innerText = '';
        }
    } else {
        return;
    };
});

passwordInput.addEventListener("blur", (event) => {
    if (passwordClicked == true){
        if (passwordInput.validity.patternMismatch){
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.innerText = 'Password does not meet all requirements';
        } else if (passwordInput.validity.valueMissing){
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.innerText = 'Password required'; 
        } else {
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid');
            passwordError.innerText = '';
        }
    } else {
        return;
    };
});

let confirmClicked = false;
confirmPasswordInput.addEventListener("focus", () => {
    confirmClicked = true;
});

confirmPasswordInput.addEventListener("input", (event) => {
    if (confirmClicked == true) {
        if (confirmPasswordInput.value !== passwordInput.value){
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.innerText = 'Password does not match'
        } else if (confirmPasswordInput.validity.valueMissing){
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.innerText = 'Password confirmation required'
        } else {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
            confirmPasswordError.innerText = '';
        }
    } else {
        return;
    }
});

confirmPasswordInput.addEventListener("blur", (event) => {
    if (confirmClicked == true) {
        if (confirmPasswordInput.value !== passwordInput.value){
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.innerText = 'Password does not match'
        } else if (confirmPasswordInput.validity.valueMissing){
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.innerText = 'Password confirmation required'
        } else {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
            confirmPasswordError.innerText = '';
        }
    } else {
        return;
    }
});


