function theWholeThing(){
  
  const baseURL ='https://ghibliapi.herokuapp.com/films';

//call on a random index 0-19
let randIndex = Math.floor(Math.random() * 20); 
//console.log(randIndex)

fetch(baseURL)
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  displayResults(json)
});

// display only the matching index
function displayResults(j){
    let title = (j[randIndex].title)
    let description = (j[randIndex].description)
    document.getElementsByTagName('h1')[1].innerText = title
    document.getElementsByTagName('p')[1].innerText = description
}
}