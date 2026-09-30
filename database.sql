CREATE TABLE Homework (

    id INTEGER PRIMARY KEY,

    subject TEXT NOT NULL,

    task TEXT NOT NULL,

    due_date TEXT NOT NULL,

    priority TEXT

);


INSERT INTO Homework
(subject, task, due_date, priority)

VALUES
(
    'Maths',
    'Integration worksheet',
    '2026-08-25',
    'High'
);


INSERT INTO Homework
(subject, task, due_date, priority)

VALUES
(
    'English',
    'Macbeth essay',
    '2026-08-27',
    'Medium'
);


INSERT INTO Homework
(subject, task, due_date, priority)

VALUES
(
    'Science',
    'Chemistry questions',
    '2026-08-29',
    'Low'
);


SELECT * FROM Homework;


SELECT *
FROM Homework
WHERE subject = 'Maths';


SELECT *
FROM Homework
WHERE priority = 'High';


SELECT *
FROM Homework
ORDER BY due_date;
