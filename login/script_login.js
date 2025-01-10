function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-form").classList.add("hidden");
}

function showSignUp() {
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    alert(`Login Data:\nUsername: ${username}\nPassword: ${password}`);
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let newUsername = document.getElementById("new-username").value;
    let email = document.getElementById("email").value;
    let newPassword = document.getElementById("new-password").value;

    alert(`Sign Up Data:\nUsername: ${newUsername}\nEmail: ${email}\nPassword: ${newPassword}`);
});

document.getElementById("new-password").addEventListener("input", function() {
    const password = this.value;

    
    const lengthCondition = password.length >= 8;
    const uppercaseCondition = /[A-Z]/.test(password);
    const lowercaseCondition = /[a-z]/.test(password);
    const numberCondition = /[0-9]/.test(password);
    const specialCharCondition = /[@$!%*?&]/.test(password);

    updateCondition("length-condition", lengthCondition);
    updateCondition("uppercase-condition", uppercaseCondition);
    updateCondition("lowercase-condition", lowercaseCondition);
    updateCondition("number-condition", numberCondition);
    updateCondition("special-char-condition", specialCharCondition);
});

function updateCondition(elementId, condition) {
    const element = document.getElementById(elementId);
    if (condition) {
        element.textContent = "✔️"; // علامة صح
        element.classList.remove("fail");
        element.classList.add("success");
    } else {
        element.textContent = "✖️"; // علامة خطأ
        element.classList.remove("success");
        element.classList.add("fail");
    }
}
