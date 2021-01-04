class MainView extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Main Page</h1>
        `;
    }
}
customElements.define('main-view', MainView);