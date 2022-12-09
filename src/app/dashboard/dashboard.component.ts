import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
acno=''
psw=''
amnt=''
acnoo=''
pswo=''
amnto=''
user=''

constructor(private ds:DataService){
  //acess username
  this.user=this.ds.currentuser
}
deposite(){
  var acno=this.acno
  var psw=this.psw
  var amnt=this.amnt
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
  var acnoo=this.acnoo
  var pswo=this.pswo
  var amnto=this.amnto
  const result=this.ds.withdraw(acnoo,pswo,amnto)
  if(result){
    alert(`${amnto} debited from your acount and balancd is ${result}`)
  }
}
}