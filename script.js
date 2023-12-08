function taskAdd() {
    var taskName = document.querySelector("#taskName").value;

    if (taskName == '') {
        alert("Please Write Something!!!!🙂");
    } else {
        // Create a new <li> element
        var newTask = document.createElement("li");
        // Create a text node with the task name
        var newTaskContent = document.createTextNode(taskName);
        // Append the text node to the <li> element
        newTask.appendChild(newTaskContent);
        // Get the task list <ul> element by ID
        var taskList = document.querySelector("#myTasks");
        // Append the new <li> element to the task list
        taskList.appendChild(newTask);
        // Clear the input field after adding the task
        document.querySelector("#taskName").value = '';

        // Create a close button (SPAN) for each task
        var closeBtn = document.createElement("SPAN");
        // Create a text node with the 'x' character
        var closeIcon = document.createTextNode("\u00D7");
        // Set the class of the close button
        closeBtn.className = "close";
        // Append the 'x' text node to the close button
        closeBtn.appendChild(closeIcon);
        // Append the close button to the new <li> element
        newTask.appendChild(closeBtn);
    }

    // Add a click event to each close button
    var closeButtons = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
            // Get the parent <li> element and hide it
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Add a click event to the entire task list (<ul>) for marking tasks as completed
var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        // Toggle the 'completed' class for the clicked <li> element
        e.target.classList.toggle('completed');
    }
});
