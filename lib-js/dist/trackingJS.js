/**
 * Track requests
 * 
 * @author Felipe Pereira
 * License: MIT
 * 
 * github: 
 */
var trackingJS = (function (window) {
    var url = null;

    // Register for non ajax requests
    window.addEventListener("load", function () {
        sendStatistic();
    });

    var sendStatistic = function () {
        if (url == null) {
            throw "No url supplied to trackingJS. You need to call trackingJS(someUrl) in order to get trackingJS monitoring the user navigation";
        }

        var payload = {
            email: 'felipe.dspereira@gmail.com',
            url: window.location.href,
            date: new Date()
        };

        var form = new FormData();
        form.append("userActivities", JSON.stringify(payload));

        var option = {
            mode: 'no-cors',
            method: 'POST',
            body: form
        };
        fetch(url, option).then(function (res) {
            console.log(JSON.stringify(res, null, 4));
        });
    }

    var trackingJs = function (backendTrackingServerUrl) {
        url = backendTrackingServerUrl;
    };

    return trackingJs;

})(window);