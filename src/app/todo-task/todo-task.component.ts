import { TasksService } from './../services/tasks.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  public tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {}

  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);
  }
}
