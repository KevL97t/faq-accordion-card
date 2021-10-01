
let btnItems = document.querySelectorAll(".item .btn-item");

for(let i=0; i<btnItems.length; i++){
    btnItems[i].addEventListener("click", function(e){
        console.log(e.target)

        let btn = e.target;

        if(btn.className == "btn-item active"){
            ocultarClase();
        } else {
            ocultarClase();
            btn.classList.add("active")
        }
    });
}

function ocultarClase(){
    for(let i=0; i<btnItems.length; i++){
        btnItems[i].classList.remove("active");
    }
}