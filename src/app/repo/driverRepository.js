const Repository = require('./repository.js');

class DriverRepository {

    constructor() {
        this.repository = new Repository({
            configName: 'drivers'
        });
    }

    get() {
        return this.repository.get();
    }

    put(data) {
        this.repository.put(data);
    }
}

module.exports = DriverRepository;