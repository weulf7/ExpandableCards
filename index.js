let rowL=document.querySelectorAll(".row")

rowL.forEach(row =>{
    row.addEventListener('click', ()=>{
        removeClass();
        row.classList.add("active");
    })
})
function removeClass(){
    rowL.forEach(row =>{
        row.classList.remove("active")
    });
}