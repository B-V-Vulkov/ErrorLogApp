import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
          username: ['', [Validators.required]],
          password: ['', [Validators.required]]
      });
  }

  ngOnInit(): void {
      this.loginForm.patchValue({
      });
  }

  onSubmitLoginForm() {
      this.accountService.login(this.loginForm.value).subscribe(result => {

          if (result.jwt !== null) {
              localStorage.setItem('jwt', result.jwt);
              this.router.navigate(['']);
          }
          else {
              this.isInvalidLoginData = true;
          }

        this.isInvalidLoginData = true;
      });

  }


  navigateToRegister(){
      this.router.navigate(['./account/register']);
    }

}
