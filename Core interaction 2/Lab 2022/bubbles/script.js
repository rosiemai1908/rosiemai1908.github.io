let container = document.querySelector('#container');
let bubble = document.querySelectorAll('.bubble');

for (let i = 0; i < 50; i++) {
bubble.forEach(function (bubble) {
    bubble.style.left = (90 * Math.random()) +'%';
    bubble.style.top = (90 * Math.random()) +'%';
})}

container.addEventListener('click', function (event) {
    if (event.target.classList.contains ('bubble')) {
        event.target.remove();
    }
});