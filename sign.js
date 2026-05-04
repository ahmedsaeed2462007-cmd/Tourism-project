let pass = document.getElementById('pass');
let email = document.getElementById('email');
let submit = document.getElementById('submit');
let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');
submit.onclick = function (e) {
    emailError.style.display = 'none';
    passError.style.display = 'none';
    let check = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = 'block';
        check = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email (e.g. name@mail.com)";
        emailError.style.display = 'block';
        check = false;
    }
    if (pass.value.trim() === "") {
        passError.textContent = "Password is required";
        passError.style.display = 'block';
        check = false;
    } else if (pass.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        passError.style.display = 'block';
        check = false;
    }
    if (check === false) {
        e.preventDefault();
    } else {
        alert("Account Created Successfully!");
    }
}

