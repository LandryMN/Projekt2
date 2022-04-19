const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
 
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerHTML = '';
        } else if (item.id == 'backspace') {
            let string = display.innertext.toString();
            display.innerHTML = string.substr(0, string.length - 1);
        } else if (display.innerHTML != '' && item.id == 'equal') {
            display.innerHTML = eval(display.innertext);
        } else if (display.innerHTML == '' && item.id == 'equal') {
            display.innerHTML = 'Empty!';
            setTimeout(() => (display.innertext = ''), 2000);
        } else {
            display.innerHTML += item.id;
        }
    }
});
 
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('calculator');
const toggleicon = document.querySelector('toggleicon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

