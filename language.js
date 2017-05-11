// Copyrights to Sagi Friedman 11/05/2017


'use strice';
var data = require("./data/language.json");

class Client{

    constructor(name,id){
        this.name = name;
        this.id = id;
    }   


    /* will give me all the json file, from
     tvShows (father of my json array)*/
    tvShow(){ 
        return {"orderd tv show" : data.tvShows};
    }

    //give me the tv show by id

    Tvshowid(tvId){ 
        let found = false;

        for(let i in data.tvShows.children){
            var orderTvshow = data.tvShows.children[i];
            if(orderTvshow.id == tvId){
                console.log(`Tv show found: ${orderTvshow.name}`);
                found = true;
                return {"ordered tv show":orderTvshow};
            }
        } 
        for(let i in data.tvShows.Adult){
            var orderTvshow = data.tvShows.Adult[i];
            if(orderTvshow.id == tvId){
                console.log(`Tv show found: ${orderTvshow.name}`);
                found = true;
                return {"ordered tv show":orderTvshow};
            }
        } 
        if(!found){
            console.log("Tv show not found");
            return {"error" : "Tv show not found"};
        }
    }

    /* can choose year and language from the json
    file and its will give you back with filter*/
    getstatuslangageTvshow(year,language){
        let found = false;
        for(let i in data.tvShows.children){
            var orderTvshow = data.tvShows.children[i];
            if(orderTvshow.year == year){
                console.log("inside 1");
                for (let i in orderTvshow.language)
                    if (orderTvshow.language[i] == language){
                        console.log(`tv show found: ${orderTvshow.year}`);
                        found = true;
                        return {"Tv show ":orderTvshow};    
                    }
            }
        }
        if(!found){
            console.log("Tv show not found");
            return {"error" : "language not found"};
        }
    }
};

module.exports =function (name,id){
    var newClient = new Client(name,id);
    return newClient;
}
