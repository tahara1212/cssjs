const h1 = document.querySelector('#main-title');
const btn = document.querySelector('#btn');

const changeColor = (e) => {
    h1.style.color = this.color;
    console.log(this);
    console.log(e);
}

btn.addEventListener('click', { color: "red", handleEvent: changeColor });