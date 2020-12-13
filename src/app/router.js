import { Router } from './../../node_modules/@vaadin/router/dist/vaadin-router.js';
import './ui/driver/mainComp.js';
import './ui/driver/driversComp.js';
import './ui/driver/driverComp.js';
import './ui/driver/notFoundComp.js';

// setup a Router instance
const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

console.info(outlet.innerHTML);

router.setRoutes([
    { path: '/', component: 'main-comp' },
    { path: '/drivers', component: 'drivers-comp' },
    { path: '/driver', component: 'driver-comp' },
    { path: '(.*)', component: 'not-found-comp' }
]);