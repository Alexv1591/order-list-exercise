import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  userName = "";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.currentStatus.subscribe(userName => this.userName = userName);
  }

  logOut() {
    this.userName = "";
    this.userService.logOut();
  }

  public userLogIn(user: string) {
    this.userName = user;
  }

}
