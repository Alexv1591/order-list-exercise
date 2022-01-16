import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = false;
  username ?: string;
  password ?: string;

  constructor( private router: Router, private route: ActivatedRoute ) { }

  go() {
    this.router.navigate([`../users`], { relativeTo: this.route });
  }

  ngOnInit(): void {
  }

}