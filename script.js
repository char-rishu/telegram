const movies = {
    movie1: {
        title: "Avengers: Endgame",
        year: "2019",
        genre: "Action / Sci-Fi",
        rating: "8.4",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "Your requested link is ready."
    },

    movie2: {
        title: "Interstellar",
        year: "2014",
        genre: "Sci-Fi / Drama",
        rating: "8.7",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "Your requested link is ready."
    },

    movie3: {
        title: "Inception",
        year: "2010",
        genre: "Action / Sci-Fi",
        rating: "8.8",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "Your requested link is ready."
    },

    movie4: {
        title: "The Dark Knight",
        year: "2008",
        genre: "Action / Crime",
        rating: "9.0",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Your requested link is ready."
    },

    movie5: {
        title: "Spider-Man: No Way Home",
        year: "2021",
        genre: "Action / Adventure",
        rating: "8.2",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "Your requested link is ready."
    },

    movie6: {
        title: "Iron Man",
        year: "2008",
        genre: "Action / Sci-Fi",
        rating: "7.9",
        poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        description: "Your requested link is ready."
    },

    movie7: {
        title: "Guardians of the Galaxy",
        year: "2014",
        genre: "Action / Adventure",
        rating: "8.0",
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        description: "Your requested link is ready."
    },

    movie8: {
        title: "Doctor Strange",
        year: "2016",
        genre: "Action / Fantasy",
        rating: "7.5",
        poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoqZaK1c2c9M3h0r8Z.jpg",
        description: "Your requested link is ready."
    },

    movie9: {
        title: "Thor: Ragnarok",
        year: "2017",
        genre: "Action / Comedy",
        rating: "7.9",
        poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xvJ9xKfR7.jpg",
        description: "Your requested link is ready."
    },

    movie10: {
        title: "Black Panther",
        year: "2018",
        genre: "Action / Adventure",
        rating: "7.3",
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description: "Your requested link is ready."
    }
};


// URL se movie ID lena
const params = new URLSearchParams(window.location.search);
const movieId = params.get("movie") || "movie1";


// Movie find karna
const movie = movies[movieId];


// Movie details page par show karna
if (movie) {

    document.getElementById("moviePoster").src = movie.poster;

    document.getElementById("movieTitle").textContent = movie.title;

    document.getElementById("movieMeta").textContent =
        `${movie.year} • ${movie.genre} • ⭐ ${movie.rating}`;

    document.getElementById("movieDescription").textContent =
        movie.description;
}


// Get Link button
document.getElementById("getLinkBtn").addEventListener("click", function () {

    window.location.href = `generate.html?movie=${movieId}`;

});