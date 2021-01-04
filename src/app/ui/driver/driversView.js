const log = require('electron-log');

class DriversView extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>Drivers Page</h1>
            <br>
            <h2>List of drivers
            <ul id="driversList">
            </ul>
        `;
        log.info("DriversView.connectedCallback");
        this.createDriverList();
    }

    createDriverList() {
        log.info('DriversView.createDriverList');

        // load drivers
        this.drivers = this.getDrivers();
        console.log(this.drivers)

        // show drivers drivers in list
        for (var driver of this.drivers) {
            const driversList = document.querySelector('#driversList');
            const listItem = document.createElement('li');
            const driverItem = document.createTextNode(driver.firstname + ' ' + driver.lastname);
            listItem.appendChild(driverItem);
            driversList.appendChild(listItem);
        }
    }

    getDrivers() {
        return JSON.parse('[{"firstname":"Michael","lastname":"Schumacher"}, {"firstname":"Damon","lastname":"Hill"}]');
    }
}
customElements.define('drivers-view', DriversView);