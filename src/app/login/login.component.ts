import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  go() {
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
