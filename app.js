const correctAnswers = ['B', 'B', 'B', 'B', 'A' , 'B', 'B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const numberOfQuestions = correctAnswers.length;
const showResult = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault(); // don't refresh when submitted
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    
    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });
    score = score * 100 / numberOfQuestions;
    score = Math.round(score);
    
    // scroll to the top before showing result, as it's submitted
    scrollTo(0, 0); // (x, y) coordinate
    
    
    
    
    // doesn't work, guess the bootstrap style > inline style
    // showResult.style.display = 'block';

    showResult.classList.remove('d-none');
    
    // some fancy "animation"
    let output = 0;
    //just a fancy loop with a timer for it's iterations
    const timer = setInterval(() => {
        // update DOM, show result on page
        showResult.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        }else{
            output++;
        }
        
    }, 15);
    
});

// window object ... we don't need to sat window.method every time
// window.console.log('hello');
// console.log('hello'); // same as above

