export function dragDrop() {
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
        draggedElement.style.opacity = "0.4";
      
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
                event.target.parentElement.parentElement.after(draggedElement);
          
            } else {
                event.target.parentElement.parentElement.before(draggedElement);
            }
        }
        draggedElement.style.backgroundColor = "";
    }, false);

    document.addEventListener("dragend", function() {
        // reset the transparency
        draggedElement.style.opacity = "";
    }, false);
}