const text =
"AI & Machine Learning Student | Frontend Developer | SIH 2025 Finalist";

let index = 0;

function typeWriter() {

if (index < text.length) {

document.getElementById("typing").innerHTML +=
text.charAt(index);

index++;

setTimeout(typeWriter, 70);

}

}

window.onload = () => {
typeWriter();
};

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
topBtn.style.display = "block";
}
else {
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});
