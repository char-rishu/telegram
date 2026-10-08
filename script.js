const params = new URLSearchParams(window.location.search);

const imdbId = params.get("imdb");


// Movie information load karna
async function loadMovie() {

    if (!imdbId) {

        document.getElementById("movieTitle").textContent =
            "Movie Not Found";

        return;
    }


    try {

        /*
        IMPORTANT:
        OMDb API key browser mein nahi rakhenge.
        Isliye abhi website ko movie information
        URL parameters se receive karna hoga.
        */

        const title =
            params.get("title") || "Movie";

        const year =
            params.get("year") || "N/A";

        const genre =
            params.get("genre") || "N/A";

        const rating =
            params.get("rating") || "N/A";

        const poster =
            params.get("poster") || "";

        const description =
            params.get("description") ||
            "Your requested link is ready.";


        document.getElementById("moviePoster").src =
            poster;

        document.getElementById("movieTitle").textContent =
            title;

        document.getElementById("movieMeta").textContent =
            `${year} • ${genre} • ⭐ ${rating}`;

        document.getElementById("movieDescription").textContent =
            description;


    } catch (error) {

        console.error(error);

        document.getElementById("movieTitle").textContent =
            "Movie information unavailable.";

    }

}


loadMovie();


// Get Link button
document.getElementById("getLinkBtn").addEventListener(
    "click",
    function () {

        window.location.href =
            `generate.html?imdb=${encodeURIComponent(imdbId)}`;

    }
);