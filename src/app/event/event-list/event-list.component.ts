import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToasterService } from 'src/app/common/toastr.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor(private toastr: ToasterService) { }

  @Input() item: any;
  @Output() eventClick = new EventEmitter();

  handleClick(): void{
    this.eventClick.emit('food');
  }

  handleEventClicked(eventName: string): void{
    this.toastr.success(eventName);
  }

  ngOnInit(): void {
  }

}
