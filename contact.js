let form = document.forms;
let phone = document.getElementById('phone');
let name = document.getElementById('name');
let email = document.getElementById('email');
let submit = document.getElementById('submit');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
submit.onclick = function (e) {
    // إعادة تعيين الرسايل (عشان لو الخطأ اتصلح تختفي)
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    let check = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // check email
    if (email.value === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = 'block';
        check = false;
    }
    else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email (e.g. name@mail.com)";
        emailError.style.display = 'block';
        check = false;
    }
    // check phone
    if (phone.value === "") {
        phoneError.textContent = "Phone number is required";
        phoneError.style.display = 'block';
        check = false;
    }
    else if (phone.value.length < 11) {
        phoneError.textContent = "Phone number must be at least 11 digits";
        phoneError.style.display = 'block';
        check = false;
    }
    if (check === false) {
        e.preventDefault();
    }
}
