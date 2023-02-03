import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // uname=''
  // acno=''
  // psw=''

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {

  }
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  ngOnInit(): void { }

  register() {
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw
    if (this.registerForm.valid) {
      this.ds.register(acno, uname, psw).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
        this.router.navigateByUrl('')

      }
      )
    }
    else {
      alert('invalid form')
    }
  }
}

