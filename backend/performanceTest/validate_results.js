'use strict';

const fs = require('fs');
const minValue = process.argv.slice(2);
const path = '#{chaos-path}#/metrics.json';
if (!fs.existsSync(path)) {
    console.log('the file does not exist');
    return process.exit(0);
}
fs.readFile(path, 'utf8', (err, contents) => {
    const result = JSON.parse(contents);
    console.log('### CONTENT TRAFFIC TEST ###');
    console.log(result);
    console.log('############################');
    if (result.success >= minValue) {
        console.log(
            `that is  valid, total successful request ${result.success} meets`
        );
        return process.exit(0);
    } else {
        console.log(
            `that is not valid, total successful request ${result.success} was less than expected ${minValue}`
        );
        return process.exit(1);
    }
});
