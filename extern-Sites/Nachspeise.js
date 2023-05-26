Rezepte = [
    Kartoffelsuppe = {
        img: "../imgs/Tiramisu.jpg",
        name: "Tiramisu",
        mainIng: "Eier, Biskotten, Mascarpone"
    },
    {
        img: "../imgs/Bananensplit.jpg",
        name: "Bananensplit",
        mainIng: "Banane, Vanilleeis"
    },
    {
        img: "../imgs/Heiße.jpeg",
        name: "Eis mit heißen Himbeeren",
        mainIng: "Himbeeren, Vanilleeis"
    },
    {
        img: "../imgs/Schoko.jpg",
        name: "Schokoladenmousse",
        mainIng: "Eier, Zartbitterkuvertüre, Schlagsahne"
    },
    {
        img: "../imgs/Panna.jpg",
        name: "Panna Cotta",
        mainIng: "Gelatine, Sahne, Vanilleschote"
    },
    {
        img: "../imgs/Apfel.jpg",
        name: "Apfelstrudel",
        mainIng: "Butter, Milch, Ei, Mehl, Äpfel..."
    },
    {
        img: "../imgs/Tasche.jpeg",
        name: "Apfeltasche",
        mainIng: "Äpfel, Eiweis, Blätterteig"
    },
    {
        img: "../imgs/Eiskaffee.jpg",
        name: "Eiskaffee",
        mainIng: "kaffee, Sahne, Vanilleeis"
    },
    {
        img: "../imgs/Spaghettieis.jpg",
        name: "Spaghettieis",
        mainIng: "Erdbeeren, Zucker, Vanilleeis"
    },
    {
        img: "../imgs/Pancakes.jpg",
        name: "Pancakes",
        mainIng: "Weizenmehl, Eier, Milch, Ahornsirup"
    },
    {
        img: "../imgs/Crepes.jpg",
        name: "Crepes",
        mainIng: "Butter, Mehl, Milch, Eier"
    },
    {
        img: "../imgs/Baklava.jpg",
        name: "Baklava",
        mainIng: "Haselnüsse, Pistazien, Mandeln, Butter, Teigblätter"
    },
    {
        img: "../imgs/Apfelmus.jpg",
        name: "Apfelmus",
        mainIng: "Äpfel, Vanilleschote, Zucker"
    },
    {
        img: "../imgs/Crumble.jpg",
        name: "Apfel Crumble",
        mainIng: "Äpfel, Mehl, Zimt, Zitronensaft"
    },
        {
        img: "../imgs/Bombe.jpg",
        name: "Jogurthbombe",
        mainIng: "Joghurt, Zucker, Beeren, Sahne"
    },
    {
        img: "../imgs/Erdbeerkäsekuchen.jpg",
        name: "Erdbeerkäsekuchen",
        mainIng: "Butter, Kekse, Zucker, Quark, Frischkäse, Erdbeeren..."
    },
    {
        img: "../imgs/Vanillepudding.jpg",
        name: "Vanillepudding",
        mainIng: "Vanilleschote, Milch, Zucker, Eigelb"
    },
    {
        img: "../imgs/Bruule.jpg",
        name: "Creme Bruule",
        mainIng: "Äpfel, Vanilleschote, Zucker"
    },
    {
        img: "../imgs/Bananenbrot.jpg",
        name: "Bananenbrot",
        mainIng: "Bananen, b. Zucker, Eier, Zucker"
    },
    {
        img: "../imgs/Zitronenbars.jpg",
        name: "Zitronenbars",
        mainIng: "Mehl, Puderzucker, Eier, Mehl..."
    },
    {
        img: "../imgs/Sorbet.jpeg",
        name: "Mango Sorbet",
        mainIng: "Zucker, Mango, Limettensaft"
    },
    {
        img: "../imgs/Brownies.jpg",
        name: "Schoko Brownies",
        mainIng: "Zartbitterschokolade, Butter, Eier, Kakaopulver"
    },
    {
        img: "../imgs/Eclairs.jpg",
        name: "Eclairs",
        mainIng: "Milch, Butter, Mehl, Eier"
    },
    {
        img: "../imgs/Obstsalat.jpg",
        name: "Obstsalat",
        mainIng: "Obst, Zitronensaft"
    },
    {
        img: "../imgs/Bienenstich.jpg",
        name: "Bienenstich",
        mainIng: "Milch, Butter, Mehl, Zucker..."
    },
    {
        img: "../imgs/Himbeertörtchen.jpeg",
        name: "Himbeertörtchen",
        mainIng: "Puderzucker, Butter, Mehl, Eiegelb..."
    },
    {
        img: "../imgs/Kokosmakronen.jpg",
        name: "Kokosmakronen",
        mainIng: "Eiweiß, Zucker, Kokosrapseln, Oblaten"
    },
    {
        img: "../imgs/Zimtschnecken.jpg",
        name: "Zimtschnecken",
        mainIng: "Milch, Butter, Mehl, Vanillinzucker"
    },
    {
        img: "../imgs/Orangencreme.jpg",
        name: "Orangencreme",
        mainIng: "Orangensaft, Zucker, Sahne, Mascarpone"
    },
    {
        img: "../imgs/Melba.jpg",
        name: "Melba",
        mainIng: "Pfirsich, zucker, Himbeeren, Zitronensaft"
    },
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