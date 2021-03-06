

const questions = document.querySelectorAll('.question');

for(let question of questions){
    question.addEventListener('click', function () {
        let answer = question.nextElementSibling;
        let btn = question.previousElementSibling;
        question.classList.toggle('questionAct')
        answer.classList.toggle('answerAct')
        btn.classList.toggle('btnAct')
    }) 
};

