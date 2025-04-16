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
        tasks.push({ text: taskText, completed: false});
        taskInput.value ="";
        showTasks();

    }
});

function showTasks(){
    taskList.innerHTML="";

    tasks.forEach((task, index) =>
        {
        const li = document.createElement('li')
        li.setAttribute("data-index", index);

        if(task.completed){
            li.classList.add("completed")
        }

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const buttonsDiv = document.createElement("button");
        buttonsDiv.className = "task-buttons";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✅"
        completeBtn.className = "complete-button";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️"
        deleteBtn.className = "delete-button"

        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
});
}