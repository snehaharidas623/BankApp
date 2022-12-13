import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
user=''

constructor(private ds:DataService,private fb:FormBuilder){
  //acess username
  this.user=this.ds.currentuser
}
depositeForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})
withdrawForm=this.fb.group({acnoo:['',[Validators.required,Validators.pattern('[0-9]+')]],
pswo:['',[Validators.required,Validators.pattern('[0-9]+')]],
amnto:['',[Validators.required,Validators.pattern('[0-9]+')]]})
deposite(){
  var acno=this.depositeForm.value.acno
  var psw=this.depositeForm.value.psw
  var amnt=this.depositeForm.value.amnt
  const result=this.ds.deposite(acno,psw,amnt)
  if(result)
  {
    alert(`${amnt} credited to your ac and balance is ${result}`)
  }

else{
  alert('incorrect acountnumber or password')
}
}


withdraw(){
  var acnoo=this.withdrawForm.value.acnoo
  var pswo=this.withdrawForm.value.pswo
  var amnto=this.withdrawForm.value.amnto
  const result=this.ds.withdraw(acnoo,pswo,amnto)
  if(result){
    alert(`${amnto} debited from your acount and balancd is ${result}`)
  }
}
}