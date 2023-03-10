const loading = document.querySelector("#ucitavanje");

const button = document.querySelector("#login-btn");
const box = document.querySelector(".box")

const loginData = {
    email: email,
    password: password,
};
  
loading.style = "display:none;"

button.addEventListener("click", function () {

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
    const loginData = {
    email: email,
    password: password,
};
  loading.style = "display:flex"
  box.style = "display:none"
    fetch("https://js-course-server.onrender.com/user/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.userId) {
            localStorage.setItem("auth_token", data.token);
            localStorage.setItem("userId", data.userId);
            alert("Prijava uspesna!");
            window.location.href = "index.html";
          } else {
            alert("Neuspesno")
              loading.style = "display: none;"
            box.style = "display:flex;"
          }
        });
 })

