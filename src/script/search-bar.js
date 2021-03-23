class searchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchElement").value;
    }

    render(){
        this.innerHTML = `
        <style>
        
            .search-container {
                max-width: 1200px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                margin: 0 15px;
                border-radius: 5px;
                display: flex;
                top: 10px;
                background-color: white;
            }
            
            .search-container > input {
                width: 90%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid black;
                font-weight: bold;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid black;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: black;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 10%;
                cursor: pointer;
                border-radius: 4px;
                padding: 10px;
                background-color: black;
                color: white;
                border: 0;
                text-transform: uppercase;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search F1 Teams" id="searchElement" type="search">
            <button id="searchButtonElement" class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }


}

customElements.define("search-bar", searchBar);