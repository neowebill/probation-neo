import { User } from './user.model';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://DESKTOP-VDFC7HA:3011/users');
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>('http://DESKTOP-VDFC7HA:3011/users' + '/' + id);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://DESKTOP-VDFC7HA:3011/user', user, httpOptions);
  }
  updateUser(user: User): Observable<User> {
    return this.http.patch<User>('http://DESKTOP-VDFC7HA:3011/user', user, httpOptions);
  }
 }

