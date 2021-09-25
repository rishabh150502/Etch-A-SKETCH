console.log('hello');
let drawState=false;
const canvas=document.querySelector('.canvas');
function createPixels(n){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
for(let i=0;i<(n*n);i++){
    const pixels=document.createElement('div');
    pixels.classList.add('pixels');
    pixels.style.cssText=`height: ${100/n}%; width: ${100/n}%;`;
    canvas.append(pixels);
    console.log(i);
}
}
createPixels(16);
window.addEventListener('mousedown',function(){
    drawState=true
    console.log(true);
});
window.addEventListener('mouseup',function(){
    drawState=false;
    console.log(false);
});

const pixels=document.querySelectorAll('.pixels');
for(i of pixels){
    i.addEventListener('mouseenter',function(){
        console.log(this);
        if(drawState){
        this.classList.add('color');
        }
    });

    const btn=document.querySelector('.clear');
    btn.addEventListener('click',function(){
        for(i of pixels){
            i.classList.remove('color');
        }
    });

    const select=document.querySelector('#grid-size');
    select.addEventListener('change',function(){
        console.log(select.value);
        let size=select.value;
        createPixels(size);
    });
}