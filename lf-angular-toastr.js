/**
 * Name: lf-angular-toastr.js
 * Created by lfortes on 2/28/2015.
 */

(function () {
    'use strict';

    angular.module('lf-toastr', ['toastr']).factory('lfToastrService', ['toastr', function (toastr) {

        var openedToasts = [];
        var toastDefaultOptions = {
            positionClass: 'toast-bottom-right',
            tapToDismiss: false,
            timeOut: 0,
            extendedTimeOut: 0,
            type: 'error'
        };

        function thereAreOpenedToasts() {
            return openedToasts.length;
        }

        function clearToasts() {
            toastr.clear();
            openedToasts.length = 0;
        }

        function toastIsOpened(message) {
            for (var i = 0; i < openedToasts.length; i++) {
                if (openedToasts[i].scope.message === message) break;
            }
            return (openedToasts.length && i < openedToasts.length);
        }

        function openToast(message, title, options) {
            var currentOptions = {};
            if (!options) {
                currentOptions = toastDefaultOptions;
            }
            else {
                currentOptions = angular.extend({}, toastDefaultOptions, options);
            }
            openedToasts.push(toastr[currentOptions.type](message, title, currentOptions));
        }

        function clearToast(message) {
            for (var i = 0; i < openedToasts.length; i++) {
                if (openedToasts[i].scope.message === message) break;
            }
            if (i < openedToasts.length) {
                var toasts = openedToasts.splice(i, 1);
                toastr.clear(toasts[0]);
            }
        }

        // Service API
        return {
            thereAreOpenedToasts: thereAreOpenedToasts,
            clearToasts: clearToasts,
            toastIsOpened: toastIsOpened,
            openToast: openToast,
            clearToast: clearToast
        };

    }]);

})();