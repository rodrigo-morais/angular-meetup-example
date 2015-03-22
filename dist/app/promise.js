"use strict";

var promiseFunc = (function () {
    var _wait = function (number) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (number < 10) {
                    resolve("Number " + number + " is Success!!!!");
                } else {
                    reject(Error("Number " + number + " is Error!!!"));
                }
            }, 1000);
        });
    };
    return {
        wait: _wait
    };
})();

module.exports = promiseFunc;
//# sourceMappingURL=promise.js.map