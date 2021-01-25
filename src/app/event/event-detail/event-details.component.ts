import { EventServices } from '../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private eventService: EventServices) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }

}
