```javascript
// =================================
// ADD HOMEWORK
// =================================

let homework = JSON.parse(localStorage.getItem("homework")) || [];

function addHomework(event) {

    event.preventDefault();

    let subject = document.getElementById("subject").value;
    let task = document.getElementById("task").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;

    if (subject == "" || task == "" || dueDate == "") {

        alert("Please complete all required fields.");

        return;
    }

    let newHomework = {
        subject: subject,
        task: task,
        dueDate: dueDate,
        priority: priority
    };

    homework.push(newHomework);

    localStorage.setItem("homework", JSON.stringify(homework));

    document.getElementById("message").innerHTML =
        "<b>Subject:</b> " + subject +
        "<br>" +
        "<b>Homework:</b> " + task +
        "<br>" +
        "<b>Due Date:</b> " + dueDate +
        "<br>" +
        "<b>Priority:</b> " + priority;

    alert("Homework added successfully!");

    document.getElementById("task").value = "";

    displayHomework();
}


// =================================
// DISPLAY HOMEWORK
// =================================

function displayHomework() {

    let list = document.getElementById("homeworkList");

    if (!list) {
        return;
    }

    list.innerHTML = "";

    if (homework.length == 0) {

        list.innerHTML = "<p>No homework added yet.</p>";

        return;
    }

    homework.forEach(function(item, index) {

        let homeworkItem = document.createElement("div");

        homeworkItem.className = "homework-item";

        homeworkItem.innerHTML =
            "<div>" +
                "<div class='homework-title'>" +
                    item.subject +
                "</div>" +

                "<div class='homework-subtitle'>" +
                    item.task +
                "</div>" +

                "<div class='homework-subtitle'>" +
                    "Priority: " + item.priority +
                "</div>" +
            "</div>" +

            "<div>" +
                "<div class='due'>" +
                    item.dueDate +
                "</div>" +

                "<button onclick='deleteHomework(" + index + ")'>" +
                    "Delete" +
                "</button>" +
            "</div>";

        list.appendChild(homeworkItem);

    });
}


// =================================
// DELETE HOMEWORK
// =================================

function deleteHomework(index) {

    homework.splice(index, 1);

    localStorage.setItem("homework", JSON.stringify(homework));

    displayHomework();

}


// =================================
// POMODORO TIMER
// =================================

let time = 25 * 60;

let timerInterval = null;

let timerRunning = false;


// Update timer display
function updateTimer() {

    let timer = document.getElementById("timer");

    if (!timer) {
        return;
    }

    let minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timer.innerHTML = minutes + ":" + seconds;
}


// Start timer
function startTimer() {

    // Prevent multiple timers running at once
    if (timerRunning) {
        return;
    }

    timerRunning = true;

    timerInterval = setInterval(function() {

        if (time > 0) {

            time--;

            updateTimer();

        } else {

            clearInterval(timerInterval);

            timerRunning = false;

            alert("Pomodoro session complete!");

        }

    }, 1000);
}


// Pause timer
function pauseTimer() {

    clearInterval(timerInterval);

    timerRunning = false;

}


// Reset timer
function resetTimer() {

    clearInterval(timerInterval);

    timerRunning = false;

    time = 25 * 60;

    updateTimer();

}


// =================================
// STARTUP
// =================================

displayHomework();

updateTimer();
```
