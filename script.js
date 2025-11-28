function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "JMSAMONG" && pass === "12242006") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Incorrect username or password!");
    }
}

function logout() {
    alert("You have been logged out.");
}
