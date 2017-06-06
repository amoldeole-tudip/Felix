import {AbstractControl} from '@angular/forms';

export class BlankSpaceValidator {
    public static validate(c:AbstractControl) {
        let blankSpace_REGEXP = /.*\S.*/;
        return blankSpace_REGEXP.test(c.value) ? null : {
            validateBlankSpace: {        valid: false
            }
        };
    }
}
