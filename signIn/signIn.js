{/* <script> */}


let generatedOTP;
let userEmail;
let userName = "";

// Function to generate a 4-digit OTP
function generateOTP() {
    generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit OTP
    localStorage.setItem('Generated OTP', generatedOTP)
    console.log('Generated OTP:', generatedOTP); // Logs the OTP to the console (for development/testing purposes)
    alert(`Your OTP is ${generatedOTP}`);
}

// Validate email or phone number and move to Step 2
function validateEmailOrPhone() {
    const emailInput = document.getElementById("email-input").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailInput);

    const isValidPhone = emailInput.length >= 10;
    // const storedEmail = JSON.parse(localStorage.getItem('registeredUsers'))?.email;
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    //  const storedEmail = localStorage.getItem('EmailOrPhone')
    const isUserRegistered = registeredUsers.some(user => user.email === emailInput || user.phoneNumber === emailInput);

    if (isValidEmail || isValidPhone) {
        userEmail = emailInput;
        if(isUserRegistered){
            window.location.href = 'logIn.html'
        } else {
            localStorage.setItem('EmailOrPhone', userEmail);
            document.getElementById("user-email").textContent =  userEmail ;
            showStep(2);
            generateOTP();
        }
       

    } else {
        alert("Please enter a valid email or phone number.");
    }
}

// Function to verify the OTP and move to Step 3
function verifyOTP() {
    const otp = document.getElementById("otp-1").value + document.getElementById("otp-2").value +
        document.getElementById("otp-3").value + document.getElementById("otp-4").value;
    if (otp == generatedOTP) {
        document.getElementById("email-display").value = userEmail;
        alert("otp verified succesfully")
        showStep(3);
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

// Validate passwords and move to Step 4
function validatePasswords() {
    const password = document.getElementById("password-input").value;
    const confirmPassword = document.getElementById("confirm-password-input").value;
    const isPasswordStrong = password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password);
        
        // &&
        // /[!@#$%^&*]/.test(password);


    
    if (password && confirmPassword && password === confirmPassword && isPasswordStrong) {
        localStorage.setItem('password', password)
        showStep(4);
    } else if (!isPasswordStrong) {
        alert("Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers");
    }else{
        alert("Passwords do not match.");
    }
}

// Validate personal details in Step 4 and move to Step 5
function validateStep4Details() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;

    if (firstName && lastName && phoneNumber) {
        localStorage.setItem('name', firstName)
        localStorage.setItem('lastname', lastName)
        localStorage.setItem('phoneNumber', phoneNumber)
        showStep(5);
    } else {
        alert("Please fill in all the required details.");
    }
}

// Validate personal details in Step 5 and move to Step 6


function validateStep5Details() {
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const termsCheckbox = document.getElementById("terms-checkbox").checked;
    const Name = document.getElementById("name");
    Name.textContent = `${userName} !`;
    if (gender && dob && termsCheckbox) {
        localStorage.setItem('gender', gender)
        localStorage.setItem('dob',dob)
        showStep(6);

        startTimer(); // Start the timer for Step 6

    } else {
        alert("Please complete all required fields and agree to the terms.");
    }

    if (termsCheckbox) {
        document.querySelector(".checkBtn").classList.add("active");
    } else {
        document.querySelector(".checkBtn").classList.remove("active")
    }
}

// Function to toggle the "Continue" button in Step 5 based on the terms checkbox
function toggleContinueButton() {

    const termsCheckbox = document.getElementById("terms-checkbox").checked;
    const continueButton = document.getElementById("continue-personal-step5");

    continueButton.disabled = !termsCheckbox;

    if (termsCheckbox) {
        continueButton.classList.add("active");
    } else {
        continueButton.classList.remove("active");
    }
}

// Show the step by hiding others
function showStep(stepNumber) {
    const steps = document.getElementsByClassName("step");
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = "none";
    }
    document.getElementById(`step${stepNumber}`).style.display = "block";
}

// Move to the next OTP input box
function moveToNext(currentInput, nextInputId, prevInputId) {

    if (currentInput.value.length === currentInput.maxLength) {
        if (nextInputId) {
            document.getElementById(nextInputId).focus();
        }
    }

    currentInput.addEventListener('keydown', function (e) {
        const currentInputValue = currentInput.value
        if (e.key === 'Backspace') {
            if (currentInputValue.length > 0) {
                currentInput.value = '';
                e.preventDefault();
            } else if (prevInputId) {
                document.getElementById(prevInputId).focus();
            }
        }
    })
}
// Timer and redirect for Step 6
function startTimer() {
    let timeLeft = 30; // Countdown from 30 seconds
    const register = document.querySelector(".register");
    const timerElement = document.getElementById("timer");
    const password = document.getElementById("password-input").value;
    const firstName = localStorage.getItem('name');
    const lastName = localStorage.getItem('lastname');

    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `${timeLeft} `;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            register.classList.add("active");

            // Retrieve registered users from localStorage
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));

            // Check if registeredUsers is an array, if not, initialize it
            if (!Array.isArray(registeredUsers)) {
                registeredUsers = [];
            }

            // Store registered user details
            registeredUsers.push({
                email: userEmail,
                password: password,
                name: `${firstName} ${lastName}`
            });

            // Save updated registeredUsers array to localStorage
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            window.location.href = "login.html"; // Redirect to index.html when timer reaches 0
        }
    }, 1000);
}




// username
document.getElementById("first-name").addEventListener("input", function () {
    userName = this.value
})
// Validate only numbers in OTP input fields
function validateKey(event) {
    const key = event.key;
    if (!/^\d$/.test(key)) {
        event.preventDefault();
    }
}
// </script>