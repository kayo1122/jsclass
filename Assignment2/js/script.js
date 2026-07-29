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
const apiKey = "";


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

}

