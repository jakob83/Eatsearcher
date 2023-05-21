Rezepte = [
    Kartoffelsuppe = {
        img: "../imgs/Kartoffelsuppe.jpg",
        name: "Kartoffelsuppe",
        mainIng: "Kartoffeln, Karotten, Zwiebeln"
    },
    Kürbissuppe = {
        img :  "../imgs/Kürbissuppe.jpg",
        name: "Kürbissuppe",
        mainIng: "Kürbis, Zwiebel, Knoblauch, Butter"
    },

    MettLauchsuppe={
        img: "../imgs/Lauch.jpg",
        name: "Mett-Lauch-Suppe",
        mainIng: "Lauch, Schweinemett,"
    },
    Tomatensuppe = {
        img: "../imgs/Tomatensuppe.jpg",
        name: "Tomatensuppe",
        mainIng: "Tomaten, Tomatenmark, Zwiebel"
    },
    Möhrensuppe= {
        img: "../imgs/Möhrensuppe.jpg",
        name: "Möhrensuppe",
        mainIng: "Möhren, Kartoffeln, Zwiebel, Gemüse"
    },
    Gulaschsuppe = {
        img: "../imgs/Gulasch.jpg",
        name: "Gulaschsuppe",
        mainIng: "Rindfleisch, Fett, Zwiebeln, Paprika"
    },
    Gai={
        img: "../imgs/Gai.jpg",
        name: "Tom-Kha-Gai-Suppe",
        mainIng: "Kokosmilch, Hühnerbrühe, Zitronengras, Chili, Fischsauce"
    },
    indischeSuppe={
        img: "../imgs/Linsen.jpg",
        name: "Indische Linsensuppe",
        mainIng: "Butter, Knoblauch, Zwiebel, Kurkuma, Curry, Tomaten, Zitronensaft,Kokosmilch"
    },
    Süßkartoffelsuppe={
        img: "../imgs/Süßkartoffeln.jpg",
        name: "Süßkartoffeln-Limetten-suppe",
        mainIng: "Süßkartoffeln, Knoblauchzehe, Gemüse, Limetten, Kokosmilch"
    },
    mexikanischeSuppe={
        img: "../imgs/Mexican.jpg",
        name: "Mexikanische Suppe",
        mainIng: "Hackfleisch, Zwiebel, Paprika, Mais, Tomaten, Fleischbrühe, Ketchup, Kidney-Bohnen"
    },
    KokosSuppe={
        img: "../imgs/kokos.jpg",
        name: "rote-Linsen-Kokos-suppe",
        mainIng: "Zwiebel, Ingwer, rote LinsenTomaten, Gemüsebrühe, Kokosmilch"
    },
    Schwedische={
        img: "../imgs/Schwedische.jpg",
        name: "Schwedische Sommersuppe",
        mainIng: "Kartoffeln, Lauch, Butter, Gemüsebrühe, Dill"
    },
    Brokkoli={
        img: "../imgs/Brokkoli.jpg",
        name: "Brokkoli Suppe",
        mainIng: "Brokkoli, Knoblauchzehen, Gemüsesuppe, Olivenöl"
    },
    Gyrossuppe={
        img: "../imgs/Gyros.jpg",
        name: "Gyrossuppe",
        mainIng: "Zwiebel, Knoblauchzehe, Paprika, Schweinegeschnetzeltes,Gyrosgewürz, Mehl, Gemüsebrühe"
    },
    KäseLauch={
        img: "../imgs/Käse.jpg",
        name: "Käse-Lauch Suppe",
        mainIng: "Porree, Hackfleisch, Gemüsebrühe, Schmelzkäse"
    },
    Italia={
        img: "../imgs/Minestrone.jpg",
        name: "Italienische Minestrone",
        mainIng:"Knoblauchzehe, Zwiebeln, Karotten, Kartoffeln, Bohnen, Zucchini, Butter, Speck, Gemüsebrühe"
    }
]


for(i=0; i<Rezepte.length; i++){
    div = document.createElement("div")
    div.setAttribute("class", "container")

    background = document.createElement("div")
    background.setAttribute("class", "background")
    background.style.backgroundImage = "URL("+Rezepte[i].img+")"
    div.appendChild(background)

    p = document.createElement("p")
    p.setAttribute("class","name")
    p.innerHTML = Rezepte[i].name
    div.appendChild(p)

    mainIng = document.createElement("p")
    mainIng.setAttribute("class", "main-ing")
    mainIng.innerHTML = Rezepte[i].mainIng
    div.appendChild(mainIng)

    btn = document.createElement("button")
    btn.setAttribute("class", "btn-link")
    btn.innerHTML = "click"
    div.appendChild(btn)
    
    document.getElementById("big-container").appendChild(div)
}

