
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo__text");
const btns = document.querySelectorAll(".projects__btn");
//Перебираем кнопки и обрабатываем событие мыши.
btns.forEach(item => {
    console.log(item.children[0])
    item.addEventListener("mouseover", (e) => {
        if(e.target === item){
          arrowActive (item.children[0])  
        }
    })
    item.addEventListener("mouseout", (e) => {
        if(e.target === item){
            arrowDeactivation (item.children[0])  
        }
    })
    
})
//Добавляем активный класс стрелке
function arrowActive (item){
    item.classList.add("active");
}
//Убираем активный класс у стрелки
function arrowDeactivation (item){
    item.classList.remove("active");
}

logo.addEventListener("mouseover", () =>{
    logoText.style.color ="black";
})
logo.addEventListener("mouseout", () =>{
    logoText.style.color ="#383DB7";
})
