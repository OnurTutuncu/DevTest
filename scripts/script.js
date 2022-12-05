let userName = document.getElementById("login-username");
let password = document.getElementById("login-pass");
let errorMsg = document.querySelector(".login-error");
let loginSubmit = document.getElementById("login-submit-btn");

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameValue = userName.value;
  let passValue = password.value;
  

  if (usernameValue === "admin" && passValue === "admin") {
    location.href = "dashboard.html";
  } else {
    errorMsg.style.opacity = "1";
  }
  
});

