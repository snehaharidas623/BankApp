import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
userDetails:any={
  1000:{acno:1000,username:"anu",password:123,balance:0},
  1001:{acno:1001,username:"amal",password:123,balanc:0},
  1002:{acno:1002,username:"arun",password:123,balance:0},
  1003:{acno:1003,username:"mega",password:123,balance:0},
  1004:{acno:1004,username:"sneha",password:123,balance:0}
}


constructor(private router:Router){

}
login(){
  var acno=this.acno
  var psw=this.psw
  var userDetails=this.userDetails

  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect passwrd')
    }
  }
  else{
    alert('incorrect username')
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
}
