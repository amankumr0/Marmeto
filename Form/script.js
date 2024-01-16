// script.js

// Get the form element
const form = document.getElementById("myForm");

// Get the input elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dateOfBirth = document.getElementById("dateOfBirth");
const country = document.getElementById("country");
const terms = document.getElementById("terms");
const gender = document.querySelector('input[name="gender"]:checked')

// Get the error elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const dateOfBirthError = document.getElementById("dateOfBirthError");
const countryError = document.getElementById("countryError");
const termsError = document.getElementById("termsError");

// Define a function to validate the form
// function validateForm() {
//   // Initialize a flag to indicate if the form is valid
//   let isValid = true;

//   // Clear any previous errors
//   usernameError.textContent = "";
//   emailError.textContent = "";
//   passwordError.textContent = "";
//   confirmPasswordError.textContent = "";
//   dateOfBirthError.textContent = "";
//   countryError.textContent = "";
//   termsError.textContent = "";

//   // Validate the username
//   // It should be alphanumeric and between 5 to 15 characters
//   const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
//   if (!usernameRegex.test(username.value)) {
//     usernameError.textContent = "Username should be alphanumeric and between 5 to 15 characters";
//     isValid = false;
//   }

//   // Validate the email
//   // It should be in a valid email format
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailRegex.test(email.value)) {
//     emailError.textContent = "Email should be in a valid format";
//     isValid = false;
//   }

//   // Validate the password
//   // It should be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
//   if (!passwordRegex.test(password.value)) {
//     passwordError.textContent = "Password should be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters";
//     isValid = false;
//   }

//   // Validate the confirm password
//   // It should match the entered password
//   if (confirmPassword.value !== password.value) {
//     confirmPasswordError.textContent = "Passwords do not match";
//     isValid = false;
//   }

//   // Validate the date of birth
//   // Users must be at least 18 years old
//   const today = new Date();
//   const dob = new Date(dateOfBirth.value);
//   const age = today.getFullYear() - dob.getFullYear();
//   const monthDiff = today.getMonth() - dob.getMonth();
//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//     age--;
//   }
//   if (age < 18) {
//     dateOfBirthError.textContent = "You must be at least 18 years old";
//     isValid = false;
//   }

//   // Validate the country
//   // A country must be selected
//   if (country.value === "") {
//     countryError.textContent = "Please select a country";
//     isValid = false;
//   }

//   // Validate the terms and conditions
//   // The checkbox must be checked
//   if (!terms.checked) {
//     termsError.textContent = "You must agree to the terms and conditions";
//     isValid = false;
//   }

//   // Return the validity flag
//   return isValid;
// }

let date = new Date().toISOString().split('T')[0];

dateOfBirth.setAttribute("max", `${date}`)





username.addEventListener("input", (e) => {
    let err_succ = document.querySelector('span[id="usernameError"]')
    let input_string = e.target.value;
    if (input_string.match(/^[0-9a-zA-Z]+$/) && input_string.length >= 5 && input_string.length <= 15) {
        console.log("match")
        e.target.classList.remove("mr-input")
        e.target.classList.add("success")
        err_succ.classList.remove("error")
        err_succ.classList.add("success-msg")

        document.querySelector('i[data-flag="username-flag"]').classList.remove("bx-error-circle")
        document.querySelector('i[data-flag="username-flag"]').classList.add("bx-check")
    } else {
        e.target.classList.remove("success")
        e.target.classList.add("mr-input")
        err_succ.classList.add("error")
        err_succ.classList.remove("success-msg")
        document.querySelector('i[data-flag="username-flag"]').classList.remove("bx-check")
        document.querySelector('i[data-flag="username-flag"]').classList.add("bx-error-circle")
    }
})

email.addEventListener("input", (e) => {
    let err_succ = document.querySelector('span[id="emailError"]')
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let input_string = e.target.value;
    if (input_string.match(re)) {
        console.log("match")
        e.target.classList.remove("mr-input")
        e.target.classList.add("success")
        err_succ.classList.remove("error")
        err_succ.classList.add("success-msg")
        document.querySelector('i[data-flag="email-flag"]').classList.remove("bx-error-circle")
        document.querySelector('i[data-flag="email-flag"]').classList.add("bx-check")

    } else {
        e.target.classList.remove("success")
        e.target.classList.add("mr-input")
        err_succ.classList.add("error")
        err_succ.classList.remove("success-msg")
        document.querySelector('i[data-flag="email-flag"]').classList.remove("bx-check")
        document.querySelector('i[data-flag="email-flag"]').classList.add("bx-error-circle")
    }
})

password.addEventListener("input", (e) => {
    let err_succ = document.querySelector('span[id="passwordError"]')

    let input_string = e.target.value;

    const eightCharRex = input_string.length >= 8;

    const lowerCaseRex = /[a-z]/.test(input_string)
    // const lowerCaseRex = input_string.match("^[a-z]+")
    // const upperCaseRex = input_string.match("^[A-Z]+")
    const upperCaseRex = /[A-Z]/.test(input_string)
    const specialChar = /[!@#$%^&+()]/.test(input_string)
    const numberRex = /\d/.test(input_string)


    if (eightCharRex) {
        document.querySelector(".eightChar").classList.remove("error")
        document.querySelector(".eightChar").classList.add("success-msg")
    } else {
        document.querySelector(".eightChar").classList.remove("success-msg")
        document.querySelector(".eightChar").classList.add("error")
    }

    if (lowerCaseRex) {
        document.querySelector(".lowerCase").classList.remove("error")
        document.querySelector(".lowerCase").classList.add("success-msg")
    } else {
        document.querySelector(".lowerCase").classList.remove("success-msg")
        document.querySelector(".lowerCase").classList.add("error")
    }

    if (upperCaseRex) {
        document.querySelector(".upperCase").classList.remove("error")
        document.querySelector(".upperCase").classList.add("success-msg")
    } else {
        document.querySelector(".upperCase").classList.remove("success-msg")
        document.querySelector(".upperCase").classList.add("error")
    }

    if (numberRex) {
        document.querySelector(".numbers").classList.remove("error")
        document.querySelector(".numbers").classList.add("success-msg")
    } else {
        document.querySelector(".numbers").classList.remove("success-msg")
        document.querySelector(".numbers").classList.add("error")
    }

    if (specialChar) {
        document.querySelector(".specialChar").classList.remove("error")
        document.querySelector(".specialChar").classList.add("success-msg")
    } else {
        document.querySelector(".specialChar").classList.remove("success-msg")
        document.querySelector(".specialChar").classList.add("error")
    }


    if (lowerCaseRex && upperCaseRex && eightCharRex && specialChar && numberRex) {
        console.log("match")
        e.target.classList.remove("mr-input")
        e.target.classList.add("success")
        err_succ.classList.remove("error")
        err_succ.classList.add("success-msg")
        document.querySelector('i[data-flag="pass-flag"]').classList.remove("bx-error-circle")
        document.querySelector('i[data-flag="pass-flag"]').classList.add("bx-check")

    } else {
        e.target.classList.remove("success")
        e.target.classList.add("mr-input")
        err_succ.classList.add("error")
        err_succ.classList.remove("success-msg")
        document.querySelector('i[data-flag="pass-flag"]').classList.remove("bx-check")
        document.querySelector('i[data-flag="pass-flag"]').classList.add("bx-error-circle")
    }
})

dateOfBirth.addEventListener('change', function (e) {
    console.log(e.target.value)
    let today = new Date();
    let dob = new Date(e.target.value)
    const oneDay = 24 * 60 * 60 * 1000;

    let dateDiff = Math.round(Math.abs((today - dob) / oneDay) * 365);
    console.log(dateDiff)

})


confirmPassword.addEventListener("input", (e) => {
    let err_succ = document.querySelector('span[id="confirmPasswordError"]')
    let input_string = e.target.value;
    if (password.value == input_string && input_string.length) {
        console.log("match")
        e.target.classList.remove("mr-input")
        e.target.classList.add("success")
        err_succ.classList.remove("error")
        err_succ.classList.add("success-msg")

    } else {
        e.target.classList.remove("success")
        e.target.classList.add("mr-input")
        err_succ.classList.add("error")
        err_succ.classList.remove("success-msg")
    }
})


document.querySelector("#myForm").addEventListener("submit", function (e) {
    e.preventDefault()
    const checkVal = document.querySelector("#terms").value
    if (checkVal) {
        document.querySelector("#terms").style.display = "block"
    } else {
        document.querySelector("#terms").style.display = "none"
    }


    const str = `<div>
    <h2>Username : ${username.value}</h2>
    <h2>Email : ${email.value}</h2>
    <h2>Password : ${password.value}</h2>
    <h2>DOB : ${dateOfBirth.value}</h2>
    <h2>Country : ${country.value}</h2>
    <h2>Gender : ${gender.value}</h2>
    </div>`
    document.querySelector(".data").style.display = "flex"
    document.querySelector(".data").innerHTML = str
})