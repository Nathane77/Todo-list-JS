# **README Todo list JS**

## **Todo list JS**

## **Introduction**

This exercise is made to teach the basic of JS

## **Main function of the project**

This function is a made to clone the task card, taking all the info and elements of the card,
and making a new one with new elements.
```JS
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
```
## **On the side**
This was also a chance to try out **[fontawesome](https://fontawesome.com)** for the trash can logo.

## **if you have question about the project you can contact me on my [linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235334/)**