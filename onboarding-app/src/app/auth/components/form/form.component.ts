import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  readonly authForm: FormGroup;
  constructor(fb:FormBuilder, private router:Router, private authService: AuthService){
    this.authForm = fb.group({
      email: [, Validators.required]
    })
  }

  onSend(){
    if(this.authForm.valid){
      this.authService.login(this.authForm.value).subscribe(
        token => {
          this.authService.setToken(token)
          this.router.navigate(['/home'])
        }
      )
    }
  }
}
