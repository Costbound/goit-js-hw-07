const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const nameUpdate = () => {
    for (letter of nameInput.value) {
        if (letter !== " ") {
          return  nameOutput.textContent = nameInput.value.trim();
        } else if (nameInput.value.indexOf(" ") > 0) {
          return  nameOutput.textContent = nameInput.value.trim();
        }
    }
        nameOutput.textContent = "Anonymous";
    
    // if (nameInput.value.indexOf(" ") === 0) {
    //      nameInput.value = "";
    // }
    // nameInput.value.trim();
    // nameInput.value === "" ? nameOutput.textContent = "Anonymous" : nameOutput.textContent = nameInput.value;
}
nameInput.addEventListener("input", nameUpdate);