
function addHomework(event) {

    event.preventDefault();

    let subject =
        document.getElementById("subject").value;

    let task =
        document.getElementById("task").value;

    let dueDate =
        document.getElementById("dueDate").value;

    let priority =
        document.getElementById("priority").value;

    let homework = {

        subject: subject,

        task: task,

        dueDate: dueDate,

        priority: priority

    };


    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    homeworkList.push(homework);

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


    document.getElementById("subject").value = "";

    document.getElementById("task").value = "";

    document.getElementById("dueDate").value = "";

    document.getElementById("priority").value = "Low";

}


function displayHomework() {

    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    let container =
        document.getElementById("homeworkList");

    if (!container) {
        return;
    }

    if (homeworkList.length === 0) {

        container.innerHTML =
            "<p>No homework added yet.</p>";

        return;
    }


    container.innerHTML = "";


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



function deleteHomework(index) {

    let homeworkList =
        JSON.parse(localStorage.getItem("homework")) || [];


    homeworkList.splice(index, 1);

    localStorage.setItem(
        "homework",
        JSON.stringify(homeworkList)
    );

    displayHomework();

}


// ==========================================
// RUN WHEN PAGE LOADS
// ==========================================

displayHomework();
