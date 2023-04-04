// SELECTED ELEMENTS OR TAGS
const wrap = document.querySelector(".third_wrap");
const photos = document.querySelectorAll(".third_pic");

// FUNCTIONS WITH ARROW FUNCTION
const pop_images = () => {
    photos.forEach(img => {
        img.classList.add("normalize")
    })
}
const push_images = () => {
    photos.forEach(img => {
        img.classList.remove("normalize")
    })
}
// CONDITIONS AND WHAT I CALL OPTIONS
let pos, page;
window.addEventListener("scroll", () => {
    pos = wrap.offsetTop;
    page = this.pageYOffset;

    page >= pos? pop_images() : push_images();
})


