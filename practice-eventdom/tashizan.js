let b = document.querySelector('#calc');

function calc() {
    let left = document.querySelector('#left');
    let right = document.querySelector('#right');
    let answer = document.querySelector('#answer');

    let result = Number(left.value) + Number(right.value);

    answer.textContent = result;
}

b.addEventListener('click', calc);