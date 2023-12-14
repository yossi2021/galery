import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  constructor() { }

  @Input() card:string='';

  ngOnInit(): void {
  }

}
