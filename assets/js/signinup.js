const form = document.getElementById("form");
const firstname = document.getElementById("firstname_input");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input");
const repeatPassword = document.getElementById("repeat_password_input");
const errorMessage = document.getElementById("error_message");

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    let errors = [];

    if (firstname) {
        // we are in the sign up
        errors = getSignupFormErrors(firstname.value, email.value, password.value, repeatPassword.value);
    }
    else {
        // we are in the log in
        errors = getLoginFormErrors(email.value, password.value);
    }

    if (errors.length > 0) { 
        // any errors
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = [];

    if(firstname === "" || firstname == null){
        errors.push("Firstname is required");
        firstname_input.parentElement.classList.add("incorrect");
    }

    if(email === "" || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    }

    if(password === "" || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    }

    if(password.length < 8) {
        errors.push("Password must have at least 8 characters");
        password_input.parentElement.classList.add("incorrect");
    }

    if(password !== repeatPassword) {
        errors.push('Password does not match repeated password');
        password_input.parentElement.classList.add("incorrect");
        repeat_password_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

function getLoginFormErrors(email, password){
    let errors = [];

    if(email === "" || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    }

    if(password === "" || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

const allInputs = [firstname, email, password, repeatPassword].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.contains("incorrect")) {
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = "";
        }
    })
})