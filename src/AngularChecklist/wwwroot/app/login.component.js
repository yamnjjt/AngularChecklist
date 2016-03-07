System.register(['angular2/core', 'angular2/common', './login-model', './commonFormValidator'], function(exports_1, context_1) {
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
    var core_1, common_1, login_model_1, commonFormValidator_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_model_1_1) {
                login_model_1 = login_model_1_1;
            },
            function (commonFormValidator_1_1) {
                commonFormValidator_1 = commonFormValidator_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(builder) {
                    this.builder = builder;
                    this.model = new login_model_1.LoginModel();
                    this.submitted = false;
                    this.active = true;
                    this.email = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.minLength(5),
                        common_1.Validators.required,
                        commonFormValidator_1.CommonFormValidator.validEmail
                    ]));
                    this.password = new common_1.Control("", common_1.Validators.compose([
                        common_1.Validators.minLength(8),
                        common_1.Validators.required,
                        commonFormValidator_1.CommonFormValidator.validPassword
                    ]));
                    this.form = builder.group({
                        email: this.email,
                        password: this.password,
                        rememberMe: this.rememberMe
                    });
                }
                LoginComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(LoginComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.updateModel = function () {
                    this.model.email = this.email.value;
                    this.model.password = this.password.value;
                    this.model.remember = this.rememberMe.value;
                };
                LoginComponent.prototype.showFormControls = function (form) {
                    return form && form.controls['email'] &&
                        form.controls['email'].value; // Dr. IQ
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-app',
                        templateUrl: './app/login.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
