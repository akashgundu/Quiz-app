let currentQuestionIndex = 0;
let score = 0;
let timer;
const timerDuration = 10;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which programming language is known for building web pages?",
        options: ["Java", "Python", "HTML", "C++"],
        correctAnswer: "HTML"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        correctAnswer: "Mitochondria"
    }
];

function saveUsername() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}

// Shuffle function to randomize the order of questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions array
shuffleArray(questions);

function validateUsername() {
    const username = document.getElementById("username").value;

    if (username.trim() !== "") {
        localStorage.setItem("username", username);
        showQuiz();
        showNextQuestion();
    } else {
        alert("Please enter a valid username.");
    }
}

function showQuiz() {

    const loginContainer = document.getElementById("login-container");
    const quizContainer = document.getElementById("quiz-container");

    loginContainer.classList.add("fade-out");
    quizContainer.classList.add("fade-in");

    setTimeout(() => {
        loginContainer.style.display = "none";
        quizContainer.style.display = "block";
        loginContainer.classList.remove("fade-out");
        quizContainer.classList.remove("fade-in");
    }, 500);
}

function startTimer() {
    let timeRemaining = timerDuration;

    function updateTimer() {
        const timerElement = document.getElementById("timer");
        timerElement.textContent = timeRemaining;


        // Display the countdown in a visually appealing way
        if (timeRemaining <= 5) {
            timerElement.style.color = "red"; // Change color to red when 5 seconds or less
        }
        else {
            timerElement.style.color = ""; // Reset color
        }
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timer);
            selectOption(null, -1);
        }
    }

    updateTimer();
    timer = setInterval(updateTimer, 1000);
}


function displayQuestion(question) {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const questionNumberElement = document.getElementById("question-number");
    const totalQuestionsElement = document.getElementById("total-questions");


    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(option, index);
        optionsContainer.appendChild(optionElement);
    });
    questionNumberElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = questions.length;

    startTimer();
}

function selectOption(selectedOption, optionIndex) {
    clearInterval(timer); // Stop the timer when an option is selected
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.correctAnswer) {
        score++;
    }

    markSelectedOption(optionIndex, selectedOption === question.correctAnswer);
    document.getElementById("next-button").disabled = false;
}

function markSelectedOption(optionIndex, isCorrect) {
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.style.backgroundColor = index === optionIndex ? (isCorrect ? "green" : "red") : "";
        option.style.pointerEvents = "none";
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-button").disabled = true;
    showNextQuestion();
}

function showNextQuestion() {
    clearInterval(timer); // Clear the previous timer
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        displayQuestion(question);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score;

    // Store the score in local storage
    const username = localStorage.getItem("username");
    const userScores = JSON.parse(localStorage.getItem("scores")) || {};
    userScores[username] = score;
    localStorage.setItem("scores", JSON.stringify(userScores));
}

function playAgain() {
    currentQuestionIndex = 0;
    score = 0;
    showQuiz();
    showNextQuestion();
}
function updateTimerDisplay() {
    document.getElementById("timer").textContent = timerDuration;
}

// Initial display
updateTimerDisplay();
