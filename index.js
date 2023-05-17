btns=[
    document.getElementById("Vorspeise-btn"),
    document.getElementById("Nachspeise-btn"),
    document.getElementById("Fleischgerichte-btn"),
    document.getElementById("Nudelgerichte-btn"),
    document.getElementById("Hauptspeisen-btn")
]



for(let i=0; i<5; i++){
    btns[i].addEventListener("click", function(){
        switch(i){
            case 0: window.location.href = "extern-Sites/Vorspeise.html";
            break;
            case 1: window.location.href = "extern-Sites/Nachspeise.html";
            break;
            case 2: window.location.href = "extern-Sites/Fleischgerichte.html";
            break;
            case 3: window.location.href  = "extern-Sites/Nudelgerichte.html";
            break;
            case 4: window.location.href = "extern-Sites/Hauptspeisen.html";
            break;
            default: console.log("error");   
        }
        

    })
}
