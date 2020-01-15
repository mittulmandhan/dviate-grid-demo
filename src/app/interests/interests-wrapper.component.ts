import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'interests-wrapper',
  templateUrl: './interests-wrapper.component.html',
  styleUrls: ['./interests-wrapper.component.css']
})
export class InterestsWrapperComponent implements OnInit {

  interests: Array<any> = [];

  constructor() {
    for (let index = 0; index < 9; index++) {
      this.interests.push({name: 'interest' + index , imageUrl: 'assets/watermelon.png'});
    }
   }

  ngOnInit() {
    console.log(this.interests);
  }

}
