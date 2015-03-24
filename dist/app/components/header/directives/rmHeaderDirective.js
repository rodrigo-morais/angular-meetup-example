define(["exports", "module", "components/header/controllers/rmHeaderController"], function (exports, module, _componentsHeaderControllersRmHeaderController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var rmHeaderController = _interopRequire(_componentsHeaderControllersRmHeaderController);

    var rmHeaderDirective = function ($window, rmConsumer, OauthAccess) {
        var _requestAuthorization = function () {
            var width = 500,
                height = 350,
                top = (screen.height - height) / 2,
                left = (screen.width - width) / 2;

            $window.open(rmConsumer.authorize_uri, "Meetup", ["height=", height, ",width=", width, ",top=", top, ",left=", left].join(""));
        };

        var _isAuthorized = function () {
            var frag = window.location.hash;
            if (frag) {
                (function () {
                    var fp = frag.substring(1).split("&"),
                        i = fp.length,
                        params = {},
                        re = /(\S+)=(\S+)/,
                        inject = function (pair) {
                        if (re.test(pair)) {
                            var kv = re.exec(pair).splice(1, 2);
                            params[kv[0]] = kv[1];
                        }
                    };

                    while (i--) {
                        inject(fp[i]);
                    }

                    if (params.access_token) {
                        $window.close();
                        $window.opener.onMeetupAuth(params.access_token, params.expires_in);
                    } else if (params.error) {
                        $window.close();
                        $window.opener.onMeetupDenial(params.error);
                    }
                })();
            }
        };

        var html = "app/components/header/templates/header.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/header/css/header.css",
            replace: true,
            controller: rmHeaderController,
            link: function link(scope, element, attrs, controller) {}
        };
    };

    rmHeaderDirective.$inject = ["$window", "rmConsumer", "OauthAccess"];

    module.exports = rmHeaderDirective;
});