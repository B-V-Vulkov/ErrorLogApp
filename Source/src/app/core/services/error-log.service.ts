import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorLogListingResponseModel } from './models/error-log/error-log-listing-response-model';

const apiUrl: string = environment.apiUrl;
const errorLogController: string = environment.errorLogController;

@Injectable({
    providedIn: 'root'
})
export class ErrorLogService {

    constructor(private httpService: HttpClient) { }

    public getErrorLogList(data: any): Observable<Array<ErrorLogListingResponseModel>> {
        const url = `${apiUrl}/${errorLogController}/GetErrorLogList`;
        return this.httpService.post<Array<ErrorLogListingResponseModel>>(url, data);
    }
}
