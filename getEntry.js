const path = require('path');
const fs = require('fs');
const glob = require('glob');

let entryObject={};
glob.sync(path.resolve(__dirname,'./src/**/*.*')).forEach(element => {
    console.log(element)
});