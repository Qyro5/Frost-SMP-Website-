// Frost SMP Website Interactions


// Mobile navigation

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    if(nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "8%";
        nav.style.background = "rgba(10,30,50,0.9)";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";

    }

});




// Active navigation while scrolling

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 120;


        if(scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });



    links.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }


    });



});






// Frost particle system


const snowContainer = document.querySelector(".snow");


function createSnowflake(){


    const snowflake = document.createElement("span");


    snowflake.innerHTML = "❄";


    snowflake.style.position = "absolute";


    snowflake.style.left =
    Math.random() * 100 + "%";


    snowflake.style.top = "-20px";


    snowflake.style.fontSize =
    Math.random() * 15 + 10 + "px";


    snowflake.style.opacity =
    Math.random();



    snowflake.style.color =
    "#bcecff";



    snowContainer.appendChild(snowflake);



    const duration =
    Math.random() * 5 + 5;



    snowflake.animate(

        [

            {
                transform:"translateY(0px)"
            },

            {
                transform:
                `translateY(${window.innerHeight + 50}px)`
            }

        ],

        {

            duration:
            duration * 1000,

            iterations:1

        }

    );



    setTimeout(()=>{

        snowflake.remove();

    }, duration * 1000);


}



setInterval(createSnowflake, 250);






// Frost glow effect on buttons


const button =
document.querySelector(".main-button");


button.addEventListener("mouseenter",()=>{

    button.style.boxShadow =
    "0 0 40px #8be3ff";

});


button.addEventListener("mouseleave",()=>{

    button.style.boxShadow =
    "none";

});






// Navbar background change on scroll


const navbar =
document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,20,35,0.85)";

    }

    else {

        navbar.style.background =
        "rgba(10,30,50,0.45)";

    }


});