cordova.define("cordova/plugin/androidpreferences", function (require, exports, module) {
    var exec = require("cordova/exec");
  module.exports = {
        get: function (message, win, fail) {
			exec(win, fail, "AndroidPreferences", "get", [message]);
		},
		set: function (message, win, fail) {
			exec(win, fail, "AndroidPreferences", "set", [message]);
		}
    };
});