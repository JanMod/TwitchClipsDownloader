var fs = require('fs');

function createSubtitle(option){
fs.writeFile("tmp/test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});

};
