// function add(a, b){
//      return a +b ;
// }
// console.log(add(5, 7));
// const arr = [1, 2, 3, 4, 5, 6];
// const evens = [];
// const number3 = []
// for(const num of arr){
//      if (num % 2 === 0){
//           evens.push(num);
//      }
//      console.log(num);
//      console.log(evens);
// }
// console.log(arr.filter(function(num) {return num % 3 === 0 ; }));
// // console.log(
// //      filter(arr, function(num) {return num === 5 ;})
// // );
// console.log(arr.filter((num) => num === 5));
// const person = {
//      name : `lasha`,
//      age : 24,
// }
// console.log(person.name);
// console.log(person.age);
// Quiz
// 1 )

// Exercise
const todoDiv = document.getElementById(`todo`);
console.log(todoDiv);
const ulElement = document.getElementById(`list`);
for(let i = 0 ; i < 10; i ++){
     const liElement = document.createElement(`li`);
     ulElement.appendChild(liElement);
}




const Button = document.getElementById(`button`);
function backgroundColor() {
     document.body.style.backgroundColor = rgb(0, 255, 0);
}
Button.addEventListener(`click`, backgroundColor );







const changetx = document.getElementById(`paragraph`)
changetx.addEventListener(`click`, (e) => {
     console.log(`change text`);
     p.remuve();
});
paragraph.innerText = `change text`;
paragraph.appendChild(Button);





