import { Component, OnChanges, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges, OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  @Input() rating!: number;
  starWidth!: number;

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 9 / 5;
  }

  onClick(): void {
    this.notify.emit(`The star rating "${this.rating}" was clicked`);
    // console.log(`Rating: ${this.rating} & the Star-with: ${this.starWidth}`);
  }

  ngOnInit(): void {
  }

}
