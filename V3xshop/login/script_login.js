// إظهار نموذج تسجيل الدخول أو التسجيل
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

function showSignUp() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// التحقق من نموذج تسجيل الدخول
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let usernameError = document.getElementById("login-username-error");
    let passwordError = document.getElementById("login-password-error");

    // التحقق من صحة البيانات
    let isValid = true;

    // التحقق من اسم المستخدم
    if (username.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters long.";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    // التحقق من كلمة المرور
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        alert(`Login Data:\nUsername: ${username}\nPassword: ${password}`);
    }
});

// التحقق من نموذج التسجيل
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let newUsername = document.getElementById("new-username").value;
    let email = document.getElementById("email").value;
    let newPassword = document.getElementById("new-password").value;

    let usernameError = document.getElementById("signup-username-error");
    let emailError = document.getElementById("signup-email-error");

    // التحقق من صحة البيانات
    let isValid = true;

    // التحقق من اسم المستخدم
    if (newUsername.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters long.";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    // التحقق من البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // التحقق من كلمة المرور
    const lengthCondition = newPassword.length >= 8;
    const uppercaseCondition = /[A-Z]/.test(newPassword);
    const lowercaseCondition = /[a-z]/.test(newPassword);
    const numberCondition = /[0-9]/.test(newPassword);
    const specialCharCondition = /[@$!%*?&]/.test(newPassword);

    if (!lengthCondition || !uppercaseCondition || !lowercaseCondition || !numberCondition || !specialCharCondition) {
        alert("Please ensure all password conditions are met.");
        isValid = false;
    }

    // إذا كانت جميع الشروط صحيحة
    if (isValid) {
        alert("Sign up successful!");
    }
});

// التحقق من كلمة المرور عند الكتابة
document.getElementById("new-password").addEventListener("input", function() {
    const password = this.value;

    // الشروط
    const lengthCondition = password.length >= 8;
    const uppercaseCondition = /[A-Z]/.test(password);
    const lowercaseCondition = /[a-z]/.test(password);
    const numberCondition = /[0-9]/.test(password);
    const specialCharCondition = /[@$!%*?&]/.test(password);

    // تحديث واجهة المستخدم بناءً على تحقق الشروط
    updateCondition("length-condition", lengthCondition);
    updateCondition("uppercase-condition", uppercaseCondition);
    updateCondition("lowercase-condition", lowercaseCondition);
    updateCondition("number-condition", numberCondition);
    updateCondition("special-char-condition", specialCharCondition);
});

// تحديث الشروط في واجهة المستخدم
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
