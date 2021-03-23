class TeamCard extends HTMLElement {
    set team(team) {
        this._team = team;
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

    render(){
        this.innerHTML = `
        <style>
           
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card {
                border-radius: 20px;
            }
            .card-header {
                text-align: center;
            }
            .team-logo {
                max-width: 100px;
            }
            .team-car {
                max-height: 350px;
                object-fit: scale-down;
                object-position: 50% 50%;
            }
            p {
                text-align: justify;
            }
        </style>
        
        <div class="col-lg-12 col-md-12 col-sm-12" style="margin: 12px 0;">
            <div class="card">
                <div class="card-header bg-transparent">
                    
                    <img class="team-logo" src="${this._team.strTeamBadge}">
                    <h5 class="card-title">${this._team.strTeam}</h5>
                </div>
                <div class="card-body">
                    <img class="team-car card-img-bottom" style="padding: 20px;" src="${this._team.strTeamJersey}">
                    <p>${this._team.strDescriptionEN}</p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("team-card", TeamCard);