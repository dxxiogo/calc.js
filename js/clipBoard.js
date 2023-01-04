const resultInput = document.querySelector('#result');
export default (eve) => {
    const btn = eve.currentTarget;
    if(btn.innerText === 'Copy'){
        btn.innerText = 'Copied!' 
        btn.classList.add('success');
        navigator.clipboard.writeText(resultInput.value);
    } else {
        btn.innerText = 'Copy';
        btn.classList.remove('success')
    }
}
