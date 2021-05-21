(function() {
    changeThemes = {
        activeTheme: true,
        btn: document.querySelector("button"),
        sunSVG:  `<svg class="header__icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`,
        moonSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`,
        themes: {
            dark: {
                "--bg-color":             `#161722`,
                "--items-bg-color":       `#25273c`,
                "--primary-text-color":   `#cacde8`,
                "--secondary-text-color": `#777a92`,
                "--accent-color":         `#494C6B`,
            },
            light: {
                "--bg-color":             `#FAFAFA`,
                "--items-bg-color":       `#FFFFFF`,
                "--primary-text-color":   `#494C6B`,
                "--secondary-text-color": `#9495A5`,
                "--accent-color":         `#E3E4F1`,
            }
        },
        activateTheme(theme) {
            for (let prop in theme){
                document.querySelector(':root').style.setProperty(prop, theme[prop]);
            }
        },
        changeTheme() {
            this.btn.addEventListener("click", () => {
                if(this.activeTheme === true) {
                    this.activateTheme(this.themes.light);
                    this.btn.innerHTML = this.moonSVG;
                    this.activeTheme = false;
                } else {
                    this.activateTheme(this.themes.dark);
                    this.btn.innerHTML = this.sunSVG;
                    this.activeTheme = true;
                }
            });
        }
    }
    changeThemes.changeTheme();
})()

const removeItem = element => {
    element.parentNode.parentNode.remove();
}

const toggleClass = (element, klass) => {
    element.classList.contains(klass) ? element.classList.remove(klass) : element.classList.add(klass);
}

const toggleCheck = element => {
    element.style.display === "" ? element.style.display = "block" : element.style.display = "";
}

const addItem = () => {

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

    // Removes todo item
    button.addEventListener("click", () => {
        removeItem(button);
    })

    // toggles todo item completed state
    todoCheckbox.addEventListener("click", () => {
        toggleClass(todoCheckbox,"checkbox");
        toggleCheck(todoCheckbox.firstElementChild);
        toggleClass(todoCheckbox.parentElement.children[1], "scratch");
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

const input = document.querySelector(".create-todo__text");
const ul    = document.querySelector("ul");
input.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        addItem();
    }
});

































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