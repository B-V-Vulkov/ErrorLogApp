import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    public isInvalidLoginData: boolean = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private accountService: AuthenticationService) {

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength]],
            password: ['', [Validators.required, Validators.minLength]]
        });
    }

    ngOnInit(): void {
        this.loginForm.patchValue({
        });
    }

    onSubmitLoginForm() {
        this.accountService.login(this.loginForm.value).subscribe(result => {

            if (result.status === true) {
                localStorage.clear();
                localStorage.setItem('jwt', result.jwt);
                this.router.navigate(['']);
            }
            else {
                this.isInvalidLoginData = true;
            }
        });
    }
}
