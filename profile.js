let totalRating = 0;
let totalSubmissions = 0;

function addRating(rating){
    totalRating += rating;
    totalSubmissions ++;
    let averageRating = (totalRating / totalSubmissions).toFixed(1);
    document.getElementById("rating-value").innerText = `My Average Rating: ${averageRating}.`
}
