const movie = {
    title: "Deapool",
    lang: "English",   
    rating: "9"
};
function displayMovieDetails(movie) {
    const details = document.getElementById("movie");
    const moviedetails = `<p>Title:</> ${movie.title}</p>
        <p>Language: ${movie.lang}</p>
        <p>Rating: ${movie.rating}</p>`;
        details.innerHTML = moviedetails;
}
displayMovieDetails(movie);
