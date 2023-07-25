//your code here
let draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnter(event) {
    event.preventDefault();
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    const droppedItem = event.target;
    if (droppedItem.tagName === 'DIV') {
        event.preventDefault();
        const draggedItemId = draggedItem.id;
        const droppedItemId = droppedItem.id;
        
        // Swap background images
        const tempBackground = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = droppedItem.style.backgroundImage;
        droppedItem.style.backgroundImage = tempBackground;
        
        // Swap IDs to maintain correct drag behavior
        draggedItem.id = droppedItemId;
        droppedItem.id = draggedItemId;
    }
}

const divs = document.querySelectorAll('[draggable="true"]');
divs.forEach(div => {
    div.addEventListener('dragenter', dragEnter);
    div.addEventListener('dragover', dragOver);
    div.addEventListener('drop', drop);
});