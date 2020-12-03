const MAIN = 'index.html';
const DRIVERS = 'ui/driver/driversView.html';
const DRIVER = 'ui/driver/driverView.html';
const TEAM = 'ui/team/teamView.html';
const TRACK = 'ui/track/trackView.html';

class EventView {

    static get MAIN() {
        return MAIN;
    }

    static get DRIVERS() {
        return DRIVERS;
    }

    static get DRIVER() {
        return DRIVER;
    }

    static get TEAM() {
        return TEAM;
    }

    static get TRACK() {
        return TRACK;
    }
}

module.exports = EventView;