class F1Team{
    /*static getTeam(){
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4370`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.teams){
                return Promise.resolve(responseJson.teams);
            } else {
                return Promise.reject('error');
            }
        })
    }*/

    static searchTeam (keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?id=4370&t=${keyword}`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           if(responseJson.teams) {
               return Promise.resolve(responseJson.teams);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
    }
}

export default F1Team;