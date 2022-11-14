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
    renderHorrorMovie(horror)
    }catch(error){
        console.error(error);
    }
    
}
function renderHorrorMovie(allHorrorMoive){
    allHorrorMoive.forEach((horror) => {
    console.log(horror)
    const movieCover=document.querySelector('#horrormovies')
    movieCover.innerHTML+=` <div class="col-md-2">
    <a href='details.html?movieId=${horror._id}'>
    <img class="movie-cover" src="${horror.imageUrl}"></a>
</div>

</div>`
});
}


async function getComdeyMovie() {
    try{
        const options={
            method:'Get',
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ",
          },
        };
    
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/comedy",options);
    
    const comedy= await response.json()
    console.log(comedy);
    renderComedyMovie(comedy)
    }catch(error){
        console.error(error);
    }
    
}
function renderComedyMovie(allComdeyMoive){
    allComdeyMoive.forEach((comedy) => {
    console.log(comedy)
    const movieCover=document.querySelector('#comdeymovies')
    movieCover.innerHTML+=` <div class="col-md-2">
    <a href='details.html?movieId=${comedy._id}'>
    <img class="movie-cover" src="${comedy.imageUrl}"></a>
</div>
</div>`
});
}

async function getActionMovie() {
    try{
        const options={
            method:'Get',
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ",
          },
        };
    
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/action",options);
    
    const action= await response.json()
    console.log(action);
    renderActionMovie(action)
    }catch(error){
        console.error(error);
    }
    
}
function renderActionMovie(allActionMoive){
    allActionMoive.forEach((action) => {
    console.log(action)
    const movieCover=document.querySelector('#actionmovies')
    movieCover.innerHTML+=` <div class="col-md-2">
    <a href='details.html?movieId=${action._id}'>
    <img class="movie-cover" src="${action.imageUrl}"></a>
</div>
</div>`
});
}




window.onload=async()=>{
    getHorrorMovie()
    getActionMovie()
    getGenres()
}

    //   const params = new URLSearchParams(window.location.search);
    //   const productId = params.get("productId");

    //   window.onload = async () => {
    //     if (productId) {
    //       const response = await fetch(
    //         `https://striveschool-api.herokuapp.com/api/product/${productId}`,
    //         {
    //           headers: {
    //             Authorization:
    //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVhYWQ0YmUzZDAwMTU4NDYwMDUiLCJpYXQiOjE2NjgwODUxNjMsImV4cCI6MTY2OTI5NDc2M30.SNaFuXft-4tKHsmsUjntSnVzwK4DNrqsFrd5gpAjyJw",
    //           },
    //         }
    //       );
    //       const product = await response.json();

    //       let submitButton = document.querySelector("#submit-button");
    //       submitButton.innerText = "Edit product";
    //       submitButton.classList.remove("btn-primary");
    //       submitButton.classList.add("btn-success");

    //       document.querySelector("#product-name").value = product.name;
    //       document.querySelector("#product-description").value =
    //         product.description;
    //       document.querySelector("#product-brand").value = product.brand;
    //       document.querySelector("#product-imageUrl").value = product.imageUrl;
    //       document.querySelector("#product-price").value = product.price;
    //     }
    //   };

    //   async function onFormSubmit(event) {
    //     event.preventDefault();
    //     const newProduct = {
    //       name: document.querySelector("#product-name").value,
    //       description: document.querySelector("#product-description").value,
    //       brand: document.querySelector("#product-brand").value,
    //       imageUrl: document.querySelector("#product-imageUrl").value,
    //       price: document.querySelector("#product-price").value,
    //     };
    //     const options = {
    //       method: productId ? "PUT" : "POST",
    //       body: JSON.stringify(newProduct),
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ",
    //       },
    //     };
    //     try {
    //       const endpoint = productId
    //         ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
    //         : "https://striveschool-api.herokuapp.com/api/product/";
    //       const response = await fetch(endpoint, options);
    //       if (response.ok) {
    //         alert(
    //           productId
    //             ? "Product edited successfully!"
    //             : "Product created successfully!"
    //         );
    //       } else {
    //         throw new Error("ERROR WHILE EXECUTING THE TRY BLOCK!");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }