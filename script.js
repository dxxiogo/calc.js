const input = document.querySelector('#input');
const resultInput = document.querySelector('#result');
const colors = document.querySelector(':root');
const keysAllowed = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1','2','3','+','0','.','%'];

const keysAllowedBtns = document.querySelectorAll('.key-option');

function calculate () {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
}

input.addEventListener('keydown', (eve) => {
    eve.preventDefault();
    keysAllowed.forEach((element) => {
        if (eve.key == element){
            input.value += eve.key;
            return 
        } 
    });
    if (eve.key == 'Backspace'){
        input.value = input.value.slice(0, -1);
    }
    if (eve.key === 'Enter'){
        calculate();
    }
});

keysAllowedBtns.forEach((element) => {
    element.addEventListener('click', (eve) => {
        input.value += eve.currentTarget.dataset.keyAllowed;
    })
});

document.querySelector('#eval').addEventListener('click', calculate);
document.querySelector('#clear').addEventListener('click', () => {
    input.value = '';
    input.focus();
});


const body = document.querySelector('.dark-theme');
const changeThemeBtn = document.querySelector('#change-theme-btn');
changeThemeBtn.addEventListener('click', () => {
    if(body.className === 'dark-theme'){
        colors.style.setProperty('--bg-color', '#f1f5f9');
        colors.style.setProperty('--border-color', '#aaa');
        colors.style.setProperty('--font-color', '#212529');
        colors.style.setProperty('--primary-color', '#26834a');
        body.className = 'light-theme';
    } else {
        colors.style.setProperty('--bg-color', '#212529');
        colors.style.setProperty('--border-color', '#666');
        colors.style.setProperty('--font-color', '#f1f5f9');
        colors.style.setProperty('--primary-color', '#4dff91');
        body.className = 'dark-theme';
    }
});

const btnCopyClipBoard = document.querySelector('#copy-text');
btnCopyClipBoard.addEventListener('click', (eve) => {
    const btn = eve.currentTarget;
    if(btn.innerText === 'Copy'){
        btn.innerText = 'Copied!' 
        btn.classList.add('success');
        navigator.clipboard.writeText(resultInput.value);
    } else {
        btn.innerText = 'Copy';
        btn.classList.remove('success')
    }
});