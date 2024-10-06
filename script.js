const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, introduce una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';

    // Marcar tarea como completada al hacer clic en el texto
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Eliminar tarea
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});
