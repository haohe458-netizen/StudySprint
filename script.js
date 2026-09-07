// ==========================================
// STUDYSPRINT HOMEWORK SYSTEM
// ==========================================


// ADD HOMEWORK
function addHomework(event) {

    event.preventDefault();

    // Get the information from the form
    let subject =
        document.getElementById("subject").value;

    let task =
        document.getElementById("task").value;

    let dueDate =
        document.getElementById("dueDate").value;

    let priority =
        document.getElementById("priority").value;


    // Create a homework object
    let homework = {

        subject: subject,

        task: task,

        dueDate: dueDate,

        priority: priority

    };


    // Get existing homework
    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    // Add the new homework
    homeworkList.push(homework);


    // Save homework
    localStorage.setItem(
        "homework",
        JSON.stringify(homeworkList)
    );


    // Show confirmation on Planner page
    document.getElementById("message").innerHTML =

        "<b>Homework successfully added!</b><br><br>" +

        "<b>Subject:</b> " + subject + "<br>" +

        "<b>Homework:</b> " + task + "<br>" +

        "<b>Due Date:</b> " + dueDate + "<br>" +

        "<b>Priority:</b> " + priority;


    // Clear the form
    document.getElementById("subject").value = "";

    document.getElementById("task").value = "";

    document.getElementById("dueDate").value = "";

    document.getElementById("priority").value = "Low";

}


// ==========================================
// DISPLAY HOMEWORK ON DASHBOARD
// ==========================================

function displayHomework() {

    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    let container =
        document.getElementById("homeworkList");


    // Make sure the dashboard element exists
    if (!container) {
        return;
    }


    // If there is no homework
    if (homeworkList.length === 0) {

        container.innerHTML =
            "<p>No homework added yet.</p>";

        return;
    }


    // Clear the container
    container.innerHTML = "";


    // Display every homework task
    homeworkList.forEach(function(homework, index) {

        let homeworkItem =
            document.createElement("div");


        homeworkItem.className = "homework-item";


        homeworkItem.innerHTML =

            "<h3>" +
            homework.task +
            "</h3>" +

            "<p><b>Subject:</b> " +
            homework.subject +
            "</p>" +

            "<p><b>Due:</b> " +
            homework.dueDate +
            "</p>" +

            "<p><b>Priority:</b> " +
            homework.priority +
            "</p>" +

            "<button onclick=\"deleteHomework(" +
            index +
            ")\">Delete</button>" +

            "<hr>";


        container.appendChild(homeworkItem);

    });

}


// ==========================================
// DELETE HOMEWORK
// ==========================================

function deleteHomework(index) {

    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    // Remove the selected homework
    homeworkList.splice(index, 1);


    // Save the updated list
    localStorage.setItem(
        "homework",
        JSON.stringify(homeworkList)
    );


    // Refresh the dashboard
    displayHomework();

}


// ==========================================
// RUN WHEN PAGE LOADS
// ==========================================

displayHomework();
