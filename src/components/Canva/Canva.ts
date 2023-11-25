import { addObserver, appState } from "../../store";

class Canva extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {        
        appState.thing.forEach((p) => {
            const pName = this.ownerDocument.createElement("p")
            //
            
            this.shadowRoot?.appendChild(pName)
        })
    }
}

export default Canva;
customElements.define("my-canva", Canva);