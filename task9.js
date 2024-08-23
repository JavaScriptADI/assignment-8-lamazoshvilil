const inp = document.createElement(`input`);
document.body.appendChild(inp);
console.log(inp);
const btn = document.createElement(`button`);
const newbtn = document.createElement(`button`);
btn.innerText= `add`;
document.body.appendChild(btn);
console.log(btn);
inp.addEventListener(`click`, (e) =>{
     e.preventDefault();
     return;
});
btn.addEventListener(`click`, () =>{
     alert(`click`);
});
newbtn.addEventListener(`click`, () => {
     alert(`newbtn`);
});
document.body.appendChild(newbtn);
newbtn.innerText = `newtext`;