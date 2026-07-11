/* ==========================================================
   MOHOSINA AKHTER PORTFOLIO
   script.js
==========================================================*/

/* ==========================================================
   MOBILE MENU
==========================================================*/

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon = hamburger.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==========================================================
   DARK MODE
==========================================================*/

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

/* Load saved theme */

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

/* Toggle */

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/* ==========================================================
   STICKY NAVBAR SHADOW
==========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow = "none";

    }

});


/* ==========================================================
   ACTIVE MENU
==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active-link");

        }

    });

});


/* ==========================================================
   SCROLL REVEAL
==========================================================*/

const revealElements = document.querySelectorAll(

    "section, .card, .feature-card, .publication-card"

);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{

    threshold:.15

});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================================
   SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/* ==========================================================
   IMAGE PARALLAX
==========================================================*/

const profileImage = document.querySelector(".sidebar img");

window.addEventListener("scroll",()=>{

    const y = window.scrollY * 0.05;

    profileImage.style.transform =
        `translateY(${y}px)`;

});


/* ==========================================================
   CURRENT YEAR
==========================================================*/

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Mohosina Akhter • Built with HTML, CSS & JavaScript`;


/* ==========================================================
   PRELOADER SUPPORT (OPTIONAL)
==========================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* ==========================================================
   CONSOLE MESSAGE
==========================================================*/

console.log(

"%cWelcome 👋",

"font-size:20px;color:#37B7E6;font-weight:bold;"

);

console.log(

"Portfolio by Mohosina Akhter"

);
