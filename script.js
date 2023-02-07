// The messages
const messages = [
    "background paper",
    "taste of heaven",
    "mind blowing design",
    "football news"
];
// targeting the space for the messages to show

const mssg_screen = document.querySelector(".msg_d");
let rand = [2700, 2900, 400];
let r = Math.random();
console.log(r);
window.onload = () => {
    let mssg = messages.map(item => {
        return `
        <article class="mssg">
            <h2>${item}</h2>
        </article>        
        `
    })

    mssg = mssg.join("");
    // at this point we have gotten our messages

    // assigning the variable to the mssg_screen
    mssg_screen.innerHTML = mssg;

    /* DISPLAY ON INTERVALS WITH TRANSITION */
    // calling the messages by targeting all the articles displayed
    let articleMssg = mssg_screen.querySelectorAll(".mssg");

    // the percentage we want to assign to the transform;
    let trans = 0;
    transformation (articleMssg, trans);
    
    // setting an interval for it to run
    // creating another num for it to translate;
    let transUp = 0;

    // creating a num to get where to add and remove my transition
    let num_for_transition = -100;

    // getting the length of my articles
    let artl_len = articleMssg.length;

    // getting trans length
    trans_length = artl_len * num_for_transition;

    // targeting the mssg h2 to change the collors as we go on
    const msg_h2 = mssg_screen.querySelectorAll(".mssg h2");

    let red = "red";
    let blue = "blue";
    let green = "green";
    let indigo = "indigo";
    let orange = "orange";

    // creating the pagination effect and putting it in the interval
    // targeting the dots
    let dots = document.querySelectorAll(".dots");

    // this below is to change the color of our span in the mesage
    let coc = document.querySelector(".ccl");

    // Now lets talk about the picture of items to be displayed
    // pic to be displayed in the first blok
    const p1 = [
        "../../vids_imgs/background/background2.jpg",
        "../../vids_imgs/food/amala.jpg",
        "../../vids_imgs/background/design5.jpg",
        "../../vids_imgs/food/fried.jpg"
    ];

    // pic to be displayed in the blok
    const p2 = [
        "../../vids_imgs/background/background1.webp",
        "../../vids_imgs/food/poundo.jpg",
        "../../vids_imgs/background/background2.jpg",
        "../../vids_imgs/food/amala.jpg"
    ];

    // pic to be displayed in the blok
    const p3 = [
        "../../vids_imgs/background/background5.jpg",
        "../../vids_imgs/food/spaghetti.jpg",
        "../../vids_imgs/background/background1.webp",
        "../../vids_imgs/food/poundo.jpg"
    ]

    // pic to be displayed in the blok
    const p5 = [
        "../../vids_imgs/background/background7.jpg",
        "../../vids_imgs/food/eba.jpg",
        "../../vids_imgs/background/background5.jpg",
        "../../vids_imgs/food/spaghetti.jpg"
    ]

    // pic to be displayed in the second to the last blok
    const p6 = [
        "../../vids_imgs/background/bg4.jpg",
        "../../vids_imgs/food/jellof.jpg",
        "../../vids_imgs/background/background7.jpg",
        "../../vids_imgs/food/eba.jpg"
    ];
    
    // pic to be displayed in the last blok
    const p7 = [
        "../../vids_imgs/background/design5.jpg",
        "../../vids_imgs/food/fried.jpg",
        "../../vids_imgs/background/bg5.jpg",
        "../../vids_imgs/food/jellof.jpg"
    ];

    // calling the blocks differently;
    const block1 = document.querySelector(".blok1");
    const block2 = document.querySelector(".blok2");
    const block3 = document.querySelector(".blok3");
    const block5 = document.querySelector(".blok5");
    const block6 = document.querySelector(".blok6");
    const block7 = document.querySelector(".blok7");

    // displaying the images.
    display(p1, block1);
    display(p2, block2);
    display(p3, block3);
    display(p5, block5);
    display(p6, block6);
    display(p7, block7);

    // calling all the images to stand in line and conform
    let imghold5 = block5.querySelectorAll(".imghold");
    let imghold1 = block1.querySelectorAll(".imghold");
    let imghold2 = block2.querySelectorAll(".imghold");
    let imghold3 = block3.querySelectorAll(".imghold");
    let imghold6 = block6.querySelectorAll(".imghold");
    let imghold7 = block7.querySelectorAll(".imghold");
    
    // arranging the images.
    let position_image = 0;
    arrange(imghold5, position_image);
    arrange(imghold1, position_image);
    arrange(imghold2, position_image);
    arrange(imghold3, position_image);
    arrange(imghold6, position_image);
    arrange(imghold7, position_image);
    
    // now how do i make this images move.
    let movepos = 0;
    // creating a function for the moving gallery
    movingImages = (arrOfImages, move) => {
        arrOfImages.forEach(item => {
            item.style.top = `${move}%`;
        })
        
        if(move >= 500){
            movepos = 0;
            arrOfImages.forEach(item => {
                // item.style.opacity = 0;
            })
        }else if(move == 100){
            arrOfImages.forEach(item => {
                item.classList.remove("trns");
            })
        }else{
            arrOfImages.forEach(item => {
                // item.style.opacity = 1;
                item.classList.add("trns");
            })
        }
    };
   
    setInterval(() => {
        movepos += 100;
        movingImages(imghold3, movepos);
        movingImages(imghold5, movepos);
    }, 2500);
    
    setInterval(() => {
        movingImages(imghold6, movepos);
        movingImages(imghold2, movepos);
    }, 2800)

    setInterval(() => {
        movingImages(imghold7, movepos);
        movingImages(imghold1, movepos);
    }, 3100)

    
    
    setInterval(() => {
        
        transUp -= 100;
        if(transUp <= -100){
            articleMssg.forEach(msg => {
                msg.classList.add("trns");
            })   
            
            for(let x = 0; x < dots.length; x++){
                dots[x].classList.remove("active");
                dots[1].classList.add("active");
                dots[1].style.color = "red";
            }
            coc.style.color = "red";
            color_transit(msg_h2, red)
        }
        if(transUp <= -200){
            color_transit(msg_h2, blue);
            coc.style.color = "blue";
            for(let x = 0; x < dots.length; x++){
                dots[x].classList.remove("active");
                dots[2].classList.add("active");
                dots[2].style.color = "blue";
            }
        }
        if(transUp <= -300){
            color_transit(msg_h2, green)
            coc.style.color = "green";
            for(let x = 0; x < dots.length; x++){
                dots[x].classList.remove("active");
                dots[3].classList.add("active");
                dots[3].style.color = "green";
            }
        }
        if(transUp <= -400){
            color_transit(msg_h2, indigo);
            coc.style.color = "indigo";
            // for(let x = 0; x < dots.length; x++){
                //     dots[x].classList.remove("active");
                // }
            }
            if(transUp <= -500){
            articleMssg.forEach(msg => {
                msg.classList.remove("trns");
            });
            
            for(let x = 0; x < dots.length; x++){
                dots[x].classList.remove("active");
                dots[0].classList.add("active");
            };
            coc.style.color = "orange";
            color_transit(msg_h2, orange);
            transUp = 0;
        }
        
        transformation(articleMssg, transUp);
        
        
    }, 2500)
}

// function for positioning the images rightly.
const arrange = (images, position)  => {
    for(let x = 0; x < images.length; x++){
        position -= 100;
        images[x].style.transform = `translateY(${position}%)`;
    }
}

// function for the display of my pix
display = (arr, blok) => {
    let show = arr.map(item => {
        return `<div class="imghold">
                         <img src="${item}" loading="lazy" alt="">
                </div>`   
    }).join("");

    blok.innerHTML = show;

}

// function to change color.
color_transit = (elem, col) => {
    elem.forEach(h2 => {
        h2.style.color = col;
    })
}


// creating a function to make things shorter
transformation = (elem, position) => {
    elem.forEach(msg => {
        position += 100;
        msg.style.transform = `translateY(${position}%)`;
    });
}

// transition setting function
transit = e => {
    e.style.transition = `2s`
}


