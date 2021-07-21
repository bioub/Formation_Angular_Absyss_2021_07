import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
