

const fs = require('fs');



exports.index=async function (req, res) {

    fs.readFile('diapozon.csv', 'utf8', function (err, data) {
        var dataArray = data.split(/\r?\n/);
        console.log(dataArray);
    });
    return res.sendStatus(200);
};


exports.read=async function (req, res) {
        console.log("read");
     return res(200);
};
