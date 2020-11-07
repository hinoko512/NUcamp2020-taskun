import { Component } from '@angular/core';
import { ITask } from '../interfaces/task';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imgUrl = 'assets/taskun.png';
  tasks: ITask[];
  constructor() { }

  ionViewWillEnter() {
    this.tasks = JSON.parse(localStorage.tasks);
    console.log(this.tasks.length);
    if(this.tasks.length > 2) {
      this.imgUrl = 'assets/ts_despair.png';
    } else if(this.tasks.length > 1) {
      this.imgUrl = 'assets/ts_hard.png';
    } else {
      this.imgUrl = 'assets/ts.png';
    }
    console.log(this.imgUrl);
  }
}
