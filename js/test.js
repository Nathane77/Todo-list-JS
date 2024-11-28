const addBtn = document.querySelector('#btn');
const addBtn = document.querySelector('#btn');

addBtn.addEventListener('click', addTask); //add a task on click
addBtn.addEventListener('click', addTask); // add a task on click

const taskCard = document.querySelector(".todoCard");
const taskCard = document.querySelector(".todoCard");

const tasksContainer = document.querySelector("#todoCards");
const tasksContainer = document.querySelector("#todoCards");

const delBtn = document.querySelector('.delBtn')
delBtn.addEventListener('click', function() {
    deleteTask(taskCard); //remove the task
    console.log("ghghn")
  
});

const delBtn = document.querySelector('.delBtn');
console.log(delBtn);
delBtn.addEventListener('click', function() { // delete default task on click
    deleteTask(taskCard); // target the right task
});

function addTask() {
    const newTask = taskCard.cloneNode(true); // clone the task card 
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');

    newTextArea.value = "New Task"; // set new task text to "New Task"
    newDelBtn.addEventListener('click', function() { // add delete event listener to new task
        deleteTask(newTask); // target the new task
    });

    tasksContainer.appendChild(newTask); // append new task to the tasks container

    countCard()
}

function deleteTask(task) {
    task.remove(); // remove the task

    countCard()
}


function addTask(){
    const newTask = taskCard.cloneNode(true); //clone the task card
    const newTextArea = newTask.querySelector('.task')
    
    newTextArea.value ="New Task" // set new task text to "new Task"
    
    tasksContainer.appendChild(newTask) // append new task to tasks container
    taskNB = document.querySelectorAll('.todoCards').length;
    
    
}

const delBtn = document.querySelector('.delBtn')
delBtn.addEventListener('click', function() {
    deleteTask(taskCard); //remove the task
    console.log("ghghn")
  
});
function deleteTask(task){
    task.remove(); // removes the task
}