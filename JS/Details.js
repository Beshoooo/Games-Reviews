let loader = $(".loaderBody");

let gameDetails = $("#gameDetails");
let allComponent = $("#allComponent");


export class Details
{
    constructor(){}

    async GetDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5b34168562msh21f0d127d5a5a2bp1edd8cjsnde75862e91a7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let retData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let response = await retData.json();
        // console.log(response);
        return response;

    }

    ShowGameDetails(data)
    {

        gameDetails.html("")
        gameDetails.append(`<div class="row">
                                <div class="col-md-6 col-9">
                                    <h1>Game Details</h1>
                                </div>
                                <div class="col-md-6 col-3">
                                    <i id="close" class="fa fa-times fa-2x float-end mt-3" aria-hidden="true"></i>
                                </div>
                                </div>
                                <div class="details">
                                    <div class="row">
                                        <div class="col-md-5 me-4">
                                            <img src="${data.thumbnail}">
                                        </div>
                                        <div class="col-md-6">
                                            <h1>Title: ${data.title}</h1>
                                            <h4>Category:<span> ${data.genre}</span> </h4>
                                            <h4>Platform:<span> ${data.platform}</span> </h4>
                                            <h4>Status:<span> ${data.status}</span> </h4>
                                            <p>${data.description}</p>
                                            <a href="${data.freetogame_profile_url}"  class="btn btn-outline-primary">Show Game</a>
                                        </div>
                                    </div>
                                </div>`)

        loader.fadeOut(300,function(){
            allComponent.addClass("d-none");
            gameDetails.removeClass("d-none");                        

        });

        /*Handle close button */
        let x = document.querySelector("#close");
        x.addEventListener("click",function(){
            gameDetails.addClass("d-none"); 
            allComponent.removeClass("d-none");  
        })
                        
    }


}


