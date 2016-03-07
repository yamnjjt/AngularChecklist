import { Control} from 'angular2/common';

interface ValidationResult {
    [key: string]: boolean;
}

export class CommonFormValidator {

    static startsWithNumber(control: Control): ValidationResult {

        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return { "startsWithNumber": true };
        }

        return null;
    }

    static validPassword(control: Control): ValidationResult {
        if (control.value != "" && control.value.length >= 8) {
            return { "validPassword": true }
        }
    }

    static validEmail(control: Control): ValidationResult {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(control.value) ? null : { 'validEmail': true };
    }
}


