//  SELECTED ITEMS
const doc_body = document.querySelector("body");
const downbtn = document.querySelector(".down_you_go");
const upbtn = document.querySelector(".up_you_go");



// CONDITIONS OR OPTIONS
let num = 0;
const pages_arr = [
    ".first_wrap",
    ".second_wrap",
    ".third_wrap",
    ".fourth_wrap",
    ".fifth_wrap"
]
let page0 = document.querySelector(pages_arr[0]);
let page1 = document.querySelector(pages_arr[1]).offsetTop;


let add;
setInterval(() => {
    add = page0.clientHeight;
}, 1000);

// EVENTS LISTENERS
doc_body.addEventListener("keyup", (e) => {
    let datakey = e.key;
    if(datakey == "ArrowDown") {
        num += add;
        window.scrollTo(0, num);
    }else if(datakey == "ArrowUp") {
       num -= add;
       window.scrollTo(0, num);
    }
    console.log(doc_body.scrollTop)
})// DOC BODY EVENTS
window.addEventListener("scroll", (e) => {
})// window events on scroll
downbtn.addEventListener("click", () => {
    window.scrollTo(0, page1)
})
upbtn.addEventListener("click", () => {
    let pos = add * 4;
    window.scrollTo(0, -pos);
    num = 0;
})
