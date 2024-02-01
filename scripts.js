function getPopularMovies(){
    // to add key to the url
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=d5dac4029eca2b00d2ff19d3bb6156b0&language=en-US&page=1";
    let popularMovies = document.getElementById("popular");
    let imgUrl = "https://image.tmdb.org/t/p/w500/";


    const data = null;

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () 
    {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);

            let json = JSON.parse(this.responseText);
            console.log(json);

            let html = "";
            for(let i = 0; i < 4; i++){
                html += `
                <figure>
                    <img src="${imgUrl}${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>
                `;
            }

            popularMovies.innerHTML = html;
        }
    });

    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWRhYzQwMjllY2EyYjAwZDJmZjE5ZDNiYjYxNTZiMCIsInN1YiI6IjY1YmMxNDMyMmI4YTQzMDE2MTFiNGUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1efkjD6yn_HssnDCw_3nZqIleWLixNka5OaT3YQons');

    xhr.send(data);
}

function getBirthYearMovies(){

}

window.addEventListener("load", function(){
	getPopularMovies();
	document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});