System.register(['angular2/core', './login-model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_model_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_model_1_1) {
                login_model_1 = login_model_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent() {
                    this.model = new login_model_1.LoginModel();
                    this.submitted = false;
                    this.active = true;
                }
                LoginFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(LoginFormComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginFormComponent.prototype.showFormControls = function (form) {
                    return form && form.controls['email'] &&
                        form.controls['email'].value; // Dr. IQ
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: './app/login-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
