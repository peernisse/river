import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MEALS } from '../mock-meals';


@Component({
  selector: 'trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  meals = MEALS;

  constructor() { }

  
  ngOnInit() {
    
  }

}
