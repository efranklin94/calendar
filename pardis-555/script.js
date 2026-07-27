// شروع سورپرایز
function startLove() {

    const welcome = document.getElementById("welcome");
    const content = document.getElementById("content");


    // مخفی کردن صفحه اول
    welcome.style.display = "none";


    // نمایش صفحه اصلی
    content.style.display = "block";


    // شروع قلب ها
    createHearts();
    createPetals();

    // ظاهر شدن عکس ها با تاخیر
    animatePhotos();


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



// ساخت قلب های شناور
function createHearts(){


    const container = document.getElementById("hearts");


    setInterval(()=>{


        const heart = document.createElement("div");


        heart.className = "heart";


        heart.innerHTML = "❤️";


        heart.style.left =
        Math.random()*100 + "%";


        heart.style.fontSize =
        (15 + Math.random()*35) + "px";


        heart.style.animationDuration =
        (4 + Math.random()*4) + "s";


        container.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },8000);



    },300);



}




// افکت ظاهر شدن عکس ها
function animatePhotos(){


    const photos =
    document.querySelectorAll(".gallery img");


    photos.forEach((photo,index)=>{


        photo.style.opacity="0";


        photo.style.transform=
        "translateY(50px)";


        setTimeout(()=>{


            photo.style.transition=
            "all 1s ease";


            photo.style.opacity="1";


            photo.style.transform=
            "translateY(0)";



        },index*700);



    });


}



// افکت هنگام اسکرول
window.addEventListener(
"scroll",
()=>{


const boxes =
document.querySelectorAll(
".box,.letter"
);



boxes.forEach(box=>{


const position =
box.getBoundingClientRect().top;


const screen =
window.innerHeight;


if(position < screen - 100){

box.style.opacity="1";

box.style.transform=
"translateY(0)";

}


});



});
// --------------------
// Stars
// --------------------

function createStars(){

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDuration=
(2+Math.random()*4)+"s";

stars.appendChild(star);

}

}

createStars();


// --------------------
// Petals
// --------------------

function createPetals(){

const petals=document.getElementById("petals");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.fontSize=
(18+Math.random()*18)+"px";

petal.style.animationDuration=
(8+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},13000);

},900);

}
