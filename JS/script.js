import { Game } from "./Game.js";

class UI{
    constructor(){};

    async GetData(category)
    {
        let gamesData = new Game();

        let response = await gamesData.getApiData(category);
        gamesData.ShowGames(response);
        gamesData.startEvent();
    }




}

let ui = new UI();
let loader = $(".loaderBody");
let cardSection = $(".cardSection");
let allComponent = $("#allComponent");
let UP = $(".UP");


loader.fadeIn(700);


$(document).ready(function() {
    ui.GetData("MMORPG");
    $(".navbar a").click(function(e)
    {
        cardSection.css("display","none");
        allComponent.css("opacity","0.2");
        loader.fadeIn(700);
    
        ui.GetData(e.target.innerText);

        $(".navbar a").removeClass("active"); 
        $(e.target).addClass("active")
    });

    window.onscroll=function(){
        if(window.pageYOffset>550)
        {UP.removeClass("d-none");}
        else{UP.addClass("d-none")}
    }

    UP.click(function(){
        document.documentElement.scrollTop = 0;
    })

    
})

