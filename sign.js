document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(e) {

        // لو الفورم بتاع login (glass-box)
        if (form.classList.contains("glass-box")) {

            const email = form.querySelector("input[type='email']").value;
            const password = form.querySelector("input[type='password']").value;

            if (email === "" || !email.includes("@")) {
                alert("Please enter a valid email");
                e.preventDefault();
                return;
            }

            if (password === "" || password.length < 6) {
                alert("Password must be at least 6 characters");
                e.preventDefault();
                return;
            }

            alert("Login successful ✅");
        } 
        
        // باقي الفورمات (زي forgot password)
        else {
            e.preventDefault();
            alert("تم الإرسال بنجاح ✈️");
        }
    });
});
