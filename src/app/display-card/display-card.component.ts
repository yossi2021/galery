import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor() { }

  @Input('images') imagesArray:any[]=[];

  ngOnInit() : void{
  }

}
