import pkg from './package.json';

// detect whether electron was started from command-line (electron) or from packed app (electron-builder)
export const isPacked = !process.defaultApp && !process.execPath.match(/node_modules\/electron/);

// electron-builder doesn't start electron with env variables but we can inject arbitrary data into package.json with --config.extraMetadata.NODE_ENV=value
// thus if "packed" package.json NODE_ENV field is set
export const NODE_ENV = !isPacked ? process.env.NODE_ENV : pkg.NODE_ENV;