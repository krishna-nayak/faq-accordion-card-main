let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");
let arrowImage = document.querySelectorAll(".arrow img");
let questionText = document.querySelectorAll(".question-text");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        answer[i].classList.toggle("ans");
        arrowImage[i].classList.toggle("rotate");
        questionText[i].classList.toggle("text");
    });
}
