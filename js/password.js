let checkPassword = document.getElementById("button");
let reportDiv = document.getElementById("report");
let blockAlertDiv = document.getElementById("blockAlert");

// Reports to the user if its password is complex enough when submission:
function isPasswordValid(input) {
    input = document.getElementById("input").value;
    let report = "";
    if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input) && hasNumber(input) && !hasSpaces(input)) {
        report = "This password is valid.";
        // Display alert block with green background color:
        blockAlertDiv.classList.remove("alert-danger");
        blockAlertDiv.className += " alert-success d-block";
    } else {
        if (!isLongEnough(input)) {
            report = "Password must be 8-20 characters long.";
        } else if (!hasUppercase(input)) {
            report = "Password needs at least one uppercase letter.";
        } else if (!hasLowercase(input)) {
            report = "Password needs at least one lowercase letter.";
        } else if (!hasNumber(input)) {
            report = "Password needs at least one number.";
        } else if (!hasSpecialCharacter(input)) {
            report = "Password needs at least one special character.";
        } else if (hasSpaces(input)) {
            report = "Password must not contain spaces.";
        }
        // Display alert block with red background color:
        blockAlertDiv.classList.remove("alert-success");
        blockAlertDiv.className += " alert-danger d-block";
    }
    // Add message in alert block:
    reportDiv.innerHTML = report;
}

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

// Checks if password has has a special character:
function hasSpecialCharacter(input) {
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < specialCharacters.length; j++) {
            if (input[i] === specialCharacters[j]) {
                return true;
            }
        }
    }
}

// Checks if password contains spaces:
function hasSpaces(input) {
    if (/\s/.test(input)) {
        return true;
    }
}