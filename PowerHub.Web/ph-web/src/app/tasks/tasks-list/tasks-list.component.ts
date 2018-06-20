import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../models/task-dto';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: TaskDto[];

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id:string) {
    this.taskService.deleteTask(id)
      .subscribe(() => this.getTasks());
  }
}
