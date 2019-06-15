

const fs = require('fs');

var IpSubnetCalculator = require( 'ip-subnet-calculator' );
var rez;

exports.index=async function (req, res) {

    fs.readFile('diapozon.csv', 'utf8', function (err, data) {
         dataArray = data.split(/\r?\n/);
        for(let i=0;i<dataArray.length-1;i++){
            rez=dataArray[i].split(",");
            calcMask(rez[0],rez[1]);

        }
    });
    return res.sendStatus(200);
};

//
function calcMask(first,last){
    console.log("first "+first);
    console.log("last "+last);
    console.log( IpSubnetCalculator.calculate( first, last ) );

}


exports.read=async function (req, res) {
        console.log("read");
     return res(200);
};
