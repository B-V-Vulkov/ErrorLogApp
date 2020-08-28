import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponseModel } from './models/authentication/login-response-model';
import { environment } from 'src/environments/environment';

const apiUrl: string = environment.apiUrl;
const accountControler: string = environment.accountControler;

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpService: HttpClient) { }

    public login(data: any): Observable<loginResponseModel> {
        const url = `${apiUrl}/${accountControler}/login`;
        return this.httpService.post<loginResponseModel>(url, data);
    }

    public getJwt(): string {
        return localStorage.getItem("jwt");
    }

    public isLoggedIn(): boolean {

        const jwt: string = this.getJwt()

        if (jwt === null) {
            return false;
        }
        return true;
    }


}
