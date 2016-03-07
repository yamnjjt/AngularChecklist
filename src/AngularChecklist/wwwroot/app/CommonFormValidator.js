System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CommonFormValidator;
    return {
        setters:[],
        execute: function() {
            CommonFormValidator = (function () {
                function CommonFormValidator() {
                }
                CommonFormValidator.startsWithNumber = function (control) {
                    if (control.value != "" && !isNaN(control.value.charAt(0))) {
                        return { "startsWithNumber": true };
                    }
                    return null;
                };
                CommonFormValidator.validPassword = function (control) {
                    if (control.value != "" && control.value.length >= 8) {
                        return { "validPassword": true };
                    }
                };
                CommonFormValidator.validEmail = function (control) {
                    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return emailReg.test(control.value) ? null : { 'validEmail': true };
                };
                return CommonFormValidator;
            }());
            exports_1("CommonFormValidator", CommonFormValidator);
        }
    }
});
