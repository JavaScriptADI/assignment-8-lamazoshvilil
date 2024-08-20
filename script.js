const btn = document.getElementById(`btn`);
const div = document.querySelector(`div`);
console.log(btn);
console.log(div);
btn.addEventListener(`click`, (e) => {
     console.log(e);
     btn.innerText = `change text`
     p.remove();
});
document.body.addEventListener(`mousemove`, (e) => {
     console.log(e);
     div.innerText = `${e.clientX}, ${e.clientY}`;
     document.body.style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`;
});
const p = document.createElement(`p`);
p.innerText= `text`;
document.body.appendChild(p);
console.log(p);
const game = document.createElement(`div`);
div.innerText= `game`;
console.log(div);