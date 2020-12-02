const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Repository {

    constructor(args) {
        // Renderer process has to get `app` module via `remote`, whereas the main process can get it directly
        // app.getPath('userData') will return a string of the user's app data directory path.
        console.log("Repository.constructor configName=" + args.configName);
        /*
        this.userDataPath = (electron.app || electron.remote.app).getPath('userData');
        console.log("Repository.userDataPath=" + this.userDataPath);
        this.path = path.join(this.userDataPath, args.configName + '.json');
        console.log("Repository.path=" + this.path);
        this.data = readDataFile(this.path);
        */
    }

    get() {
        //return this.data;
        return JSON.parse('[{"firstname":"Michael","lastname":"Schumacher"}, {"firstname":"Damon","lastname":"Hill"}]');
    }

    put(data) {
        this.data = data;
        writeDataFile(this.path, this.data);
    }
}

function writeDataFile(path, data) {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

function readDataFile(path) {
    return JSON.parse('[{"firstname":"Michael","lastname":"Schumacher"}, {"firstname":"Damon","lastname":"Hill"}]');
    /*
    try {
        return JSON.parse(fs.readFileSync(path));
    } catch (error) {
        console.log(error);
        return JSON.parse('[{"firstname":"Michael","lastname":"Schumacher"}, {"firstname":"Damon","lastname":"Hill"}]');
    }
    */
}

module.exports = Repository;