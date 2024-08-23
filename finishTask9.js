const searchForm = document.querySelector (`#searchForm`);
const todoList = document.querySelector(`#todo-list`);

console.log(`searchForm`);
console.log(`todoList`);

searchForm.addEventListener(`submit`, (e)=> {
     e.preventDefault();
     const newTodoText = searchForm.search.value;
     if (newTodoText === ``) {
          alert(`please fill in blank`);
          return;
     };
     // alert(`form submited; search = ${searchForm.search.value}`);
     // const newTodoText = searchForm.search.value;
     // console.log(searchForm.search.value);
     const li = document.createElement(`li`);
     const deleteBtn = document.createElement(`button`);

     searchForm.search.value = ``;

     li.addEventListener(`click`,(e) => {
          // li.style.textDecoration = `line-through`;
          li.classList.toggle(`done`);
     });
     deleteBtn.addEventListener(`click`, (e)=>{
          li.remove();
     });

     // li.innerText = newTodoText;
     li.innerHTML = `<span>${newTodoText}</span>`;
     todoList.appendChild(li);
     li.appendChild(deleteBtn);
     deleteBtn.innerText= `X`;
});