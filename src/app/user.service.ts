import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { USERS } from './userFile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private statusSource = new BehaviorSubject('OFF'); // set default status
  currentStatus = this.statusSource.asObservable();

  currentUser = "";

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(u => u.id === id)!;
    return of(user);
  }

  getUserByName(name: string): Observable<User> {
    const user = USERS.find(u => u.name === name)!;
    return of(user);
  }

  // checkUserExistance(username: string): void {
  //   const obs = USERS.find(u => u.name === username);
  //   this.getUserByName(username).subscribe(data => this.user = data);
  //   console.log("checkUserExistance()\n" + this.user);
  //   return username == this.user.name;
  // }

  changeUser(user: string): void {
    this.statusSource.next(user)
    this.currentUser = user;
  }

  logOut(): void {
    this.currentUser = "";
  }

}