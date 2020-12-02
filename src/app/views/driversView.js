const { app } = require('electron');
const DriverRepository = require('../repo/driverRepository');

function initView() {
    console.log("DriversView.initView")
    this.driverRepository = new DriverRepository("drivers");
    createDriverList();
}

function createDriverList() {
    console.log('DriversView.createDriverList');
    this.drivers = driverRepository.get();
    console.log(this.drivers)
    for (var driver of this.drivers) {
        const list = document.querySelector('#driverList');
        const listItem = document.createElement('li');
        const item = document.createTextNode(driver.firstname + ' ' + driver.lastname);
        listItem.appendChild(item);
        driverList.appendChild(listItem);
    }
}