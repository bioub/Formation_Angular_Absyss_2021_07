import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    (
      this.router.events.pipe(
        filter((event) => event instanceof ActivationEnd),
      ) as Observable<ActivationEnd>
    ).subscribe((event: ActivationEnd) => {
      if (event.snapshot.data.title) {
        this.title.setTitle(event.snapshot.data.title);
      }
    });
  }
}
