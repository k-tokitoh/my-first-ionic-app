import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular'

type Task = { name: string }

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Task[] = [
    { name: "hoge" },
    { name: "fuga" },
  ]

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks)
    }
  }

  async operateTask(id: number): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: "remove",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.tasks.splice(id, 1)
            localStorage.tasks = JSON.stringify(this.tasks)
          },
        },
        {
          text: "update",
          icon: "create",
          handler: () => { this._renameTask(id) },
        },
        {
          text: "close",
          role: "cancel",
          icon: "close",
          handler: () => { },
        },
      ]
    })
    actionSheet.present()
  }

  async _renameTask(id: number) {
    const prompt = await this.alertController.create({
      header: "update task",
      inputs: [
        {
          name: "task",
          placeholder: this.tasks[id].name
        }
      ],
      buttons: [
        {
          text: "close"
        },
        {
          text: "save",
          handler: data => {
            this.tasks[id] = { name: data.task }
            localStorage.tasks = JSON.stringify(this.tasks)
          }
        }
      ],
    })
    prompt.present()
  }
}
