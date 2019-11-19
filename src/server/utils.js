const fs = require('fs');

const clientScripts = fs.readdirSync('dist', { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => (/client/).test(item.name) && item.name);

    
const vendorScripts = fs.readdirSync('dist', { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => (/vendor/).test(item.name) && item.name);

export {
    clientScripts,
    vendorScripts
};