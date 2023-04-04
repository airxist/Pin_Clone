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
let prev_pageY;


let add;
setInterval(() => {
    add = page0.clientHeight;
}, 1000);

// EVENTS LISTENERS
doc_body.addEventListener("keyup", (e) => {
    let datakey = e.key;
    if(datakey == "ArrowDown") {
        if (num >= (add * (pages_arr.length - 1))) {
            num = add * (pages_arr.length - 1);
            console.log(num);
        }else{
            num += add;
            window.scrollY = num;
            window.scrollTo(0, window.scrollY);
        }
    }else if(datakey == "ArrowUp") {
        console.log(num);
        if (num <= 0) {
            num = 0;
        }else {
            num -= add;
            window.scrollY = num;
            window.scrollTo(0, window.scrollY);
        }
    }
})// DOC BODY KEYUP  EVENTS

window.addEventListener("touchstart", (e) => {
    prev_pageY = e.touches[0].screenY;
})

// The touch effect
window.addEventListener("touchmove", (e) => {
    let current_pageY = e.touches[0].screenY;
    console.log(num)
    let windowPage = window.pageYOffset;
    if(windowPage < add) {
        num = add;
    }else if(windowPage < (add * 2)) {
        num = (add * 2);
    }else if( windowPage < (add * 3)) {
        num = (add * 3)
    } else if ( windowPage < (add * 4)) {
        num = (add * 4);
    }

    if(current_pageY < prev_pageY) {
        console.log(num);
        window.scrollTo(0, num)
    }else {
        num -= add;
        console.log(num);
        window.scrollTo(0, num)
    }
})

downbtn.addEventListener("click", () => {
    window.scrollTo(0, page1)
})

upbtn.addEventListener("click", () => {
    let pos = add * (pages_arr.length - 1);
    window.scrollTo(0, -pos);
    num = 0;
})
