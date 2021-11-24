import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    private appService: AppService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user:['', Validators.email],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })
  }

  showFormValues(){
    if(this.loginForm.valid){
      return this.appService.postLogin().subscribe(response => {
        console.log(response);
      })
    } else {
      return false;
    }
  }

  resetFormValues(){
    this.loginForm.reset();
  }
}
