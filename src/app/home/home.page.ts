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

  constructor() { }

  ngOnInit() {
  }

}
