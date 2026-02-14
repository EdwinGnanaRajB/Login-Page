const form = document.getElementById("form");
const toggleBtn = document.getElementById("toggleBtn");
const title = document.getElementById("title");
const message = document.getElementById("message");
const togglePass = document.getElementById("togglePass");
const password = document.getElementById("password");

let isLogin = true;

// Toggle Login / Signup
toggleBtn.onclick = () => {
  isLogin = !isLogin;
  title.textContent = isLogin ? "Login" : "Signup";
  toggleBtn.textContent = isLogin ? "Create account" : "Back to Login";
  message.textContent = "";
};

// Show / Hide password
togglePass.onclick = () => {
  password.type = password.type === "password" ? "text" : "password";
};

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = password.value;

  if (isLogin) {
    // LOGIN
    const user = JSON.parse(localStorage.getItem(email));

    if (!user || user.password !== pass) {
      message.textContent = "Invalid login ❌";
      message.style.color = "red";
    } else {
      // Save session (IMPORTANT FIX)
      const userData = {
        username: user.username,
        email: email
      };

      localStorage.setItem("loggedUser", JSON.stringify(userData));

      window.location.href = "dashboard.html";
    }

  } else {
    // SIGNUP
    const userData = {
      username: username,
      email: email,
      password: pass
    };

    localStorage.setItem(email, JSON.stringify(userData));

    message.textContent = "Signup successful ✅";
    message.style.color = "green";
  }

  form.reset();
});
