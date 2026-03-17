function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value;

    if (taskValue !== "") {
        const li = document.createElement("li");
        li.innerText = taskValue;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);

        taskInput.value = "";
    }
}
