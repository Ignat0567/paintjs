const canvas = document.getElementById('jsCanvas');

let painting = false;

function onMouseMove(event){
    console.log(event);
    x = event.offsetX;
    y = event.offsetY;
    console.log(x, y);
}

function onMouseDown(event){
    console.log(event);
}

function onMouseUp(event){
    console.log(event);
}

if (canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
}