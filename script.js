console.log('hello');
let drawState=false;
const canvas=document.querySelector('.canvas');
for(let i=0;i<(16*16);i++){
    const pixels=document.createElement('div');
    pixels.classList.add('pixels');
    pixels.style.cssText=`height: ${100/16}%; width: ${100/16}%;`;
    canvas.append(pixels);
    console.log(i);
}
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
}