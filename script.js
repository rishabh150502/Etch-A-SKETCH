console.log('hello');
let drawState = false;
const canvas = document.querySelector('.canvas');
let pixels = document.querySelectorAll('.pixels');
function createPixels(n) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < (n * n); i++) {
        const pixels = document.createElement('div');
        pixels.classList.add('pixels');
        pixels.style.cssText = `height: ${100 / n}%; width: ${100 / n}%;`;
        canvas.append(pixels);
        console.log(i);
    }
    pixels = document.querySelectorAll('.pixels');
    for (i of pixels) {
        i.addEventListener('mouseenter', function () {
            console.log(this);
            if (drawState) {
                this.classList.add('color');
            }
        });
    }
}

createPixels(16);

window.addEventListener('mousedown', function (e) {
    if(e.button===0){
    drawState = true;
    e.stopPropagation();
    }
    console.log(e.button);
});
window.addEventListener('mouseup', function (e) {
    if(e.button===0){
    drawState = false;
    e.stopPropagation();
    }
    console.log(e.button);
});

const btn = document.querySelector('.clear');
btn.addEventListener('click', function () {
    for (i of pixels) {
        i.classList.remove('color');
    }
});

const select = document.querySelector('#grid-size');
select.addEventListener('change', function () {
    console.log(select.value);
    let size = select.value;
    createPixels(size);
});

const inputs=document.querySelector('input');
inputs.addEventListener('change',function(){
    console.log(this.value);
    document.documentElement.style.setProperty(`--base`,this.value);
});
inputs.addEventListener('input',function(){
    console.log(this.value);
    document.documentElement.style.setProperty(`--base`,this.value);
});