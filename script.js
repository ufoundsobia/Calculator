const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.toString().slice(0, -1);
}

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}