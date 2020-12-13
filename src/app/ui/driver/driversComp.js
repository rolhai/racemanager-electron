class DriversComp extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Drivers Page</h1>
        `;
    }
}
customElements.define('drivers-comp', DriversComp);