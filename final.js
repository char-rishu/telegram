const generateBtn = document.getElementById("generateBtn");

const readySection = document.getElementById("readySection");
const prankSection = document.getElementById("prankSection");

generateBtn.addEventListener("click", () => {

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    setTimeout(() => {

        readySection.classList.add("hidden");
        prankSection.classList.remove("hidden");

    }, 2000);

});