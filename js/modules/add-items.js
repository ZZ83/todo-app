import helper from './helpers.js';

export function addItem(ul, input) {
    // Create elements
    const li           = document.createElement("li");
    const todoInner    = document.createElement("div");
    const todoCheckbox = document.createElement("div");
    const todoText     = document.createElement("p");
    const button       = document.createElement("button");

    // Add classes to elements
    li.classList.add("todo");
    todoInner.classList.add("todo-inner");
    todoCheckbox.classList.add("todo__checkbox");
    todoText.classList.add("todo__text");

    // Add SVGs to elements
    todoCheckbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`;
    button.innerHTML       = `<svg class="todo__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>`;
    
    // Set todo items text
    todoText.innerHTML = input.value;

    // Set remove to button label
    button.setAttribute("aria-label", "Remove todo item");

    // Removes todo item
    button.addEventListener("click", () => {
        helper.removeItem(button);
        helper.itemsLeft();
    })

    // Adds hover state
    helper.hover(todoCheckbox);

    // toggles todo item completed state
    todoCheckbox.addEventListener("click", () => {
        helper.toggleClass(todoCheckbox,"checkbox");
        helper.toggleCheck(todoCheckbox.firstElementChild);
        helper.toggleClass(todoCheckbox.parentElement.children[1], "scratch");
    })

    // Add elements to DOM
    li.appendChild(todoInner);
    todoInner.appendChild(todoCheckbox);
    todoInner.appendChild(todoText);
    todoInner.appendChild(button);
    ul.prepend(li);

    // Reset text input value
    input.value = "";
}

