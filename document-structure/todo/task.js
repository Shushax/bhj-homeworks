let input = document.getElementById('task__input');
let button = document.getElementById('tasks__add');
let tasks__list = document.getElementById('tasks__list');
input.onkeydown = function(e) {
    let enter = String(e.key);
    if (enter === 'Enter') {
        let todo = document.createElement('div');
        todo.className = 'task';
        todo.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
        tasks__list.insertAdjacentElement('beforeend', todo);
        document.forms[0].reset();
        let elementRemove = todo.lastChild;
        elementRemove.onclick = function() {
            todo.remove();
        }

        return false;    
    }
}