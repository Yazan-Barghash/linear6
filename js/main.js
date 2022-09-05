let inc = document.querySelector(".inc");
let content = document.querySelector(".content");
let dec = document.querySelector(".dec");
let x = 0;




inc.onclick = (e)=>{
    e.target.classList.toggle("active");
    console.log(e.target);
}

dec.onclick = (e)=>{
    e.target.classList.toggle("active2");
    console.log(e.target);

    
}