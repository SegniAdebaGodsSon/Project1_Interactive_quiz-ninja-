const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const numberOfQuestions = correctAnswers.length;
const showResult = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault(); // don't refresh when submitted
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    
    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });
    score = score * 100 / numberOfQuestions;
    
    // scroll to the top before showing result, as it's submitted
    scrollTo(0, 0); // (x, y) coordinate
    
    
    // update DOM, show result on page
    showResult.querySelector('span').textContent = `${score}%`;
    
    // doesn't work, guess the bootstrap style > inline style
    // showResult.style.display = 'block'; 
    
    showResult.classList.remove('d-none');
    
    
});

// window object ... we don't need to sat window.method every time
// window.console.log('hello');
// console.log('hello'); // same as above

