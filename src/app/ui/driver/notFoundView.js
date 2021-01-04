class NotFoundView extends HTMLElement {
    // We are using `route` property, which is defined by the router
    connectedCallback() {
        this.innerHTML = `
			<h1>Page not found</h1>
		`;
    }
}
customElements.define('not-found-view', NotFoundView);