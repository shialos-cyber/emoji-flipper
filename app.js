const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")
const blankFace = document.querySelector(".blank")
closedFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
        blankFace.classList.remove('active');
    
}})
openFace.addEventListener('click',()=>{
    if(blankFace.classList.contains('blank')){
blankFace.classList.add('active');
openFace.classList.remove('active');
 closedFace.classList.remove('active');      

    }})
     blankFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed')){
        blankFace.classList.remove('active');
        openFace.classList.remove('active');
        closedFace.classList.add('active');
    }
     })