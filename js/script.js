import {changeTheme} from './modules/theme.js';
import {addItem}     from './modules/add-items.js';
import {sort}        from './modules/sort.js';
import helper        from './modules/helpers.js';

const ul         = document.querySelector("ul");
const input      = document.querySelector(".create-todo__text");
const button     = document.querySelector("button");
const addButton  = document.querySelector(".create-todo__button");
const clearItems = document.querySelector(".tracker__clear-items");
const sortItems  = document.querySelector(".sort");

button.addEventListener("click", () => {
    changeTheme(button);
});

sortItems.addEventListener("click", function(event) {
    sort(event);
});

clearItems.addEventListener("click", () => {
    helper.clearCompleted();
    helper.itemsLeft();
})

addButton.addEventListener("click", function() {
    if(input.value) {
        addItem(ul, input);
        helper.itemsLeft();
    }
});

input.addEventListener("keyup", function(event) {
    if(input.value) {
        if (event.code === 'Enter') {
            addItem(ul, input);
            helper.itemsLeft();
        }
    }
});




let indexValue;
let indexValueSecond;
let draggedElement;






/* events fired on the draggable target */
document.addEventListener("dragstart", function(event) {
    draggedElement = event.target.parentElement;
    const li = document.querySelectorAll("li");
    // Retrive index value of the grabed element in list
    li.forEach((element, index) => {
        if(element.firstElementChild.children[1].innerHTML === draggedElement.firstElementChild.children[1].innerHTML) {
           indexValue = index;
        }
    });
}, false);

document.addEventListener("dragenter", function(event) {
    if(event.target.classList.contains("todo__text")) {
        event.target.parentElement.parentElement.classList.add('over');
    }
}, false);
document.addEventListener("dragleave", function(event) {
    if(event.target.classList.contains("todo__text")) {
        event.target.parentElement.parentElement.classList.remove('over');
    }
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);















document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.parentElement.parentElement.classList.contains("todo") ) {
        event.target.parentElement.parentElement.classList.remove('over');


        // console.log(event.target);
        const ul = document.querySelector("ul");
        const li = document.querySelectorAll("li");
        li.forEach((element, index) => {
            if(event.target.innerHTML === element.firstElementChild.children[1].innerHTML) {
                indexValueSecond = index;
                
                
            }
        });


        if (indexValue < indexValueSecond) {
            // console.log("Enter after");
            // console.log(event.target);
            ul.insertBefore(event.target.parentElement.parentElement, draggedElement);
        } else {
            
            ul.insertBefore(draggedElement, event.target.parentElement.parentElement);
            console.log("Enter before"); 
            console.log(event.target.parentElement.parentElement);
        }





        // console.log(draggedElement.parentElement);
        // draggedElement.parentElement.removeChild( draggedElement );
        // event.target.appendChild( draggedElement );
        // event.target.parentElement.parentElement.parentElement.appendChild( draggedElement )
    }
  
}, false);


// document.addEventListener("dragend", function( event ) {
//     // reset the transparency
//     event.target.style.opacity = "";
// }, false);