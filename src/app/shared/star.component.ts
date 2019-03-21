import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rate: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rate * 75 / 5;
  }
  onClick() {
   this.ratingClicked.emit(`The Rating ${this.rate} was clicked`);
  }

}
