import { AdminService } from './../../services/admin/admin.service';
import { ApiUrl } from './../../core/apiUrl';
import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalVariable } from "../../core/global"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  emailPattern: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private admin: AdminService,
    private http: HttpService) {

    this.submitted = false;
    this.emailPattern = new RegExp(GlobalVariable.PATTERNS.email);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  get userForm() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 10000);
      return;
    }

    // this.http.postData(ApiUrl.login, this.loginForm.value)
    //   .subscribe(response => {
    //     console.log(response);
    //     if (response.statusCode === 200) {
    //       this.admin.userSession(response.info);
    //     }
    //   });
    this.admin.toHome();
  }
}