//  SELECTED ITEMS
const doc_body = document.querySelector("body");
const downbtn = document.querySelector(".down_you_go");
const upbtn = document.querySelector(".up_you_go");
const form = document.querySelector(".form1");
const logo = form.querySelector(".logo");
const form_wrap = document.querySelector(".form_wrap");
const summary = form.querySelector(".summary");
const input_container = form.querySelector(".input_container");
const login = document.querySelector(".login");
const closeform = form.querySelector(".close_form");



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
let call = true;
let pausepage = false;
let currentpage;
let oneSectionHeight;
oneSectionHeight = page0.clientHeight;
window.addEventListener("resize", () => {
    oneSectionHeight = page0.clientHeight
})

// EVENTS LISTENERS
doc_body.addEventListener("keyup", (e) => {
    let datakey = e.key;
    if(pausepage) {
        num = 0;
        // return ;
    }else {
        if(datakey == "ArrowDown") {
            if (num >= (oneSectionHeight * (pages_arr.length - 1))) {
                num = oneSectionHeight * (pages_arr.length - 1);
            }else{
                num += oneSectionHeight;
                window.scrollY = num;
                // console.log(num);
                window.scrollTo(0, window.scrollY);
            }
        }else if(datakey == "ArrowUp") {
            // console.log(num);
            if (num <= 0) {
                num = 0;
            }else {
                num -= oneSectionHeight;
                window.scrollY = num;
                window.scrollTo(0, window.scrollY);
            }
        }
    }
})// DOC BODY KEYUP  EVENTS




downbtn.addEventListener("click", () => {
    window.scrollTo(0, page1)
})

upbtn.addEventListener("click", () => {
    let pos = add * (pages_arr.length - 1);
    window.scrollTo(0, -pos);
    num = 0;
})

// FUNCTION for scroll
// promises
const call_form = (time) => {
    return new Promise((resolve, reject) => {
        
        if(call) {
            setTimeout(() => {
                resolve();
            }, time);
        }else {
            setTimeout(() => {
                // reject("error")
            }, time);
        }

    })
}

const closeup = (time, work) => {
    return new Promise((resolve) => {
        if(!call) {
            setTimeout(() => {
                resolve( work() );
            }, time);
        }
    })
}

// async
const open = async() => {
    try{
        await call_form(1000);
        form_wrap.classList.add("show_form_wrap");

        await call_form(500);
        form.classList.add("normalform");

        await call_form(400);
        form.classList.add("removeborder");

        await call_form(800);
        logo.classList.add("showlogo");

        await call_form(1000);
        summary.classList.add("showsummary");

        await call_form(500);
        input_container.classList.add("showinput");
        closeform.classList.add("showclose");

    }
    catch(err){
        console.log(err)
    }
    finally{
        call = false;
    }
}

const dismiss = () => {
    closeup(300, () => {
        input_container.classList.remove("showinput");
        closeform.classList.remove("showclose");
    })
    .then(() => {
        return closeup(500, () => {
            summary.classList.remove("showsummary");
        })
    })
    .then(() => {
        return closeup(500, () => {
            logo.classList.remove("showlogo");
        })
    })
    .then(() => {
        return closeup(400, () => {
            form.classList.remove("removeborder");
        })
    })
    .then(() => {
        return closeup(500, () => {
            form.classList.remove("normalform");
        })
    })
    .then(() => {
        return closeup(500, () => {
            form_wrap.classList.remove("show_form_wrap");
        })
    })
    .finally(() => call = true);
}

login.addEventListener("click", () => {
    open();
    pausepage = true;
    currentpage = window.pageYOffset;
});

closeform.addEventListener("click", () => {
    dismiss();
    pausepage = false;
});

window.addEventListener("scroll", () => {
    if(pausepage) {
        window.scrollTo(0, currentpage);
        num = 0;
    }
})