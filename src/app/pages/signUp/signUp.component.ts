import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../../Services/user';
import { AuthenticationHelper } from '../../app.authentication';
import { BaThemeSpinner } from '../../theme/services';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { AppConstant } from '../../app.constant';
@Component({
    selector: 'signUp',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./signUp.scss')],
    template: require('./signUp.html'),
    providers: [UserService]
})

export class SignUp extends AppConstant{
    form: FormGroup;
    submitted: boolean = false;
    data: any;

    constructor(fb: FormBuilder, private router: Router, public toastr: ToastsManager,
                private userService: UserService, private _spinner: BaThemeSpinner,
                private authentication: AuthenticationHelper) {
        super();
        this.form = fb.group({
            'firstName': ['', Validators.compose([Validators.required])],
            'lastName': ['', Validators.compose([Validators.required])],
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
            'passwords': fb.group({
                    'password': ['', Validators.compose([Validators.required
                        , Validators.minLength(8)])],
                    'confirmPassword': ['', Validators.compose([Validators.required
                        , Validators.minLength(8)])]
                },
                {validator: EqualPasswordsValidator.validate('password', 'confirmPassword')})
        });
    }

    // onSubmit
    onSubmit(value: any): void{
        let signUpData = {
            'firstName' : value.firstName,
            'lastName' : value.lastName,
            'email' : value.email,
            'password' : value.passwords.password,
            'deviceToken': '6a0974954e45d826239fc3c150734619745ca33e',
            'udId': '12345678',
            'deviceOS': 'ios'
        };
        // to call signUp API
        this.userService.signUp(signUpData).subscribe(
            data => this.signUpSuccess(data),
            error => this.signUpFail(error)
        );
    }

    // if signup
    signUpSuccess(data){
        this.toastr.success('SignUp Successful');
        this.router.navigate(['/login']);
    }

    // if signup fail
    signUpFail(error){
        this.toastr.success('Error While SignUp');
    }

    navigateToForgotPassword() {
        this.router.navigate(['/forgot-password']);
    }

    navigateToHome() {
        this.router.navigate(['']);
    }

    navigateToSignIn() {
        this.router.navigate(['/login']);
    }
}
