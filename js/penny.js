const clicker = document.querySelector('#clickme');
const penny3 = document.querySelector('#penny3');
penny3.style.display = 'none';

clicker.onclick = () => {
   penny3.style.display = 'block';
};

penny3.onclick = () => {
   penny3.style.display = 'none';
};

// hover image

penny2.style.display = 'none';
penny1.onmouseover = () => {
    penny1.setAttribute("src", "images/penny2.jpg");
}
penny1.onmouseleave = () => {
    penny1.setAttribute("src", "images/penny1.jpg");
}
