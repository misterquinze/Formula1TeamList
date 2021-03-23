class titleHeader extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>

            .title-header {
                border: 10px solid;
                border-top-right-radius: 45px;
                border-bottom-style: none;
                border-left-style: none;
                margin: 20px;
            }
            
            .title {
                padding: 20px 20px 0 0;
                font-size: 48px;
            }
        </style>
        <div class="title-header">
            <h2 class="title">F1 Teams 2021</h2>
            <p>
                Discover everything you need to know about this year's Formula One teams 
            </p>
        </div>
        `;
    }
}

customElements.define("title-header", titleHeader);