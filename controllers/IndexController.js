

const fs = require('fs');



exports.index=async function (req, res) {

    fs.readFile('diapozon.csv', 'utf8', function (err, data) {
        let dataArray = data.split(/\r?\n/);
        for(let i=0;i<dataArray.length;i++){
           let rez=dataArray[i].split(",");
            console.log(rez[0]);
            console.log(rez[1]);
        }
    });
    return res.sendStatus(200);
};


exports.read=async function (req, res) {
        console.log("read");
     return res(200);
};
