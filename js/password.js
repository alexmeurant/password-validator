// Checks if password has 8-20 characters:
function isLongEnough(input) {
    if (input.length >= 8 && input.length <= 20) {
        return true;
    }
}

// Checks if password has an uppercase letter:
function hasUppercase(input) {
    if (/[A-Z]/.test(input)) {
        return true;
    }
}

// Checks if password has a lowercase letter:
function hasLowercase(input) {
    if (/[a-z]/.test(input)) {
        return true;
    }
}

// Checks if password has at least a number:
function hasNumber(input) {
    if (/[0-9]/.test(input)) {
        return true;
    }
}