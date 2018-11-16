const div = document.querySelector("div");
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let moveActive = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
    console.log("mousedown");
    div.style.backgroundColor = `grey`;
    moveActive = !moveActive;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY)
});
div.addEventListener("mousemove", (e) => {
    console.log("mousemove");
    if (moveActive) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = `${divX -50}px`;
        div.style.top = `${divY -50}px`;
    }
});
div.addEventListener("mouseup", () => {
    console.log("mouseup");
    div.style.backgroundColor = "darkorange";
    moveActive = !moveActive;
});