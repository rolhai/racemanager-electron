const { ipcRenderer } = require('electron');
const log = require('electron-log');
const eventType = require('../event/eventType');
const eventView = require('../event/eventView');

function initView() {
    log.info("DriverView.initView");
    const driverForm = document.querySelector('#driverForm');
    driverForm.addEventListener('submit', submitDriverForm);
}

function submitDriverForm(e) {
    e.preventDefault();
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const driver = new Object();
    driver.firstname = firstname;
    driver.lastname = lastname;
    var message = JSON.stringify(driver);
    log.info("send " + message + " to " + eventType.SHOW_VIEW);
    ipcRenderer.send(eventType.SHOW_VIEW, eventView.DRIVERS, message);
}