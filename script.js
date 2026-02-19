const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language runs in the browser?",
        answers: ["Python", "Java", "C++", "JavaScript"],
        correct: 3
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("btn" + i).innerHTML = q.answers[i];
    }

    document.getElementById("result").innerHTML = "";
}

function checkAnswer(index) {
    const correctIndex = questions[currentQuestion].correct;

    if (index === correctIndex) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Wrong answer.";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    loadQuestion();
}

loadQuestion();
