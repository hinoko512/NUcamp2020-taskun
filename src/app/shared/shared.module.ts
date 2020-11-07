import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskPage } from './task/task.page';

@NgModule({
  declarations: [TaskPage],
  entryComponents: [TaskPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [TaskPage],
})
export class SharedModule { }
