import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { CardTitleComponent } from './card-title/card-title.component';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {

  @ContentChild(CardTitleComponent) cardTitleComponent!: CardTitleComponent;

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.cardTitleComponent)
  }



}
