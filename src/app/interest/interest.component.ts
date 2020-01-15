import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() {
   }

  ngOnInit() {
    console.log(this.imageUrl);
  }

}
