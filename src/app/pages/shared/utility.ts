import {Injectable} from '@angular/core';

@Injectable()
export class UtilityHelper {

    UserData: any = [];

    constructor() {

    }

    getFormattedDate(dates): any {
        let date = new Date(dates);
        let displayDate = (date.getUTCMonth() + 1) + '/'
            + date.getDate() + '/' + date.getFullYear();
        return displayDate;
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

}
