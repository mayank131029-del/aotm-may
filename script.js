const logo = document.querySelector(".logo")

logo.addEventListener("click", ()=>{ 
    window.open('index.html', '_self')})


const back2top = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        back2top.classList.add("show");
    }
    else{
        back2top.classList.remove("show");
    }

});

back2top.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
