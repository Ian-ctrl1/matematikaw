document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function switchTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    document.querySelectorAll(".tab").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`button[onclick="switchTab('${tabId}')"]`).classList.add("active");
}

function calculate() {
    let input = document.getElementById("calc-input").value;
    try {
        let result = eval(input);
        document.getElementById("calc-result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("calc-result").innerText = "Error!";
    }
}

// Practice Mode Logic
const questions = [
    { question: "5 + 3 =", answer: "8" },
    { question: "10 - 4 =", answer: "6" },
    { question: "7 * 2 =", answer: "14" },
    { question: "9 / 3 =", answer: "3" },
    { question: "12 + 5 =", answer: "17" },
    { question: "15 - 6 =", answer: "9" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer === questions[currentQuestionIndex].answer) {
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Wrong! Try again.";
    }
}
