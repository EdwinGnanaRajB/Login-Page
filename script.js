const form = document.getElementById("form");
const toggleBtn = document.getElementById("toggleBtn");
const title = document.getElementById("title");
const message = document.getElementById("message");
const togglePass = document.getElementById("togglePass");
const password = document.getElementById("password");

let isLogin = true;

toggleBtn.onclick = () => {
  isLogin = !isLogin;
  title.textContent = isLogin ? "Login" : "Signup";
  toggleBtn.textContent = isLogin ? "Create account" : "Back to Login";
  message.textContent = "";
};

togglePass.onclick = () => {
  password.type = password.type === "password" ? "text" : "password";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = password.value;

  if (isLogin) {
    const user = JSON.parse(localStorage.getItem(email));
    if (!user || user.password !== pass) {
      message.textContent = "Invalid login details ❌";
      message.style.color = "#ffb3b3";
    } else {
      message.textContent = "Welcome back 🔥";
      message.style.color = "#b6ffb3";
    }
  } else {
    localStorage.setItem(email, JSON.stringify({ username, password: pass }));
    message.textContent = "Account created successfully ✅";
    message.style.color = "#b6ffb3";
  }

  form.reset();
});
