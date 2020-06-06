let container = document.querySelector('.detailsContainer');

const getMovies = () => {

    let id = sessionStorage.getItem('id');
    fetch('https://www.omdbapi.com/?i='+id+'&apikey=7df69b18').
    then((response) => response.json()).
    then(json => {

        console.log(json);
        
        let output = `
        <div class="col-12">


           <div class="row">
               <div class="col-md-4">
                   <img src="${json.Poster}" alt="" class="img-poster">
               </div>
               <div class="col-md-8">
                   <h2 class='title'>${json.Title}</h2>
                   <ul class='list-group info-list border'>
                       <li class='list-group-item text-secondary'><span>Genre:</span> ${json.Genre}</li>
                       <li class='list-group-item text-secondary'><span>Released:</span> ${json.Released}</li>
                       <li class='list-group-item text-secondary'><span>Rated:</span> ${json.Rated}</li>
                       <li class='list-group-item text-secondary'><span>IMDB Rating:</span> ${json.imdbRating}</li>
                       <li class='list-group-item text-secondary'><span>Director:</span> ${json.Director}</li>
                       <li class='list-group-item text-secondary'><span>Writer:</span> ${json.Writer}</li>
                       <li class='list-group-item text-secondary'><span>Actors:</span> ${json.Actors}</li>
                   </ul>
               </div>
           </div>



           <div class="row">
               <div class="col-12">
                   <h2 class='text-white plot'>Plot</h2>
                   <p class='text-secondary'>${json.Plot}</p>
                   <hr/>

                   <a href="https://www.imdb.com/title/${json.imdbID}" class="btn btn-default btn-lg view-button" target='_blank'>View IMDB</a>
                   <a href='index.html' class="btn btn-secondary btn-lg back-search">Back to search</a>
                  
               </div>
           </div>


        </div>
        `;

        container.innerHTML = output;
    
    }).
    catch((err)=> console.log(err))
}





getMovies();

