async function getGenres() {
    try{
        const options={
            method:'Get',
        headers: {
            'Content-Type':'application/json',
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ",
          },
        };
    
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/",options);
    
    const genres= await response.json()
    console.log(genres);
    }catch(error){
        console.error(error);
    }
    
}
async function getHorrorMovie() {
    try{
        const options={
            method:'Get',
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ",
          },
        };
    
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/horror",options);
    
    const horror= await response.json()
    console.log(horror);
    }catch(error){
        console.error(error);
    }
    
}
function renderHorrorMovie(allHorrorMoive){
    allHorrorMoive.forEach((horror) => {
    console.log(horror)
    const movieCover=document.querySelector('#horrormovies')
    movieCover.innerHTML+=` <div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media12.jpg">
</div>
<div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media13.jpg">
</div>
<div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media14.jpg">
</div>
<div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media15.jpg">
</div>
<div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media16.jpg">
</div>
<div class="col-md-2">
    <img class="movie-cover" src="./assets/media/media17.jpg">
</div>

</div>`
});
}

window.onload=async()=>{
    const horror= await getHorrorMovie()
    renderHorrorMovie(horror)
}
