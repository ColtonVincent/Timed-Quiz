var body = document.getElementsByTagName('body')
var highScoreArray = JSON.parse(localStorage.getItem("highScores")) || []
for (let i = 0; i < highScoreArray.length; i++) {
    const score = highScoreArray[i];
    var p = document.createElement('p')
    p.textContent = `user: ${score.ins} score: ${score.score}`
    body[0].append(p)
}