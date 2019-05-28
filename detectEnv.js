const pkg = require('./package');
// detect whether electron was started from command-line (electron) or from packed app (electron-builder)
const isPacked = !(process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath));
// electron-builder doesn't start electron with env variables but we can inject arbitrary data into package.json when packing with --config.extraMetadata.NODE_ENV=value: thus if "packed" look for NODE_ENV there
const NODE_ENV = !isPacked ? process.env.NODE_ENV : pkg.NODE_ENV;

module.exports = { NODE_ENV, isPacked };