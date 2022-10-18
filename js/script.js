let openMenu = document.getElementById("open");
let closeMenu = document.getElementById("close");
let navList = document.getElementById("nav-list");


openMenu.addEventListener("click", ()=>{
    navList.style.right = "0";

    document.getElementsByTagName("main")[0].addEventListener("click", ()=>{
        navList.style.right = "-1000rem";
    })
});

closeMenu.addEventListener("click", ()=>{
    navList.style.right = "-1000rem";
})