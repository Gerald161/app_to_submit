const more_options_button = document.querySelector(".more_options_button");

const small_navigator = document.querySelector(".small_navigator");

more_options_button.addEventListener("click", (e)=>{
    small_navigator.classList.toggle("reveal_small_navigator");
})