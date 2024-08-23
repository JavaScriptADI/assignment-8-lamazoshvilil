const div = document.createElement(`div`);
div.innerText= `game`;
document.body.appendChild(div);
console.log(div);
div.addEventListener(`click`, (e) => {
     console.log(e);
     div.innerText=`start`;
} );