"use strict";

(function () {
    "use strict";

    app.directive("rmHeader", ["$window", "rmConsumer", "OauthAccess", rmHeaderDirective]);

    function rmHeaderDirective($window, rmConsumer, OauthAccess) {

        var _requestAuthorization = function _requestAuthorization() {
            var width = 500,
                height = 350,
                top = (screen.height - height) / 2,
                left = (screen.width - width) / 2;
            $window.open(rmConsumer.authorize_uri, "Meetup", ["height=", height, ",width=", width, ",top=", top, ",left=", left].join(""));
        };

        var _isAuthorized = function _isAuthorized() {
            var frag = window.location.hash;
            if (frag) {
                var fp = frag.substring(1).split("&"),
                    i = fp.length,
                    params = {},
                    re = /(\S+)=(\S+)/,
                    inject = function inject(pair) {
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
            }
        };

        var html = "app/header/templates/header.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/header/css/header.css",
            replace: true,
            controller: "rmHeaderController",
            link: function link(scope, element, attrs, controller) {}
        };
    }
})();
//# sourceMappingURL=rmHeaderDirective.js.map