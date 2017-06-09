import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../../Services/user';
import { AuthenticationHelper } from '../../app.authentication';
import { BaThemeSpinner } from '../../theme/services';
import { EmailValidator } from '../../theme/validators/email.validator';
import { AppConstant } from '../../app.constant';
@Component({
    selector: 'forgotPassword',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./forgotPassword.scss')],
    template: require('./forgotPassword.html'),
    providers: [UserService]
})

export class ForgotPassword extends AppConstant{
    form: FormGroup;
    submitted: boolean = false;
    data: any;

    constructor(fb: FormBuilder, private router: Router, public toastr: ToastsManager,
                private userService: UserService, private _spinner: BaThemeSpinner,
                private authentication: AuthenticationHelper) {
        super();
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
        });
    }

    // onSubmit
    onSubmit(values: any): void {
        let userEmail = {
            'email': values.email
         }
         this.userService.generateCode(userEmail).subscribe(
             data => this.generateCodeSuccess(data),
             error => this.generateCodeFail(error)
         );
    }

    generateCodeSuccess(data){
        this.toastr.success('Token has been sent on your Email');
        this.router.navigate(['/reset-password']);
    }
    generateCodeFail(error){
        this.toastr.error('Error while sending Token');
    }
    navigateToHome() {
        this.router.navigate(['']);
    }

    navigateToSignUp() {
        this.router.navigate(['/sign-up']);
    }

}
