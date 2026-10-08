const params = new URLSearchParams(window.location.search);

const imdbId = params.get("imdb");


// Movie information load karna
function loadMovie() {

    if (!imdbId) {

        document.getElementById("movieTitle").textContent =
            "Movie Not Found";

        return;
    }


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
}


// Load movie
loadMovie();


// Get Link button
document.getElementById("getLinkBtn").addEventListener(
    "click",
    function () {

        const movieData = new URLSearchParams();

        movieData.set("imdb", imdbId);
        movieData.set("title", params.get("title") || "");
        movieData.set("year", params.get("year") || "");
        movieData.set("genre", params.get("genre") || "");
        movieData.set("rating", params.get("rating") || "");
        movieData.set("poster", params.get("poster") || "");
        movieData.set(
            "description",
            params.get("description") || ""
        );


        window.location.href =
            `generate.html?${movieData.toString()}`;

    }
);