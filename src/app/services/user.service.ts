import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl;

  constructor(private httpClient: HttpClient) {
    this.userUrl = 'http://localhost:8080/api/users';
  }

  public findAllUsers(): Observable<User[]>{
   return this.httpClient.get<User[]>(this.userUrl);
  }
}
