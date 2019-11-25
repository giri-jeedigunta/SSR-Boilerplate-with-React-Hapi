const fs = require('fs');

const clientScripts = fs.readdirSync('dist', { withFileTypes: true })
    .filter(item => item && (/client/).test(item));

const vendorScripts = fs.readdirSync('dist', { withFileTypes: true })
    .filter(item => item && (/vendor/).test(item));

export {
    clientScripts,
    vendorScripts
};
