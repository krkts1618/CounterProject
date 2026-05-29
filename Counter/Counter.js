let display = document.getElementById("dis");
display.textContent = 0;
const a = document.getElementById("inbtn");
const b = document.getElementById("debtn");
const c = document.getElementById("rebtn");
let count = 0;
a.onclick = function () {
    count += 1;
    display.textContent = count;
}
b.onclick = function () {
    count -= 1;
    display.textContent = count;
}
c.onclick = function () {
    count = 0;
    display.textContent = count;
}