const e = require('moment');

function format(username, text){
    return{
        username,
        text,
        time: e().format('h:mm a')
    }
}

module.exports = format;