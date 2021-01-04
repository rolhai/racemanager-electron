const log = require('electron-log');

class EditDriverView extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Add new driver</h1>
            <form id="driverForm">
                <div>
                    <label>First name:</label>
                    <input type="text" id="firstname" autofocus>
                </div>
                <div>
                    <label>Last name:</label>
                    <input type="text" id="lastname">
                </div>
                <button type="submit">Save driver</button>
            </form>
        `;
        log.info("DriverView.connectedCallback");
        const driverForm = document.querySelector('#driverForm');
        driverForm.addEventListener('submit', this.submitDriverForm);
    }

    submitDriverForm(e) {
        log.info("submitDriverForm");
        e.preventDefault();
        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const driver = new Object();
        driver.firstname = firstname;
        driver.lastname = lastname;
        var message = JSON.stringify(driver);
        log.info("save " + message);
    }
}
customElements.define('edit-driver-view', EditDriverView);