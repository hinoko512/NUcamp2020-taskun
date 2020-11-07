import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskPage } from '../shared/task/task.page';
import { ITask } from '../interfaces/task';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  title = 'タスク一覧';
  name: string;
  content: string;

  tasks: ITask[] = [];
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
  ) {}
  
  async showTask(index: number) {
    const modal = await this.modalController.create({
      component: TaskPage,
      componentProps: {
        taskID: index
      }
    });
    await modal.present();
    await modal.onWillDismiss();
    this.tasks = JSON.parse(localStorage.tasks);
  }

  ionViewWillEnter() {
    if('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  async addTask() {
    if(this.tasks.length > 5) {
      const alert = await this.alertController.create({
        header: 'taskunが苦しんでいます！',
        message: '登録しているタスクが多すぎます。タスクを減らしてください',
        buttons: ['OK'],
      });
      await alert.present();
      this.name = "";
      this.content = "";
    } else {
      const newTask: ITask = {
        name: this.name,
        content: this.content
      };
      this.tasks.push(newTask);
      localStorage.tasks = JSON.stringify(this.tasks);
      let tmp: ITask[] = this.tasks;
      this.tasks = tmp;
      this.name = "";
      this.content = "";
    }
  }
}
