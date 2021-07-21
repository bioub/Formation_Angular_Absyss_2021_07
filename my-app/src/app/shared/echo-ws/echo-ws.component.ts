import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-echo-ws',
  templateUrl: './echo-ws.component.html',
  styleUrls: ['./echo-ws.component.scss']
})
export class EchoWsComponent implements OnInit {

  messages: string[] = [];

  private ws!: WebSocket;

  constructor() { }

  ngOnInit(): void {
    this.ws = new WebSocket('wss://echo.websocket.org');
    this.ws.addEventListener('message', (event) => {
      this.messages.push(event.data);
    });
  }

  send(event: Event, message: string) {
    event.preventDefault();
    this.ws.send(message);
  }

}
