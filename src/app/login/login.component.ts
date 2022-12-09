import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  aim= "Your Perfect Banking Partner"
  data="enter ac no"
  acno=''
  psw=''

constructor(private router:Router,private ds:DataService){}
ngOnInit(): void {

}

login(){
  var acno=this.acno
  var psw=this.psw
  const result=this.ds.login(acno,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('incorect username or paswrd')
  }
}
}

// login(a:any,b:any){
//   this.acno=a.value
//   this.psw=b.value
//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails

//   if(acno in userDetails){
//     if(psw==userDetails[acno]["password"]){
//       alert('login success')
//     }
//     else{
//       alert('incorrect passwrd')
//     }
//   }
//   else{
//     alert('incorrect username')
//   }
 
// }


// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
  

// }

// pswChange(event:any){
//   this.psw=event.target.value
  
//   console.log(this.psw);
  
// }
// }

