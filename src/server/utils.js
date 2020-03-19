const fs = require("fs");

const clientScripts = fs
  .readdirSync("dist", { withFileTypes: true })
  .filter(item => item && /client/.test(item.name));

const vendorScripts = fs
  .readdirSync("dist", { withFileTypes: true })
  .filter(item => item && /vendor/.test(item.name));

export { clientScripts, vendorScripts };
