import "./team-card.js";

class TeamList extends HTMLElement {
    set teams(teams) {
        this._teams = teams;
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = `
         <style>
             .placeholder {
                 font-weight: lighter;
                 color: rgba(0,0,0,0.5);
                 -webkit-user-select: none;
                 -moz-user-select: none;
                 -ms-user-select: none;
                 user-select: none;
             }
         </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
  
    render() {
        this.innerHTML = "";
        this._teams.forEach(team => {
            const teamCardElement = document.createElement("team-card");
            teamCardElement.team = team
            this.appendChild(teamCardElement);
        })
    }
}

customElements.define("team-list", TeamList);