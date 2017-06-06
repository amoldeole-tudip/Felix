import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router}  from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {UserService} from '../../Services/user';
import {AuthenticationHelper} from '../../app.authentication';
import {BaThemeSpinner} from '../../theme/services';
import {EmailValidator} from '../../theme/validators/email.validator';
import {EqualPasswordsValidator} from "../../theme/validators/equalPasswords.validator";
import {AppConstant} from '../../app.constant';
@Component({
    selector: 'resetPassword',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./resetPassword.scss')],
    template: require('./resetPassword.html'),
    providers: [UserService]
})

export class resetPassword extends AppConstant{
    form: FormGroup;
    submitted: boolean = false;
    data: any;

    constructor(fb: FormBuilder, private router: Router, public toastr: ToastsManager,
                private userService: UserService, private _spinner: BaThemeSpinner,
                private authentication: AuthenticationHelper) {
        super();
        this.form = fb.group({
            'comfirmResetCode': ['', Validators.compose([Validators.required])],
            'passwords': fb.group({
                'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
                'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
            }, {validator: EqualPasswordsValidator.validate('password', 'confirmPassword')})
        });
    }

    //onSubmit
    onSubmit(values : any) : void{
        let resetPasswordData = {
            "password": values.passwords.password,
            "verificationCode": values.comfirmResetCode
        }
        this.userService.resetPassword(resetPasswordData).subscribe(
            data => this.resetPasswordSuccess(data),
            error => this.resetPasswordFail(error)
        )
    }

    resetPasswordSuccess(data){
        this.toastr.success('Password reset successful');
        this.router.navigate(['/login']);
    }

    resetPasswordFail(error){
        this.toastr.error('Error whiler reseting password');
    }

    navigateToHome() {
        this.router.navigate(['']);
    }

    navigateToSignUp() {
        this.router.navigate(['/sign-up']);
    }
}
