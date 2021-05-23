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