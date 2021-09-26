console.log('hello');

const canvas = document.querySelector('.canvas');
const clear = document.querySelector('.clear');
const erase = document.querySelector('.erase');
const select = document.querySelector('select');
const colorPanel = document.querySelector('input');
let grid = document.querySelectorAll('.pixels');
let drawState = false;
let eraseState = false;
let grid_value = 16;
let currentColor=colorPanel.value;

function createGrid(canvas, value) {
    canvas.innerHTML = "";
    for (let i = 0; i < (value * value); i++) {
        const pixels = document.createElement('div');
        pixels.classList.add('pixels');
        pixels.classList.add(`${i}`);
        pixels.style.cssText = `height: ${100 / value}%; width: ${100 / value}%;`;
        canvas.append(pixels);
    }
    grid = document.querySelectorAll('.pixels');
    for (i of grid) {
        i.addEventListener('mouseenter', function () {
            draw(drawState, this);
        });
    }
}

function draw(drawState, x) {
    if (eraseState === true && drawState === true) {
        x.style["background-color"] = "white";
    }
    else if (drawState === true && eraseState === false) {
        x.style["background-color"] = `${currentColor}`;
    }

}
//Draw State check
window.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        drawState = true;
    }
});
window.addEventListener('mouseup', function (e) {
    if (e.button === 0) {
        drawState = false;
    }
});

//clear
clear.addEventListener('click', () => {
    createGrid(canvas, grid_value);
});

erase.addEventListener('click', () => {
    if (eraseState === false) {
        erase.textContent = 'draw';
        eraseState = true;
    }
    else {
        erase.textContent = 'erase';
        eraseState = false;
    }
});

select.addEventListener('change', function() {
    grid_value= this.value;
    createGrid(canvas, this.value);
});

colorPanel.addEventListener('input', function(){
    currentColor=this.value;
});

window.onload = (e) => {
    createGrid(canvas, grid_value);
};
