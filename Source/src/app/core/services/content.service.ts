import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApplicationResponseModel } from './models/content/application-response-model';
import { TimeDurationResponseModel } from './models/content/time-duration-response-model';

const apiUrl: string = environment.apiUrl;
const errorLogController: string = environment.errorLogController;

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    constructor(private httpService: HttpClient) { }

    public getApplications(): Observable<Array<ApplicationResponseModel>> {
        const url = `${apiUrl}/${errorLogController}/getApplications`;
        return this.httpService.get<Array<ApplicationResponseModel>>(url);
    }

    public getTimeDurationDropdown(): Observable<Array<TimeDurationResponseModel>> {
        const url = `${apiUrl}/${errorLogController}/getTimeDurationDropdown`;
        return this.httpService.get<Array<TimeDurationResponseModel>>(url);
    }
}
