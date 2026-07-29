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
const apiKey = "af9becee128197eb41adfa048a2e40e7";

const studentName = "Romano Scerbo-Morra";
const studentId = "200673567";

studentInfo.textContent =
    `Student: ${studentName} | Student ID: ${studentId}`;

searchForm.addEventListener("submit", function(event){
    event.preventDefault();

    const SearchTerm = searchInput.value.trim();
    if(SearchTerm === "") {
        statusMessage.textContent = "Please enter a search.";
        return;
    }

    statusMessage.textContent = `Searching for "${SearchTerm}"...`;
    searchMovies(SearchTerm);
});

    async function searchMovies(SearchTerm) {
        const encodedSearchTerm = encodeURIComponent(SearchTerm);
        const apiUrl =
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedSearchTerm}&include_adult=false&language=en-US&page=1`;
        try {
            statusMessage.textContent = `loading movies...`;
            results.replaceChildren();
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            console.log(data.results);
        }        
        catch(error){
            console.error("Error fetching movie data:", error);
            statusMessage.textContent = "An error occurred while fetching movie data.";
        }
    }

