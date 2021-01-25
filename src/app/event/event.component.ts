import { EventServices } from '../services/event.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: any[] = [];

  constructor(private eventService: EventServices) {
  }

  handleEventClicked(data: any): void{
    console.log('Data received:', data);
  }

  getEvent(): void{
   this.events = this.eventService.getEvents();
  }

  ngOnInit(): void {
    this.getEvent();
  }

}
