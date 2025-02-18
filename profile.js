function addRating(rating){
    document.getElementById("rating-value").innerText = `My Average Rating: ${rating}.`
}

const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("visible");
});
