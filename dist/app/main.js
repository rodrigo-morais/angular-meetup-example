"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var promiseFunc = _interopRequire(require("app/promise"));

var main = (function () {
    var _run = function (number) {
        promiseFunc.wait(number).then(function (success) {
            console.log(success);
            _run(number + 1);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return {
        run: _run
    };
})();

//success
main.run(1);
//# sourceMappingURL=main.js.map