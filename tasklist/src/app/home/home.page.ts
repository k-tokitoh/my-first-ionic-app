import { Component, OnInit } from '@angular/core';

type Task = { name: string }

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = "task registration"
  tasks: Task[] = [
    { name: "hoge" },
    { name: "fuga" },
  ]
  task: string

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks)
    }
  }

  addTask() {
    this.tasks.push({ name: this.task })
    localStorage.tasks = JSON.stringify(this.tasks)
    this.task = ""
  }
}
