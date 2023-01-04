const body = document.querySelector('.dark-theme');
const colors = document.querySelector(':root');
export default () => {
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
}