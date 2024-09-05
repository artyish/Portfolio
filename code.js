const Snakevideo = document.getElementById("snakevideo")
Snakevideo.style.transition = "0.6s ease-in-out"
Snakevideo.addEventListener("mouseenter",() => {
    Snakevideo.play()
    Snakevideo.style.scale = "1.1"
    Snakevideo.style.opacity = "0.9";
    Snakevideo.style.filter = "drop-shadow(0 0 0.75rem rgb(49, 255, 203))";
    Snakevideo.style.position = "relative";
    Snakevideo.style.left = "10px";
})

Snakevideo.addEventListener("mouseleave",() => {
    Snakevideo.pause()
    Snakevideo.style.scale = "1";
    Snakevideo.style.opacity = "1";
    Snakevideo.style.filter = "drop-shadow(0 0 1.75rem rgb(0, 0, 0))"
    Snakevideo.currentTime = 0;
    Snakevideo.style.left = "0px";
})

const about = document.getElementById("about");
setInterval(() => {
    about.style.visibility = 'visible'
    about.classList.add("downtoup")
}, 500);
about.style.opacity = "1";

const skills = document.getElementById("skills")
setInterval(() => {
    skills.style.visibility = 'visible'
    skills.classList.add("downtoup")
}, 1000);
skills.style.opacity = "1";

const projects = document.getElementById("projects")
setInterval(() => {
    projects.style.visibility = 'visible'
    projects.classList.add("downtoup")
}, 1500);
projects.style.opacity = "1";

projects.addEventListener("click",() => {
    window.scrollTo(0,950);
})

about.addEventListener("click",() => {
    window.scrollTo(0,150);
})

const textleft = document.getElementById("textleft")

setInterval(() => {
    textleft.style.visibility = 'visible'
    textleft.classList.add("lefttoright")
}, 500);

const textright = document.getElementById("textright")

setInterval(() => {
    textright.style.visibility = 'visible'
    textright.classList.add("righttoleft")
}, 500);

const bg = document.getElementById("background");
window.addEventListener("scroll",() => {

if(window.scrollY >= 950){
    bg.style.transition = "2s ease-in-out";
    bg.style.background = "#002F02";
}
else
{
    bg.style.transition = "2s ease-in-out";
    bg.style.background = "black";
}

})