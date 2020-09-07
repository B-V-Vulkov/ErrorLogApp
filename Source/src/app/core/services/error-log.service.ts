import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ErrorLogResponseModel } from './models/error-log/error-log-response-model';
import { ErrorLogListingResponseModel } from './models/error-log/error-log-listing-response-model';

const apiUrl: string = environment.apiUrl;
const errorLogController: string = environment.errorLogController;

@Injectable({
    providedIn: 'root'
})
export class ErrorLogService {

    constructor(private httpService: HttpClient) { }

    public getErrorLog(data: any): Observable<ErrorLogResponseModel> {
        const url = `${apiUrl}/${errorLogController}/getErrorLog`;
        return this.httpService.post<ErrorLogResponseModel>(url, data);
    }

    public getErrorLogList(data: any): Observable<Array<ErrorLogListingResponseModel>> {
        const url = `${apiUrl}/${errorLogController}/getErrorLogList`;
        return this.httpService.post<Array<ErrorLogListingResponseModel>>(url, data);
    }
}
