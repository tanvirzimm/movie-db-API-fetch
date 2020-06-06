// fetch('http://www.omdbapi.com/?s=home&apikey=7df69b18').
// then((response) => response.json()).
// then(json => console.log(json)).
// catch((err)=> console.log(err))
let movieContainer = document.querySelector('.movie-container');


const getMovie = (inputValue) => {

    fetch('http://www.omdbapi.com/?s='+inputValue+'&apikey=7df69b18').
    then((response) => response.json()).
    then(json => {
        json.Search.forEach((movie)=>{


           
            console.log(movie);
            
            
            let movieCard = '';
           movieCard = `
           <div class="col-md-4">
           <div class="card">
               <img src="${movie.Poster}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${movie.Title} ${movie.Year}</h5>
                 <a href="#" onClick="selectedMovie('${movie.imdbID}','${movie.Title}','${inputValue}')" class="btn btn-default details view-button">Movie Details</a>
               </div>
             </div>
       </div>
            `;

            movieContainer.innerHTML += movieCard;

        })
    }).
    catch((err)=> console.log(err))
}


const selectedMovie = (id,title,inputValue) => {
    
    
    sessionStorage.setItem('id',id);
    sessionStorage.setItem('current',inputValue);
    window.location = 'movie.html';
    console.log(id,title);
    
    
}






// Show current search results after come back from veiw deatails page
const currentSearch = () => {
    
    if(sessionStorage.getItem('current')!==null){
        let currentInputValue = sessionStorage.getItem('current');
        getMovie(currentInputValue);
    }
    
}

currentSearch();



//clear all storage after closing website tab

// function clearStorage() {

//     sessionStorage.removeItem('id');
//     sessionStorage.removeItem('current');
   
// }
// window.addEventListener('load', clearStorage);




// Event Handler

document.querySelector('.searchForm').addEventListener('submit',(e) => {
    e.preventDefault();
    movieContainer.innerHTML = '';
    let inputValue = document.querySelector('.input-value').value;
    getMovie(inputValue);
})









