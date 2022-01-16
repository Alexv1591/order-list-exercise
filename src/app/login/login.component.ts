import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = false;
  username = "";
  password = "";
  // temp = "";
  // user?: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  // async go(): void {
  //   // console.log("go()")
  //   if (this.username != "OFF" && this.username != "" && this.username == this.password) {
  //     this.userService.getUserByName(this.username).subscribe(user=>{
  //       console.log(user)
  //       this.user = user;
  //       if(this.username==this.user.name){
  //         this.error = false;
  //         this.userService.changeUser(this.username);
  //         this.router.navigate([`../users`], { relativeTo: this.route });
  //       }
  //     })
  //   }
  //   this.username = this.password = "";
  //   this.error = true;
  // }

  go(): void {
    if (this.username != "OFF" && this.username != "" && this.username == this.password) {
      this.error = false;
      this.userService.changeUser(this.username);
      this.router.navigate([`../users`], { relativeTo: this.route });
    }
    this.username = "";
    this.error = true;
  }

  ngOnInit(): void {
  }

}
