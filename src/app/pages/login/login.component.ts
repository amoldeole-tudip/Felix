import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router}  from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {UserService} from '../../Services/user';
import {AuthenticationHelper} from '../../app.authentication';
import {BaThemeSpinner} from '../../theme/services';
import {EmailValidator} from '../../theme/validators/email.validator';
import {UtilityHelper} from '../shared/utility';
import {AppConstant} from '../../app.constant';
@Component({
    selector: 'login',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./login.scss')],
    template: require('./login.html'),
    providers: [UserService]
})
/**
 * Login class
 */
export class Login extends AppConstant{
    form: FormGroup;
    submitted: boolean = false;
    data: any;

    constructor(fb: FormBuilder, private router: Router, public toastr: ToastsManager,
                private userService: UserService, private _spinner: BaThemeSpinner,
                private authentication: AuthenticationHelper, private utility:UtilityHelper) {
        super();
        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required, EmailValidator.validate])],
            'password': ['', Validators.compose([Validators.required])]
        });

    }

    /**
     * get userName and password from login page and call service
     * @param loginData
     */
    onSubmit(loginData: any): void {
        this._spinner.show();
        this.submitted = true;
        loginData.deviceToken = 'cKYXZxrvFdY:APA91bEBOQIKWA-CYvaUnGKj8XjnamQsDXP1DKqb8Wb1td_5itlQ3H6OAaInFqphu2sAnSJHxeZzmVQkO7JcFRD8U3VJYcwmlE0IhgPuCXSya5Rz-naPd9UYUFNWlTqqtUfgZaIep-GN';
        loginData.deviceOS = 'android';
        this.userService.userLogin(loginData).subscribe(
            data => this.loginSuccess(data),
            error => this.loginFail(error)
        );
    }

    /**
     * if login successfully the redirect to home page
     * @param result
     */
    loginSuccess(result) {
        this.toastr.success('Login Successful');
        this.submitted = false;
        this.authentication.setToken(result.success.data.token);
        this._spinner.hide();
        this.router.navigate(['dashboard']);
        if(result.success.data.user){
            // to save loggedIn userName
            localStorage.setItem('userName',result.success.data.user.basic.firstName);
        }
    }

    /**
     * if err
     * @param error
     */
    loginFail(Error) {
        if (Error.error && Error.error.message) {
            this.toastr.error(Error.error.message);
        } else {
            this.toastr.error('Server error');
        }
        this._spinner.hide();
        this.submitted = false;
    }

    navigateToForgotPassword() {
        this.router.navigate(['/forgot-password']);
    }

    navigateToHome() {
        this.router.navigate(['']);
    }

    navigateToSignUp() {
        this.router.navigate(['/sign-up']);
    }
}
