import {changeTheme} from './modules/theme.js';
import {addItem}     from './modules/add-items.js';
import helper        from './modules/helpers.js';

const ul         = document.querySelector("ul");
const input      = document.querySelector(".create-todo__text");
const button     = document.querySelector("button");
const addButton  = document.querySelector(".create-todo__button");
const clearItems = document.querySelector(".tracker__clear-items");

button.addEventListener("click", () => {
    changeTheme(button);
});

input.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        addItem(ul, input);
        helper.itemsLeft();
    }
});

addButton.addEventListener("click", function(event) {
    addItem(ul, input);
    helper.itemsLeft();
});

clearItems.addEventListener("click", () => {
    helper.clearCompleted();
    helper.itemsLeft();
})
































































// let checked = false;

// const hover = (element) => {
//     element.addEventListener( "mouseover", () => {
//         if (checked === false) {
//             element.classList.add("hover")
//         }
//     });
//     element.addEventListener( "mouseout",  () => {
//         if (checked === true) {
//             element.classList.remove("hover") 
//         }
//     });
// }






// const checkboxes = document.querySelectorAll(".todo__checkbox");
// checkboxes.forEach( checkbox => {
//     hover(checkbox)

//     checkbox.addEventListener("click",  () => {
//         if (checkbox.classList.contains("bb")) {
//             checkbox.classList.remove("bb") 
//             console.log("True")
//         } else {
//             checkbox.classList.add("bb")
//             checked = true;
//             console.log("false")
//         }
        
//     });
// })




  // Create cross SVG and set it's attributes
        // const todoClose = document.createElementNS(`xmlns="http://www.w3.org/2000/svg"`, "svg");
        //       todoClose.setAttribute("xmlns", `http://www.w3.org/2000/svg`);
        //       todoClose.setAttribute("class", "todo__icon");
        //       todoClose.setAttribute("width", "18");
        //       todoClose.setAttribute("height", "18");
        // const closePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        
        //     closePath.setAttribute("fill-rule", "#494C6B");
        //     closePath.setAttribute("fill-rule", "evenodd");
        //     closePath.setAttribute("d", "M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z");
        // todoClose.appendChild(closePath);


          // let todoItem = `
        //     <li class="todo">
        //         <div class="todo-inner">
        //             <div class="todo__checkbox"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></div>
        //             <p   class="todo__text">${input.value}</p>
        //             <svg class="todo__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        //         </div>
        //     </li>
        // `
        // ul.insertAdjacentHTML("afterbegin", todoItem);
        // input.value = "";