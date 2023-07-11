let toggle = document.getElementById('toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon-fill');
    
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = "RGB(35, 40, 62)";
        body.style.transition = "2s";     
        document.getElementById('user-detail-name').style.color = "#90A0D9";
        document.getElementById('user-detail-name').style.transition = "2s";
        document.querySelector('#one>.text-1').style.color = "#B4BDDD";
        document.querySelector('#one>.text-1').style.transition = "2s";  
        document.querySelector('#one>.text-3>span').style.color = "#B4BDDD";
        document.querySelector('#one>.text-3>span').style.transition = "2s"; 
        document.querySelector('#resume-link-2').style.color = "#B4BDDD";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid #90A0D9";
        document.querySelector('#about>h1').style.color = "#90A0D9";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "#90A0D9";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "#90A0D9";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "#90A0D9";
        document.querySelector('#projects>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar h1').style.color = "#90A0D9";
        document.querySelector('.github-activity-calendar h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar>h1:nth-child(3)').style.color = "#90A0D9";
        document.querySelector('.github-activity-calendar>h1:nth-child(3)').style.transition = "2s";
    }else{
        body.style.background = "white";
        body.style.transition = "2s";
        document.getElementById('user-detail-name').style.color = "RGB(35, 40, 62)";
        document.getElementById('user-detail-name').style.transition = "2s";
        document.querySelector('#one>.text-1').style.color = "#5566a1";
        document.querySelector('#one>.text-1').style.transition = "2s";
        document.querySelector('#one>.text-3>span').style.color = "#5566a1";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#resume-button-2>a').style.color = "RGB(35, 40, 62)";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "#5566a1";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#projects>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('.github-activity-calendar>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar>h1:nth-child(3)').style.color = "RGB(35, 40, 62)";
        document.querySelector('.github-activity-calendar>h1:nth-child(3)').style.transition = "2s";
    }
})



let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Full Stack Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-button-2').addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1V6YjI9ekR3lIPcNDnVtJZhJCa14Nfmer/view?usp=sharing", "_blank");
})


document.querySelector('#resume-button-1').addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1V6YjI9ekR3lIPcNDnVtJZhJCa14Nfmer/view?usp=sharing", "_blank");
})
