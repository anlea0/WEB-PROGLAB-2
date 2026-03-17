
    // Load saved theme and form data on page load
    window.onload = function () {
        // Theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }

        // Form Data
        if (localStorage.getItem("email")) {
            document.getElementById("email").value = localStorage.getItem("email");
            document.getElementById("phone").value = localStorage.getItem("phone");
            document.getElementById("password").value = localStorage.getItem("password");
        }
    }

    function validateForm() {
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;

        let valid = true;

        // Clear old messages
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("passError").innerText = "";
        document.getElementById("successMsg").innerText = "";

        // Email Validation
        if (!email.includes("@")) {
            document.getElementById("emailError").innerText = "Invalid email format";
            valid = false;
        }

        // Phone Validation
        if (phone.length !== 10 || isNaN(phone)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
            valid = false;
        }

        // Password Validation
        if (password.length < 6) {
            document.getElementById("passError").innerText = "Password must be at least 6 characters";
            valid = false;
        }

        // If valid, store data
        if (valid) {
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("password", password);

            document.getElementById("successMsg").innerText =
                "Form submitted successfully and data saved!";
        }
    }

    function toggleTheme() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
