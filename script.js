var startBtn = document.querySelector(".start_btn")
var interval
var countDown = 60
var timerEl = document.querySelector(".timer_sec")
var questions = [{
    q:"Inside which HTML element do we put the JavaScript",
    a:["<script>", "src", "<p>", "body"],
    c:"<script"
},{
    q:"What JavaScript data type gives true of false",
    a:["boolean", "string", "array", "object"],
    c:"boolean"
},{
    q:"What is the proper way to write a function",
    a:["function=myFunction", "(function)", "function{}", "function myFunction()"],
    c:"function myFunction()"
},{
    q:"",
    a:[""],
    c:""
},{
    q:"",
    a:[""],
    c:""
}]
var qCounter = 0




function clickHandler(){
var quizBox = document.querySelector(".quiz_box")
quizBox.classList.remove("hide")
var infoBox = document.querySelector(".info_box")
infoBox.classList.add("hide")
startBtn.classList.add("hide")
timer()
displayQuestions()
}

function timer(){
interval = setInterval(function(){
countDown--
timerEl.textContent = countDown
if(countDown === 0) {
    clearInterval(interval)
}
}, 1000)
}
function displayQuestions() {
var queEl = document.querySelector(".que_text")
var optionEl = document.querySelector(".option")
var p = document.createElement("p")
p.textContent = questions[qCounter].q
queEl.append(p)
for(var i = 0; i < questions[qCounter].a.length; i++) {
var button = document.createElement("button")
button.textContent = questions[qCounter].a[i]
optionEl.append(button)
}
}







startBtn.addEventListener("click", clickHandler)