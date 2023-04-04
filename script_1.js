// SELECTED ELEMENTS OR TAGS
const next_title = [...document.querySelectorAll(".next_title")];
const indicate = [...document.querySelectorAll(".indicate")];
const first_slide = [...document.querySelectorAll(".first")];
const second_slide = [...document.querySelectorAll(".second")];
const third_slide = [...document.querySelectorAll(".third")];
const fourth_slide = [...document.querySelectorAll(".fourth")];
const fifth_slide = [...document.querySelectorAll(".fifth")];
const sixth_slide = [...document.querySelectorAll(".sixth")];
const body = document.querySelector("body");

// the styles or classes to deal with on intervals
let styleclass = [
    ["shownext", "invalid", "invalid", "invalid", "invalid"],
    ["active", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
    ["showimage", "invalid", "invalid", "invalid", "invalid"],
]
let count = styleclass.length;
let numcount = 0;
let t = setInterval(()=> {
    all();
    
}, 6000)

function all() {
    next_generator(next_title, 0, 0);
    next_generator(indicate, 1, 0);
    next_generator(first_slide, 2, 0);
    next_generator(second_slide, 3, .15);
    next_generator(third_slide, 4, .25);
    next_generator(fourth_slide, 5, .35);
    next_generator(fifth_slide, 6, .45);
    next_generator(sixth_slide, 7, .55);
}

function next_generator(arr, digit, trans) {
    let num = 0;
    arr.forEach(title => {
        title.classList.remove(styleclass[digit][num]);
        num++;
    })

    num = 0;
    let pop = styleclass[digit].pop();
    styleclass[digit].unshift(pop);

    arr.forEach(title => {
        title.classList.add(styleclass[digit][num]);
        title.style.transitionDelay = trans + "s";
        num++;
    })
}

// creating a bubble effect 
document.addEventListener("click", (e) => {
    let bub = document.createElement("span");
    bub.setAttribute("class", "bubble");
    body.appendChild(bub)
    bub.style.top = e.pageY - 25 + "px";
    bub.style.left = e.pageX - 25 + "px";
    setTimeout(() => {
        body.removeChild(bub);
    }, 300);
})