var thing = document.getElementById("thing");
var container = document.getElementById("container");
var mousecoords = document.getElementById("mousecoords");

container.addEventListener("mousemove", printMouseCoords);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    mousecoords.textContent = mouseX + ", " + mouseY;
}

container.addEventListener("mousemove", moveThing);

function moveThing(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (thing.clientWidth / 2);
    var yPosition = event.clientY - container.getBoundingClientRect().top - (thing.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    thing.style.left = xPosition + "px";
    thing.style.top = yPosition + "px";
}


window.addEventListener("keypress", changeThingColor);

function changeThingColor(event) {
    if (event.key === "b") {
        thing.style.background = "blue";
    } else if (event.key === "o") {
        thing.style.background = "orange";
    } else {
        thing.style.background = "green";
    }
}
