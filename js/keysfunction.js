import calculate from "./calculate.js"

const keysAllowed = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1','2','3','+','0','.','%'];
const input = document.querySelector('#input');

const keyboardHandle = (eve) => {
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
}

const clearInput = () => {
    input.value = '';
    input.focus();
}

export {keyboardHandle, clearInput};