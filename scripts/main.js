// Toggle
const navSlide=()=>{
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", ()=>{
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    });
};

navSlide();

// Clear

window.onbeforeunload =()=>{
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
};

// Dark and Ligh mode
function ubahMode(){
    const ubah = document.body;
    ubah.classList.toggle("dark");
}
