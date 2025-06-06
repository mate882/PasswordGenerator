const LengthOfPassword = document.getElementById("lenght");
const LowerCase = document.getElementById("lowercase");
const UpperCase = document.getElementById("uppercase");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");
const result = document.getElementById("generated");
const generate = document.getElementById("generate");

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowerCase ? lower : "";
    allowedchars += includeUpperCase ? upper : "";
    allowedchars += includeNumbers ? num : "";
    allowedchars += includeSymbols ? sym : "";

    if (length <= 0) {
        alert("Password length must be at least 1");
        return "";
    }

    if (length > 20) {
        alert("Password length must not exceed 20 characters");
        return "";
    }

    if (allowedchars.length === 0) {
        alert("You need to select at least 1 character type");
        return "";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}

generate.onclick = function () {
    const lowerCase = LowerCase.checked;
    const upperCase = UpperCase.checked;
    const numbers = Numbers.checked;
    const symbols = Symbols.checked;
    const length = parseInt(LengthOfPassword.value); 
    
    const password = generatePassword(length, lowerCase, upperCase, numbers, symbols);
    result.textContent = `Your Password: ${password}`;
};
