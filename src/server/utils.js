const fs = require('fs');

const bodyScriptsList = fs.readdirSync('dist', { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => (/client/).test(item.name) && item.name);

export default bodyScriptsList;