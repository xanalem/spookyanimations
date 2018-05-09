////////// spinny temple

var temple = document.getElementById("temple"),
    mousecoords = document.getElementById("mousecoords"),
    animation = setInterval(spintemple, 5),
    degangle = 0;



////////// temple follows mouse

document.addEventListener("mousemove", templefollow)

function templefollow() {
    var mouseX = event.clientX,
        mouseY = event.clientY;

    temple.style.left = mouseX + "px";
    temple.style.top = mouseY + "px";
}

////////// keyboard interaction

var outputsize = document.getElementById("size"),
    bg = document.getElementById("black"),
    title = document.getElementById("title"),
    so = document.getElementById("so"),
    to = document.getElementById("to"),
    bo = document.getElementById("bo"),
    btime = 1,
    ttime = 2;

window.addEventListener("keypress", keyreception);




////////// increasing readability

var textx = 0,
    texty = 0,
    xstep = 1,
    ystep = 1;
setInterval(bouncingtext, 5);

function bouncingtext() {
    if (textx > 720 || textx < 0) {
        xstep = -xstep;
    }
    if (texty > 20 || texty < 0) {
        ystep = -ystep;
    }
    textx = textx + xstep;
    texty = texty + ystep;
    document.getElementById("bouncytext").style.top = texty + "px";
    document.getElementById("bouncytext").style.left = textx + "px";
}
