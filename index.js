const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}
const scrolltop= document.querySelector('.scrollbtn');
scrolltop.addEventListener('click', ()=>{
    window.scroll({
        top:0,
       behavior:"smooth"
    });
})


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myImg").className = "slideUp";
  }
}