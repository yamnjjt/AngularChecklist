import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {LoginModel} from './login-model';

@Component({
    selector: 'login-form',
    templateUrl: './app/login-form.component.html'
})


export class LoginFormComponent {

    model: LoginModel = new LoginModel();
    
    
    submitted = false;
    
    
    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }


    active = true;


    showFormControls(form: NgForm) {

        return form && form.controls['email'] &&
            form.controls['email'].value; // Dr. IQ
    }
}