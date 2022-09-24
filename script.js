var startBtn = document.querySelector(".start_btn")
var interval
var countDown = 60
var timerEl = document.querySelector(".timer_sec")
var optionEl = document.querySelector(".option")
var questions = [{
    q: "Inside which HTML element do we put the JavaScript?",
    a: ["<script>", "src", "<p>", "body"],
    c: "<script>"
}, {
    q: "What JavaScript data type gives true of false?",
    a: ["boolean", "string", "array", "object"],
    c: "boolean"
}, {
    q: "What is the proper way to write a function?",
    a: ["function=myFunction", "(function)", "function{}", "function myFunction()"],
    c: "function myFunction()"
}, {
    q: "This is a structure that allows you to store multiple values in a single reference?",
    a: ["array", "string", "object", "number"],
    c: "array"
}, {
    q: "which operator adds value to a variable?",
    a: ["===", "=", "=", "*"],
    c: "="
}]
var qCounter = 0




function clickHandler() {
    var quizBox = document.querySelector(".quiz_box")
    quizBox.classList.remove("hide")
    var infoBox = document.querySelector(".info_box")
    infoBox.classList.add("hide")
    startBtn.classList.add("hide")
    timer()
    displayQuestions()
}

function timer() {
    interval = setInterval(function () {
        countDown--
        timerEl.textContent = countDown
        if (countDown === 0) {
            clearInterval(interval)
        }
    }, 1000)
}
function displayQuestions() {
    optionEl.innerHTML = ""
    var queEl = document.querySelector(".que_text")
    queEl.innerHTML = ""
    var p = document.createElement("p")
    p.textContent = questions[qCounter].q
    queEl.append(p)
    for (var i = 0; i < questions[qCounter].a.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[qCounter].a[i]
        optionEl.append(button)
    }
}
function checkAnswer(event) {
    var answer = event.target.textContent
    var correctAnswer = questions[qCounter].c
    if (answer === correctAnswer) {
        console.log("True")
    } else {
        console.log("False")
        countDown -= 5
    }
    qCounter++
    displayQuestions()
}

function endGame () {
    //when timer hits 0
    //when youve asnswered the last question
}

function highScores() {

}






optionEl.addEventListener("click", checkAnswer)
startBtn.addEventListener("click", clickHandler)