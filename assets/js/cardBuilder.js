let cards=[
    ["html5","HTML",1,'#ff9033',"#fff"],
    ["css3","CSS",2," #336eff","#fff"],
    ["js","JavaScript",3,' #ffda33',"#222"],
    ["vuejs","Vue.js",4,"#000","#49c25f"],
    ["bootstrap","Bootstrap",5," #8f49c2","#fff"],
    ["github","GitHub",6,"#000","#fff"],
    ["react","React",7,"#fff"," #70e2eb "],
    ["php","PHP",8,"#000"," #aa72fa "],
    ["laravel","Laravel",9," #ff9237 ","#fff"],
    ["wordpress","Wordpress",10,"#58a8f3","#fff"],
]

function makeCard(card){
    let li=document.createElement("li");
    let cardBody=document.createElement("div")
    let cardIcon=document.createElement("i")
    let cardTitle=document.createElement("div")

    cardIcon.className="card__icon fa-brands fa-"+card[0];
    cardIcon.style.color=card[3];
    cardIcon.style.backgroundColor=card[4];
    cardIcon.onclick=(event)=>{
        console.log(event.target.parentNode.parentNode.id)
    }

    cardTitle.innerText=card[1];
    cardTitle.className="card__title";

    cardBody.className="card__content";
    cardBody.onclick=(event)=>{
        console.log(event.target.parentNode.parentNode.id)
    }

    li.className="card__container";
    li.id=card[1]+card[2];

    cardBody.append(cardIcon)
    cardBody.append(cardTitle)
    

    li.append(cardBody);

    return li;
}

function cardBuilder(cards){
    let cardsContainer=document.getElementById("cards");

    for(card of cards){
        cardsContainer.append(makeCard(card));
    }
}



cardBuilder(cards)