import {AbstractControl} from '@angular/forms';

export class alphaNumericVal {

  public static validate(c:AbstractControl) {
    let ValString =/^[ A-Za-z0-9_@.&+-]*$/i;
    return ValString.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}