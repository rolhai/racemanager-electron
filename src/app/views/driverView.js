const { ipcRenderer } = require('electron');

function initView() {
    console.log("DriverView.initView");
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
    ipcRenderer.send('driver:add', message);
}