import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  add$ = new EventEmitter<User>();

  constructor(private httpClient: HttpClient) {}

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

  create(user: User) {
    return this.httpClient.post<User>('https://jsonplaceholder.typicode.com/users', user).pipe(
      tap((user: User) => {
        this.add$.emit(user);
      })
    );
  }
}
