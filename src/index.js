import calculate from "./calculate.js";
import clipBoard from "./clipBoard.js";
import switchTheme from "./switchTheme.js";
import "./css/style.css";
import {keyboardHandle, clearInput} from "./keysfunction.js"

const input = document.querySelector('#input');
const keysAllowedBtns = document.querySelectorAll('.key-option');

input.addEventListener('keydown', keyboardHandle);

keysAllowedBtns.forEach((element) => {
    element.addEventListener('click', (eve) => {
        input.value += eve.currentTarget.dataset.keyAllowed;
    })
});

document.querySelector('#eval').addEventListener('click', calculate);
document.querySelector('#clear').addEventListener('click', clearInput );


const changeThemeBtn = document.querySelector('#change-theme-btn');
changeThemeBtn.addEventListener('click', switchTheme);

const btnCopyClipBoard = document.querySelector('#copy-text');
btnCopyClipBoard.addEventListener('click', clipBoard);