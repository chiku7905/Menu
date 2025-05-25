let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let loginButton = document.querySelector("button");

let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let validUsers = {
    "chomu9453": "9453583811",
    "mogli7905": "7905514040",
    ".": "."
};

// Prevent form submission and handle login
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Stop form from reloading the page

    let enteredUsername = usernameRef.value.trim();
    let enteredPassword = passwordRef.value.trim();

    if (validUsers[enteredUsername] && validUsers[enteredUsername] === enteredPassword) {
        // alert("Login successful!");
        window.location.href = "/Menu/localindex.html"; // Redirect to Google
    } else {
        alert("Invalid username or password. Please try again!");
    }
});

// Normal eye and hand positions
let normalEyeStyle = () => {
    eyeL.style.cssText = "left: 0.6em; top: 0.6em;";
    eyeR.style.cssText = "right: 0.6em; top: 0.6em;";
};

let normalHandStyle = () => {
    handL.style.cssText =
        "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
    handR.style.cssText =
        "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
};

// When clicked on username input
usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = "left: 0.75em; top: 1.12em;";
    eyeR.style.cssText = "right: 0.75em; top: 1.12em;";
    normalHandStyle();
});

// When clicked on password input
passwordRef.addEventListener("focus", () => {
    handL.style.cssText =
        "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
    handR.style.cssText =
        "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
    normalEyeStyle();
});

// When clicked outside username and password input
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem !== usernameRef && clickedElem !== passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});
