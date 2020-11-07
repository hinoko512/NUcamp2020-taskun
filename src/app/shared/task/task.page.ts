import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ITask } from '../../interfaces/task';
import { AlertController } from '@ionic/angular';//add

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  tasks: ITask[] = JSON.parse(localStorage.tasks);
  taskID: number;
  
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,  //add
  ) { }

  ngOnInit() {
  }

  modalDismiss() {
    this.modalController.dismiss();
  }

  //追加するかは未定
  async editTask(index: number) {
    const prompt = await this.alertController.create({
      header: '変更後のタスク',
      inputs: [
        {
          name: 'name',
          placeholder: 'タスク',
          value: this.tasks[index].name
        },
        {
          name: 'content',
          placeholder: 'content',
          value: this.tasks[index].content,
        }
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.tasks[index] = { 
              name: data.name,
              content: data.content,
            }
            localStorage.tasks = JSON.stringify(this.tasks);
            this.modalController.dismiss();
            console.log(this.tasks);
          }
        }
      ]
    });
    prompt.present();
  }

  async removeTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.tasks = JSON.stringify(this.tasks);
    this.tasks = JSON.parse(localStorage.tasks);
    this.modalController.dismiss();
    console.log('tasks');
    console.log(this.tasks);
  }
}
