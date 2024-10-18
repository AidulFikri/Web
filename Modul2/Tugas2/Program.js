document.getElementById('addBtn').addEventListener('click', addTodo);

function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTodoItem(li, span));
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => todoList.removeChild(li));
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    input.value = '';
}

function editTodoItem(li, span) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.classList.add('edit-mode');

    li.innerHTML = '';
    li.appendChild(input);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => saveTodoItem(li, input));
    li.appendChild(saveBtn);
}

function saveTodoItem(li, input) {
    const newText = input.value.trim();

    if (newText === '') {
        alert('Task cannot be empty.');
        return;
    }

    li.innerHTML = '';

    const span = document.createElement('span');
    span.textContent = newText;
    li.appendChild(span);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTodoItem(li, span));
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());
    li.appendChild(deleteBtn);
}
