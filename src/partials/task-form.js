let taskForm = e => {
  let form = document.createElement('form');
  let taskTitle = document.createElement('input');
  taskTitle.setAttribute('type', 'text');
  taskTitle.setAttribute('id', 'task-form-title');
  taskTitle.setAttribute('placeholder', 'Task Name');
  taskTitle.setAttribute('class', 'input is-small');
  taskTitle.setAttribute('required');
  let taskDescription = document.createElement('input');
  taskDescription.setAttribute('type', 'text');
  taskDescription.setAttribute('id', 'task-form-description');
  taskDescription.setAttribute('', '');
  taskDescription.setAttribute('', '');
  taskDescription.setAttribute('', '');
  console.log(e);
}

export { taskForm };
{/* <form class="task-form">
  <input type="text" id="task-form-title" placeholder="Task Name" class="input is-small" required>
  <input type="text" id="task-form-description" placeholder="Description" class="input is-small" required>
  <input type="date" required>
  <select name="priority" id="priority" required>
    <option value=""></option>
    <option value="Low" id="low">Low</option>
    <option value="Medium" id="medium">Medium</option>
    <option value="High" id="high">High</option>
  </select>
  <button class="button is-success">Create</button>
</form> */}