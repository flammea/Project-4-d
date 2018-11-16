const div = document.querySelector("div");
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener("mousedown", () => {
    console.log("mousedown");
    div.style.backgroundColor = `grey`;
});
div.addEventListener("mousemove", (e) => {
    console.log("mousemove");
    divX = e.clientX;
    divY = e.clientY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
});
div.addEventListener("mouseup", () => {
    console.log("mouseup");
    div.style.backgroundColor = `darkorange`;

});