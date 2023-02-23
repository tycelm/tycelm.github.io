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

//used to return
function back(){
    document.getElementById('top').scrollIntoView();
    document.getElementById("anim").src = "";
    document.getElementById("anim").src = "assets/prog_out.gif";

    var remove = document.getElementsByClassName("remove");
    var j;

    for(j = remove.length - 1; j >=0; j--){
        remove[j].remove();
    }

    var delayInMilliseconds = 4000; // 4 seconds

    setTimeout(function() {
        window.location.href = 'index.html'
    }, delayInMilliseconds);
}