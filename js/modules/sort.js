import helper from './helpers.js';

export function sort(event) {
    const li = document.querySelectorAll("li");
    helper.removeActiveClass();
    if(event.target.innerHTML === "All") {
        helper.addActiveClass(event.target);
        for(let i = 0; i < li.length -1; i++ ) li[i].style.display = "flex";
    } else if (event.target.innerHTML === "Active") {
        helper.addActiveClass(event.target);
        for(let i = 0; i < li.length -1; i++ ) {
            if( li[i].firstElementChild.firstElementChild.classList.contains("checkbox") ) {
                li[i].style.display = "none";
            } else {
                li[i].style.display = "flex";
            }
        }
    } else if (event.target.innerHTML === "Completed") {
        helper.addActiveClass(event.target);
        for(let i = 0; i < li.length -1; i++ ) {
            if( !li[i].firstElementChild.firstElementChild.classList.contains("checkbox") ) {
                li[i].style.display = "none";
            } else {
                li[i].style.display = "flex";
            }
        }
    }
}