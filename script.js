// Serching by Movie Title
const leftDiv = document.getElementById('left-div');
const rightDiv = document.getElementById('right-div');
const searchMovie = (title,year,rated,released,runTime,genre,director,writer,actors,plot,language,country,awards,poster) => {
  leftDiv.innerHTML = 
  `<img src="${poster}" alt="Movie Poster">`;
  rightDiv.innerHTML = 
  `<h2>${title}</h2> 
  <p>Year: ${year}</p> 
  <p>Rated: ${rated}</p> 
  <p>Released: ${released}</p> 
  <p>Runtime: ${runTime}</p> 
  <p>Genre: ${genre}</p> 
  <p>Director: ${director}</p> 
  <p>Writer: ${writer}</p> 
  <p>Actors: ${actors}</p> 
  <p>Plot: ${plot}</p> 
  <p>Language: ${language}</p> 
  <p>Country: ${country}</p> 
  <p>Awards: ${awards}</p> 
  </div>`; 
  }

// Searching Movie 
  // assigning the api key
const apiKey = 'da8bfe18';
let apiUrl = ''
  // getting the api key for tittle search
const btn1 = document.getElementById('btn1')
  // getting the api key for id search
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
// Make an HTTP request to the API endpoint
const API = (apiUrl) => {
console.log(apiUrl)
 fetch(apiUrl)
.then(response => response.json())
.then(json => {
if (json.Response === 'True') { searchMovie(json.Title,json.Year,json.Rated,json.Released,json.Runtime,json.Genre,json.Director,json.Writer,json.Actors,json.Plot,json.Language,json.Country,json.Awards,json.Poster)
 } else {
const searchResultsDiv = document.getElementById('searchResults');
 searchResultsDiv.innerHTML = `<p>Movie not found</p>`;
}
})
.catch(error => { console.log('Error occurred:', error);
});
 };
    
// function for the title search
const byTitle = () => { 
  const searchTitle = document.getElementById('searchInput').value; 
 apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchTitle)}`; 
  API(apiUrl)
}
// fucntion for the id serach
const byID = () => {
  const searchId = document.getElementById('searchInput2').value;
  console.log(searchId)
  apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(searchId)}`;
  API(apiUrl) 
}
const byTitleYear = () => {
    const title = document.getElementById('searchInput3T').value;
    const year = document.getElementById('searchInput3Y').value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&y=${encodeURIComponent(year)}`;
    API(apiUrl)
}
btn1.addEventListener('click',byTitle);
btn2.addEventListener('click',byID)
btn3.addEventListener('click',byTitleYear)
  
