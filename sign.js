
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("تم الإرسال بنجاح ✈️");
    });
});
// Forgot Password
const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
    forgotForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Reset link sent to your email ✈️");
    });
}
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav-links");

if (toggle) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// نجيب الفورم
const form = document.querySelector(".glass-box");

// نسمع حدث submit
form.addEventListener("submit", function (x) {

    // نجيب القيم
    const email = form.querySelector("input[type='email']").value;
    const password = form.querySelector("input[type='password']").value;

    // validation بسيط
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email");
        x.preventDefault(); // يمنع الإرسال
        return;
    }

    if (password === "" || password.length < 6) {
        alert("Password must be at least 6 characters");
        e.preventDefault();
        return;
    }

    // لو كله تمام
    alert("Login successful ✅");
});
