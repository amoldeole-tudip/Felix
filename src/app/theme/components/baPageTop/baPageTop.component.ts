import {Component, ViewEncapsulation} from '@angular/core';
import {GlobalState} from '../../../global.state';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationHelper} from '../../../app.authentication';
import {AppConstant} from  '../../../app.constant';
@Component({
    selector: 'ba-page-top',
    styles: [require('./baPageTop.scss')],
    template: require('./baPageTop.html'),
    encapsulation: ViewEncapsulation.None,

})
export class BaPageTop extends AppConstant{
    public activePageTitle: string = '';
    public isScrolled: boolean = false;
    public isMenuCollapsed: boolean = false;
    userName: any = '';

    constructor(private _state: GlobalState, public router: Router, public authentication: AuthenticationHelper) {
        super();
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        this._state.subscribe('menu.activeLink', (activeLink) => {
            if (activeLink) {
                this.activePageTitle = activeLink.title;
            }
        });
    }

    ngAfterViewInit(){
        //to get loggen In userName
        this.userName = localStorage.getItem('userName');
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }

    public loggedOff() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}
