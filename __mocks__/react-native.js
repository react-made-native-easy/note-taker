var rn = require('react-native');
global.window = global;
rn.NativeModules.Device = {
  getDeviceName: () => {}
};
module.exports = rn;
