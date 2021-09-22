import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  passwordVisible = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const lastLogin = localStorage.getItem('lastLogin') || null;
    this.form = this.fb.group({
      username: [lastLogin, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
    this.form.markAsTouched();
  }

  login() {
    this.form.markAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value).subscribe(() => {
      this.navController.navigateRoot('/', {
        animationDirection: 'forward',
      });
    });
  }

}
