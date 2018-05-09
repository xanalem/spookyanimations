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

function keyreception(event) {
    if (event.key === "w") {
        btime = btime * 5
        bg.style.animationDuration = btime + "s"
        bo.textContent = "W/S = Change Background Period | Current: " + btime + "s."
    } else if (event.key === "s") {
        btime = btime / 5
        bg.style.animationDuration = btime + "s"
        bo.textContent = "A/D = Change Background Period | Current: " + btime + "s."
    } else if (event.key === "a") {
        ttime = ttime * 5
        title.style.animationDuration = ttime + "s"
        to.textContent = "A/D = Change Background Period | Current: " + ttime + "s."
    } else if (event.key === "d") {
        ttime = ttime / 5
        title.style.animationDuration = ttime + "s"
        to.textContent = "A/D = Change Background Period | Current: " + ttime + "s."
    }
}

////////// mouse click interaction

var size = 300;
document.addEventListener("click", mousereception);

function mousereception(MouseEvent) {
    if (MouseEvent.altKey === true) {
        size = size * 1.5
        temple.style.height = size + "px"
        so.textContent = "(ALT) + Left Mouse = Resize Temple | Current: " + size + "px."
    } else {
        size = size / 1.5
        temple.style.height = size + "px"
        so.textContent = "(ALT) + Left Mouse = Resize Temple | Current: " + size + "px."
    }
}

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
