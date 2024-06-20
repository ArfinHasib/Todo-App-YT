let addBtn = document.getElementById('add');
let taskInput = document.querySelector('#new-task input');
let tasks = document.getElementById('tasks');

addBtn.addEventListener('click', () => {
    if (taskInput.value.length == 0) {
        alert('Please enter a Task');
    } else {
        tasks.innerHTML += `
         <div class="task">
            <label class="taskCheck">
               <input type="checkbox" class="taskCheckbox">
               <span id="task-name">${taskInput.value}</span>
            </label>
            <button class="delete">
               <i class="fas fa-trash-alt"></i>
            </button>
         </div>
      `;

        // Delete the tasks
        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].addEventListener('click', function () {
                this.parentNode.remove();
            });
        }
    }
    //   Clear Input field
    taskInput.value = '';
});
