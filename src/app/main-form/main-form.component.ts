import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  constructor() { }

  imagesArray: any[]=[]

  ngOnInit() :void {
  }

  addImage(name: HTMLInputElement, url: HTMLInputElement){
    console.log(name.value)
    console.log(url.value)
    name.value=''
    this.imagesArray.push(url.value);
    url.value=''
  }

}
