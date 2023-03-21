const menu = document.getElementById("checkbox-menu");
const navegacao = document.getElementById("navegacao");

menu.addEventListener("click",
    () => {
        if (menu.checked == true) {
            navegacao.classList.toggle("mostrar");
        } else {
            navegacao.classList.toggle("mostrar");
        }
    }
)


const item = document.querySelectorAll("[data-anime]");
const animeScroll = ()=>{
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    /* window.pageYOffset começa a 200 da base */
    /* window.innerHeight 635 */

    item.forEach(
        (element)=>{
            if(windowTop > element.offsetTop){
                /* element.offsetTop 620 */
                element.classList.add("animate");
            }else{
                element.classList.remove("animate");
            }
        }
    )
}

/* animeScroll(); */
window.addEventListener("scroll",
    ()=>{animeScroll() }
)