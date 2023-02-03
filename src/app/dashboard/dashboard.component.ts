import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''
  // acnoo=''
  // pswo=''
  // amnto=''
  user = ''
  acno: any
  dateandtime: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    //acess username
    if (localStorage.getItem('currentuser')) {
      this.user = JSON.parse(localStorage.getItem('currentuser') || '')
      this.dateandtime = new Date()
    }
  }
  ngOnInit(): void {
    if(!localStorage.getItem('token')){
       alert('please Login first')
       this.router.navigateByUrl('')
    }

  }
  depositeForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  withdrawForm = this.fb.group({
    acnoo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnto: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  deposite() {
    var acno = this.depositeForm.value.acno
    var psw = this.depositeForm.value.psw
    var amnt = this.depositeForm.value.amnt
    this.ds.deposite(acno, psw, amnt).subscribe((result: any) => {
      alert(` ${amnt} is credited to your acount & balance is${result.message}`)
    },
      result => {
        alert(result.error.message)
      })


  }


  withdraw() {
    var acnoo = this.withdrawForm.value.acnoo
    var pswo = this.withdrawForm.value.pswo
    var amnto = this.withdrawForm.value.amnto
    const result = this.ds.withdraw(acnoo, pswo, amnto)
    if (result) {
      alert(`${amnto} debited from your acount and balancd is ${result}`)
    }
  }
  logout() {
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }


  deleteconfirm() {
    this.acno = JSON.parse(localStorage.getItem('currentacno') || '')

  }
  oncancel() {
    this.acno = ""
  }

  delete(event: any) {
    this.ds.deleteacc(event).subscribe((result: any) => {
      alert(result.message)
      this.logout()
    },
      result => {

        alert(result.error.message)
      })
    //  alert(event)
  }
}