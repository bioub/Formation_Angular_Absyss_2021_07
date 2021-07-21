import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  fetchById(id: string | number) {
    const request$ = this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id);

    if (id === '3') {
      return request$.pipe(delay(3000));
    }

    return request$;
  }
}
