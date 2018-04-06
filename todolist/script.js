const btnSubmit = document.getElementById('submit');
const inputValue = document.getElementById('input');
const toDoList = document.getElementById('todolist');

const createTask = () => {
	const listTask =document.getElementById('listTask');
	const textOfTask = inputValue.value;

	const task = document.createElement('li');

	const btnRemove = document.createElement('button');
	btnRemove.textContent = 'x';
	btnRemove.classList.add('btn-remove');

	if(inputValue.value != '') {
		task.textContent = textOfTask;
		task.append(btnRemove);
		listTask.append(task);
	} else {
		alert('Please fill in the field');
	}

	inputValue.value = '';

	const removeTask = () => task.remove();
	btnRemove.addEventListener('click', removeTask);
};

btnSubmit.addEventListener('click', createTask);



// function inputKeyUp(e) {
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//         // submit
//     }
// }