
let visits = localStorage.getItem("visits");
if (!visits) {
    visits = 0;
} else {
    visits = parseInt(visits) + 1;
}
localStorage.setItem("visits", visits);
document.getElementById("counter").textContent = visits;
