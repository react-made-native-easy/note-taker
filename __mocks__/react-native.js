var rn = require('react-native');
rn.NativeModules.BlobModule = {BLOB_URI_SCHEME: ''};
global.window = global;
module.exports = rn;
