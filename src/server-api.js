const uuidv1 = require('uuid/v1');
     
    export async function  getMovies(){
        console.log("loading movies");
        const moviesObj = await get('http://www.omdbapi.com/?s=game&y=2018&apikey=f271ffa5');
        const movies = moviesObj["Search"];
        movies.forEach(movie => {
            delete movie.imdbID 
            delete movie.Poster
            delete movie.Type;
            movie.id = uuidv1();
        });
        return movies;
    }

    function get(url){
        return fetch(url)
            .then(res => res.json());
    }


