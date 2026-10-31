
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const progressBar = document.getElementById("progressBar");
const strengthText = document.getElementById("strengthText");
const tip = document.getElementById("tip");

const checks = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
};

function updateCheck(element, condition, text) {
    element.classList.toggle("valid", condition);
    element.textContent = (condition ? "✅ " : "❌ ") + text;
}

password.addEventListener("input", () => {

    const value = password.value;

    const rules = {
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[^A-Za-z0-9]/.test(value)
    };

    updateCheck(checks.length, rules.length, "At least 8 characters");
    updateCheck(checks.uppercase, rules.uppercase, "One uppercase letter (A-Z)");
    updateCheck(checks.lowercase, rules.lowercase, "One lowercase letter (a-z)");
    updateCheck(checks.number, rules.number, "One number (0-9)");
    updateCheck(checks.special, rules.special, "One special character (!@#$%)");

    const score = Object.values(rules).filter(Boolean).length;

    const strengths = [
        { text: "Very Weak", color: "#ff4d4d", width: "10%" },
        { text: "Weak", color: "#ff784e", width: "25%" },
        { text: "Fair", color: "#ffbd44", width: "50%" },
        { text: "Good", color: "#46c8d5", width: "75%" },
        { text: "Strong", color: "#4ade80", width: "100%" }
    ];

    if (!value) {
        strengthText.textContent = "Not entered";
        progressBar.style.width = "0%";
        progressBar.style.background = "transparent";
        tip.textContent = "💡 Enter a password to check its strength.";
        return;
    }

    const result = strengths[score];

    strengthText.textContent = result.text;
    strengthText.style.color = result.color;

    progressBar.style.width = result.width;
    progressBar.style.background = result.color;

    if (score <= 1) {
        tip.textContent = "⚠️ Your password is very weak. Add more characters and variety.";
    } else if (score === 2) {
        tip.textContent = "💡 Add uppercase letters, numbers and symbols.";
    } else if (score === 3) {
        tip.textContent = "👍 Good start! Add more password requirements.";
    } else if (score === 4) {
        tip.textContent = "✨ Almost there! Meet all five requirements.";
    } else {
        tip.textContent = "🎉 Great! Your password meets all five requirements.";
    }
});

// Show / Hide Password
togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "🙈" : "👁";
});

// Clear Password
document.getElementById("clearBtn").addEventListener("click", () => {
    password.value = "";
    password.dispatchEvent(new Event("input"));
    password.focus();
    password.type = "password";
    togglePassword.textContent = "👁";
});
