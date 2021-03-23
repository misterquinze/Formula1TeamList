class navBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        
            .navbar {
                text-align: center;
            }
            .logo{
                max-width: 100px;
            }
        </style>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
            <div class="navbar-collapse collapse">
            </div>
            <a class="navbar-brand mx-auto"><img class="logo" src="https://www.thesportsdb.com/images/media/league/logo/jiqa741556460666.png" alt=""></a>
            <div class="navbar-collapse collapse">
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-bar", navBar);