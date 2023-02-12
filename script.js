const buttons = document.querySelectorAll('.przycisk');
const result = document.querySelector('#result');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (button.innerHTML === '0') {
                button.innerHTML = '1';
                result.innerHTML = parseInt(result.innerHTML, 10) + 2 ** index;
            } 
            else {
                button.innerHTML = '0';
                result.innerHTML = parseInt(result.innerHTML, 10) - 2 ** index;
            }
        });
    });
