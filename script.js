const taskInput = document.getElementById("task-input");
console.log(taskInput)

const addTaskBtn = document.getElementById("add-task");
console.log(addTaskBtn)

const  filterBtns = document.querySelectorAll(".filter");
console.log(filterBtns)

const taskList = document.getElementById("task-list")
console.log(taskList)



let tasks = [];

addTaskBtn.addEventListener("click", function() 
{
    const taskText = taskInput.value.trim();
    if (taskText !==""){
        tasks.push({ text: taskText});
        taskInput.value ="";
        showTasks();

    }
});

function showTasks(){
    taskList.innerHTML="";

    tasks.forEach((task, index) =>
        {
        const li = document.createElement('li')
        li.textContent = task.text;
        taskList.appendChild(li);
});
}