import { Router } from './../../node_modules/@vaadin/router/dist/vaadin-router.js';
import './ui/driver/mainView.js';
import './ui/driver/driversView.js';
import './ui/driver/editDriverView.js';
import './ui/driver/notFoundView.js';

// setup a Router instance
const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

console.info(outlet.innerHTML);

router.setRoutes([
    { path: '/', component: 'main-view' },
    { path: '/drivers', component: 'drivers-view' },
    { path: '/driver', component: 'edit-driver-view' },
    { path: '(.*)', component: 'not-found-view' }
]);