import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks)
    }
  }
}
