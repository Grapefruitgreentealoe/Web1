const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);
}
//looks veeeery sexy.클라스가 거기 있는지 확인해서 있으면 remove, 없으면 add
function init(){

    title.addEventListener("click", handleClick);
}
init();
