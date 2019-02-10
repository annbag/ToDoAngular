import { TasksService } from './../services/tasks.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {}
}
