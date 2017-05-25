// Copyrights to Sagi Friedman 11/05/2017


'use strice';


class Client{

    constructor(datastore){
        this.datastore = datastore
    }   


    /* will give me all the json file, from
     tvShows (father of my json array)*/
    tvShow(){ 
        return {"orderd tv show" : this.datastore.tvShows};
    }

    //give me the tv show by id

    Tvshowid(tvId){ 
        let found = false;

        for(let i in this.datastore.tvShows.children){
            var orderTvshow = this.datastore.tvShows.children[i];
            if(orderTvshow.id == tvId){
                console.log(`Tv show found: ${orderTvshow.name}`);
                found = true;
                return {"ordered tv show":orderTvshow};
            }
        } 
        for(let i in this.datastore.tvShows.Adult){
            var orderTvshow = this.datastore.tvShows.Adult[i];
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
        for(let i in this.datastore.tvShows.children){
            var orderTvshow = this.datastore.tvShows.children[i];
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

module.exports =function (datastore){
    var newClient = new Client(datastore);
    return newClient;
}
