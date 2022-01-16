import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { User } from './user';
import { USERS } from './userFile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(u => u.id === id)!;
    return of(user);
  }

  // findUserName(name: string): Observable<User> {
  //   const user = USERS.find(u => u.name === name)!;
  //   const data = from(of(user));
  //   data.subscribe({
  //     next(response) { console.log(response); },
  //     error(err) { console.error('Error: ' + err); },
  //     complete() { console.log('Completed'); }
  //   });
  //   return of(user);
  // }

}