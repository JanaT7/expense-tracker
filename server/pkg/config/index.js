const fs = require('fs');

const configFile = 'config.json';
let config = null;

const Get = (section) => {
    if(config === null) {
        config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
    }
    if(config[section] != undefined) {
        return config[section];
    }
    return null;
};

module.exports = {
    Get
};