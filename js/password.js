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