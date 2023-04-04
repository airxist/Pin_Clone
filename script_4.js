// SELECTED ELEMENTS OR ITEMS
const fwphotos = document.querySelectorAll(".phone_container");

// OPTIONS OR CONDITIONS
const photo_class = [
    "firstly",
    "secondly",
    "thirdly",
    "fourthly",
    "fifthly"
]

let setting = setInterval(rotatephoto, 3000);

function rotatephoto() {
    let num = 0;
    fwphotos.forEach(photo => {
        photo.classList.remove(photo_class[num]);
        num++;
    })
    num = 0;

    let pop = photo_class.pop();
    photo_class.unshift(pop);

    fwphotos.forEach(img => {
        img.classList.add(photo_class[num]);
        num++;
    })
}

fwphotos.forEach(img => {
    img.addEventListener("mouseover", () => clearInterval(setting))
})

fwphotos.forEach(img => {
    img.addEventListener("mouseleave", () => setting = setInterval(rotatephoto, 3000))
})