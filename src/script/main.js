import "./team-list.js";
import "./search-bar.js";
import F1Team from "./f1-team.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const teamListElement = document.querySelector("team-list");
    
    /*const tryTeam = async() => {
        try{
            const result = await F1Team.getTeam()
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }*/

    const onButtonSearchClicked = async () =>  {
        try{
            const result = await F1Team.searchTeam(searchElement.value)
            renderResult(result);
        } catch (message){
            fallbackResult(message)
        }
    
    };
    

    const renderResult = result => {
        teamListElement.teams =result;
    }

    const fallbackResult = message => {
        teamListElement.renderError(message);
    }

    
    //tryTeam();
    searchElement.clickEvent = onButtonSearchClicked;
}



export default main;