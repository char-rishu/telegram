const generateBtn = document.getElementById("generateBtn");

const readySection = document.getElementById("readySection");
const prankSection = document.getElementById("prankSection");


// Current URL se movie data lena
const params = new URLSearchParams(window.location.search);


// Original movie page ka URL banana
const movieData = new URLSearchParams();

movieData.set(
    "imdb",
    params.get("imdb") || ""
);

movieData.set(
    "title",
    params.get("title") || ""
);

movieData.set(
    "year",
    params.get("year") || ""
);

movieData.set(
    "genre",
    params.get("genre") || ""
);

movieData.set(
    "rating",
    params.get("rating") || ""
);

movieData.set(
    "poster",
    params.get("poster") || ""
);

movieData.set(
    "description",
    params.get("description") || ""
);


const moviePage =
    `index.html?${movieData.toString()}`;


// Generate button
generateBtn.addEventListener("click", () => {

    generateBtn.disabled = true;

    generateBtn.textContent = "Generating...";


    setTimeout(() => {

        readySection.classList.add("hidden");

        prankSection.classList.remove("hidden");

    }, 2000);

});


// Go Back button
const goBackBtn =
    document.querySelector("#prankSection button");


if (goBackBtn) {

    goBackBtn.onclick = () => {

        window.location.href = moviePage;

    };

}