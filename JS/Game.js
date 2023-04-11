import { Details } from "./Details.js";

let loader = $(".loaderBody");
let cardSection = $(".cardSection");
let allComponent = $("#allComponent");

export class Game 
{
    constructor(){};

    async getApiData(category)
    {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5b34168562msh21f0d127d5a5a2bp1edd8cjsnde75862e91a7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let retData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let response = await retData.json();
        return response;
    }

    ShowGames(response)
    {
        let gamesArray = Array.from(response);
        // console.log(gamesArray);
        loader.fadeOut(700,function(){
            allComponent.css("opacity","1");
            cardSection.fadeIn(900)
        });


        let cardPosition = $("#cardPosition");
        cardPosition.html("");

        
        for (let i = 0; i < gamesArray.length; i++) {
            
            cardPosition.append(`<div class="mb-4 col-xl-3 col-lg-4 col-md-6" >
                                    <div class="card" data-ID="${gamesArray[i].id}">
                                        <img src="${gamesArray[i].thumbnail}" alt="">
                                        <div class="cardBody">
                                            <h5>${gamesArray[i].title}</h5>
                                            <span class="btn btn-primary">free</span>
                                            <p>${gamesArray[i].short_description.substring(0,100)}</p>
                                            <hr>
                                            <footer>
                                                <span class="footerSpan">${gamesArray[i].genre}</span>
                                                <span class="footerSpan">${gamesArray[i].platform}</span>
                                            </footer>
                                        </div>
                                    </div>
                                </div>`);    
        }
    }

    
    startEvent() 
    {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                let id = item.getAttribute("data-ID");
                this.WorkInDetails(id);
           });
        });

    }

    async WorkInDetails(id) 
    {
        let gameDetail = new Details();
        let obj =await gameDetail.GetDetails(id);
        
        allComponent.addClass("d-none");
        loader.fadeIn(300)

        gameDetail.ShowGameDetails(obj)
    }
    
    
}


