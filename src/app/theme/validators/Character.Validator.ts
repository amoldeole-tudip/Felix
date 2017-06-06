import {AbstractControl} from '@angular/forms';

export class CharacterValidator {
    public static validate(c:AbstractControl) {
        let Character_REGEXP = /^[a-zA-Z ]*$/;
        return Character_REGEXP.test(c.value) ? null : {
            validateCharacter: {
                valid: false
            }
        };
    }
}
