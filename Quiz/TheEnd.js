let tryAgainBtn = document.querySelector("#try-again");


const tryAgain = () => {
    window.location.href = "index.html"
}

tryAgainBtn.addEventListener("click", function () {
    tryAgain()
})


document.querySelector("#result").innerHTML = `<h2>Osvojili ste ukupno ${localStorage.getItem("score")} bodova!</h2>` + `<p>${localStorage.getItem("total")}</p>`

// let finalResult = document.querySelector("#result");

// finalResult.textContent = "Ukupan broj bodova koji ste osvojili je " + score