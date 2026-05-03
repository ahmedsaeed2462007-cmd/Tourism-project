
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