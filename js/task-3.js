const userName = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
    const value = event.target.value.trim();

    if(value === ""){
        userOutput.textContent = "Anonymous";
    } else {
        userOutput.textContent = value;
    }
}); 


