const input = document.getElementById('name-input')
const span = document.getElementById('name-output') 

function modifyText(){
    const inputValue = input.value.trim()
    if (inputValue  === "" || inputValue.includes(" ")) {
        span.innerText = "Anonymous";
    } else {
        span.innerText = inputValue;
}
}

input.addEventListener("input", modifyText);