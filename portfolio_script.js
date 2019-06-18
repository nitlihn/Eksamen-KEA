window.addEventListener("load", sidenVises);

let activeTheme = 1;
let oldTheme;
const themes = [".theme_1", ".theme_2", ".theme_3", ".theme_4"];

function sidenVises() {
    document.querySelector("#btn1").addEventListener("click", function () {
        updateTheme(1)
    });
    document.querySelector("#btn2").addEventListener("click", function () {
        updateTheme(2)
    });
    document.querySelector("#btn3").addEventListener("click", function () {
        updateTheme(3)
    });
    document.querySelector("#btn4").addEventListener("click", function () {
        updateTheme(4)
    });
    document.querySelectorAll(".hover_item").forEach(function(item) {item.addEventListener("mouseover", mouseOver)});
    document.querySelectorAll(".hover_item").forEach(function(item) {item.addEventListener("mouseout", mouseOut)});
}

function updateTheme(number) {
    console.log(number);
    document.querySelectorAll(themes[activeTheme-1]).forEach(function(box) {box.classList.add("hidden");
    });

    document.querySelector("#btn"+activeTheme).classList.remove("button_active");
    activeTheme = number;
    document.querySelectorAll(themes[number-1]).forEach(function(box) {box.classList.remove("hidden");
    });
    document.querySelector("#btn"+number).classList.add("button_active");

}

function mouseOver() {
    document.querySelectorAll(".picture_box").forEach(function(pic) {pic.classList.remove("hover_effect");
    });
     document.querySelectorAll(".text_box").forEach(function(pic) {pic.classList.add("hover_effect");
    });

}


function mouseOut() {

     document.querySelectorAll(".picture_box").forEach(function(pic) {pic.classList.add("hover_effect");
    });
    document.querySelectorAll(".text_box").forEach(function(pic) {pic.classList.remove("hover_effect");
    });
}
