// DOM references
const searchForm =
    document.querySelector("#searchForm");
const searchInput =
    document.querySelector("#searchInput");
const statusMessage =
    document.querySelector("#statusMessage");
const results =
    document.querySelector("#results");
const studentInfo =
    document.querySelector("#studentInfo");
// API configuration
const apiKey = "af9becee128197eb41adfa048a2e40e7";
const imageBaseUrl =
    "https://image.tmdb.org/t/p/w500";
// Student information
const studentName = "Romano Scerbo-Morra";
const studentId = "200673567";

studentInfo.textContent =
    `Student: ${studentName} | Student ID: ${studentId}`;


// Form submit event
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        statusMessage.textContent =
            "Please enter a movie title.";

        results.replaceChildren();
        return;
    }

    searchMovies(searchTerm);
});

// Search TMDB API
async function searchMovies(searchTerm) {
    const encodedSearchTerm =
        encodeURIComponent(searchTerm);

    const apiUrl =
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedSearchTerm}&include_adult=false&language=en-US&page=1`;

    try {
        statusMessage.textContent =
            `Loading movies for "${searchTerm}"...`;

        results.replaceChildren();

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status}`
            );
        }

        const data = await response.json();

        console.log(data);
        console.log(data.results);

        displayMovies(
            data.results,
            data.total_results
        );
    } catch (error) {
        console.error(
            "Error fetching movie data:",
            error
        );

        results.replaceChildren();

        statusMessage.textContent =
            "Unable to load movies. Please check your connection and try again.";
    }
}
// Create one movie card
function createMovieCard(movie) {
    const card =
        document.createElement("article");

    card.classList.add("movie-card");
    // Movie poster
    const poster =
        document.createElement("img");
    if (movie.poster_path) {
        poster.src =
            `${imageBaseUrl}${movie.poster_path}`;

        poster.alt =
            `Poster for ${movie.title}`;
    } else {
        poster.src =
            "https://placehold.co/500x750?text=Poster+Unavailable";

        poster.alt =
            `No poster available for ${movie.title}`;
    }


    // Movie title
    const title =
        document.createElement("h2");

    title.textContent =
        movie.title || "Untitled movie";


    // Movie rating
    const rating =
        document.createElement("p");

    if (movie.vote_count > 0) {
        rating.textContent =
            `Rating: ${movie.vote_average.toFixed(1)} / 10`;
    } else {
        rating.textContent =
            "Rating unavailable";
    }


    // Movie release date
    const releaseDate =
        document.createElement("p");

    releaseDate.textContent =
        movie.release_date
            ? `Released: ${movie.release_date}`
            : "Release date unavailable";


    // Movie description
    const overview =
        document.createElement("p");

    overview.textContent =
        movie.overview
            ? movie.overview
            : "No description is available.";


    // Add all elements to the card
    card.append(
        poster,
        title,
        rating,
        releaseDate,
        overview
    );

    return card;
}

// Display all returned movies

function displayMovies(movies, totalResults) {
    results.replaceChildren();

    if (!movies || movies.length === 0) {
        statusMessage.textContent =
            "No matching movies were found.";

        return;
    }

    movies.forEach(function (movie) {
        const card =
            createMovieCard(movie);

        results.appendChild(card);
    });

    statusMessage.textContent =
        `${totalResults} matching movies found. Showing ${movies.length}.`;
}
