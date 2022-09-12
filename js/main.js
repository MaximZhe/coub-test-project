
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo__text");
const btns = document.querySelectorAll(".projects__btn");
const btnMenuOpen = document.querySelector("#namburger");
const modal = document.querySelector("#menu-mobail");
const body = document.querySelector("body");

//Перебираем кнопки и обрабатываем событие мыши.
btns.forEach(item => {
    console.log(item.children[0])
    item.addEventListener("mouseover", (e) => {
        if(e.target === item){
            classActive (item.children[0])  
        }
    })
    item.addEventListener("mouseout", (e) => {
        if(e.target === item){
            classDeactivation (item.children[0])  
        }
    })
    
})
//Добавляем активный класс стрелке
function classActive (item){
    item.classList.add("active");
}
//Убираем активный класс у стрелки
function classDeactivation (item){
    item.classList.remove("active");
}

logo.addEventListener("mouseover", () =>{
    logoText.style.color ="black";
})
logo.addEventListener("mouseout", () =>{
    logoText.style.color ="#383DB7";
})
// Открыаем и закрываем меню в телефоне
btnMenuOpen.addEventListener("click", () => {
    if(!btnMenuOpen.classList.contains("active")){
        classActive(modal);
        body.style.paddingTop = "200px";
        btnMenuOpen.classList.add("active"); 
    }else if(modal.classList.contains("active")){
        classDeactivation (modal);
        body.style.paddingTop = "0px";
        btnMenuOpen.classList.remove("active");
    }  
})
//Плавная загрузка страницы
window.onload = function(){
    body.style.opacity = 1;
};
    