window.onload = function () {
    // 1. جلب البيانات من localStorage
    let name = localStorage.getItem('userName');
    let email = localStorage.getItem('userEmail');
    let country = localStorage.getItem('userCountry');
    let pass = localStorage.getItem('userPass'); // جلب الباسورد

    // 2. وضع البيانات في الـ HTML باستخدام الـ IDs الجديدة
    if (name) {
        document.getElementById('acc-name').innerText = name;
        document.getElementById('welcome-msg').innerText = "Welcome, " + name + "!";
    }

    if (email) {
        document.getElementById('acc-email').innerText = email;
    }

    if (country) {
        document.getElementById('acc-country').innerText = country;
    }

    if (pass) {
        document.getElementById('acc-pass').innerText = pass;
    }
}

