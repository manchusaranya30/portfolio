const text =
"AI & Machine Learning Student | Frontend Developer | Problem Solver";

let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect, 70);

}

}

window.onload = typeEffect;

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}
else{

topBtn.style.display = "none";

}

};

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});