export default {
    removeItem(element)  {
        element.parentNode.parentNode.remove();
    },
    toggleClass(element, klass) {
        element.classList.contains(klass) ? element.classList.remove(klass) : element.classList.add(klass);
    },
    toggleCheck(element) {
        element.style.display === "" ? element.style.display = "block" : element.style.display = "";
    },
    itemsLeft()  {
        const items = document.querySelector(".tracker__items-left");
        const li = document.querySelectorAll("li");
        items.innerHTML = `${li.length - 1} Items Left`;
    },
    clearCompleted() {
        const li= document.querySelectorAll("li");
        li.forEach(element => {
            if( element.firstElementChild.firstElementChild.classList.contains("checkbox") ) {
                element.remove()
            }
        });
    },
    removeActiveClass() {
        const sortItems = document.querySelectorAll(".sort__items");
        sortItems.forEach(item => {
            item.classList.remove("active");
        })
    },
    addActiveClass(element) {
        element.classList.add("active");
    },
    hover(element) {
        element.addEventListener( "mouseover", () => {
            if( !element.classList.contains("checkbox") ) {
                element.classList.add("hover")
            } 
        });
        element.addEventListener( "mouseout",  () => {
            element.classList.remove("hover") 
        });
    },
}











