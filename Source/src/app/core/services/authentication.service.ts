import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() { }

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
