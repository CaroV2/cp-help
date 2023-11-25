import { dispatch } from "../../store";

class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ""

        const nPerson = this.ownerDocument.createElement("h3");
        nPerson.textContent = "Tu nombre";

        const person = this.ownerDocument.createElement("input");
        person.addEventListener("change", (e: any) => {
            console.log(e.target.value)
        });

        const nColor = this.ownerDocument.createElement("h3");
        nColor.textContent = "Color favorito";

        const color = this.ownerDocument.createElement("input");
        color.addEventListener("change", (e: any) => {
            console.log(e.target.value)
        });

        const nLetter = this.ownerDocument.createElement("h3");
        nLetter.textContent = "Letra favorita";

        const letter = this.ownerDocument.createElement("input");
        letter.addEventListener("change", (e: any) => {
            console.log(e.target.value)
        });

        const btn = this.ownerDocument.createElement("button");
        btn.textContent = "Guardar";
        btn.addEventListener("click", () => {
            //dispatch()
            console.log("Dios te salve María")
        })

        this.shadowRoot?.appendChild(nPerson);
        this.shadowRoot?.appendChild(person);

        this.shadowRoot?.appendChild(nColor);
        this.shadowRoot?.appendChild(color);

        this.shadowRoot?.appendChild(nLetter);
        this.shadowRoot?.appendChild(letter);

        this.shadowRoot?.appendChild(btn);
    }
}

export default Form;
customElements.define("my-form", Form);