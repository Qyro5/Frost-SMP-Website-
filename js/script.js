// Frost SMP Website Scripts


// Mobile navigation

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");


    if(menuButton.innerHTML === "☰") {

        menuButton.innerHTML = "✕";

    } else {

        menuButton.innerHTML = "☰";

    }

});



// Close mobile menu when clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.innerHTML = "☰";

    });

});





// Navbar glass effect while scrolling

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50) {

        navbar.style.background =
        "rgba(5,20,35,0.9)";

    }

    else {

        navbar.style.background =
        "rgba(5,20,35,0.45)";

    }


});







// Snow particles


const particleContainer =
document.querySelector(".particles");


function createSnow() {


    const snow =
    document.createElement("span");


    snow.innerHTML = "❄";


    snow.style.position = "absolute";

    snow.style.left =
    Math.random() * 100 + "%";


    snow.style.top = "-30px";


    snow.style.fontSize =
    Math.random() * 15 + 10 + "px";


    snow.style.opacity =
    Math.random();


    snow.style.color =
    "#bdefff";


    particleContainer.appendChild(snow);



    const fallTime =
    Math.random() * 5000 + 5000;



    snow.animate(

        [

            {
                transform:"translateY(0px)"
            },

            {
                transform:
                `translateY(${window.innerHeight + 100}px)`
            }

        ],

        {

            duration:fallTime,

            easing:"linear"

        }

    );



    setTimeout(() => {

        snow.remove();

    }, fallTime);


}



setInterval(createSnow,250);







// Reveal sections on scroll


const revealElements =
document.querySelectorAll(
".feature, .item, .team-card, .server-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";

    }


});


},
{

threshold:0.2

});





revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";

    element.style.transition=
    "0.7s ease";


    observer.observe(element);


});







// Fake copy IP button


const copyButton =
document.querySelector(".server-card button");


copyButton.addEventListener("click",()=>{


    navigator.clipboard.writeText(
        "Coming Soon"
    );


    copyButton.innerHTML =
    "COPIED!";


    setTimeout(()=>{

        copyButton.innerHTML =
        "COPY IP";

    },2000);


});