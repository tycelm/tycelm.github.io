function change_page(name){
    window.location.href = name;
}

// collapsible manager
var collapsible = document.getElementsByClassName("scrapped");
var i;

for(i = 0; i < collapsible.length; i++){
    collapsible[i].addEventListener("click", () => {
        var scrapped_content = document.getElementsByClassName("scrapped_content")[0];
        if (scrapped_content.style.maxHeight){
            scrapped_content.style.maxHeight = null;
        }
        else{
            scrapped_content.style.maxHeight = scrapped_content.scrollHeight + "px";
        }
     });
}