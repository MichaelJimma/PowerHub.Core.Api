import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../models/task-dto';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { AppSettingsService } from '../../../shared/app-settings.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  private readonly pageSize;

  tasks: TaskDto[] = [];
  totalRecords:number = 0;
  currentPage:number = 1;

  constructor(
    private taskService: TaskService, 
    private route: ActivatedRoute, 
    private settings: AppSettingsService) {
      this.pageSize = this.settings.getSettings().PAGE_SIZE;
      route.queryParams.subscribe(q => {
        this.currentPage = Number(q.page ? q.page : 1);
        this.getTasks(this.currentPage)
      });
  }

  ngOnInit() {

  }

  getTasks(page:number, query = '') {
    this.taskService
      .getTasks(page, this.pageSize, query)
      .subscribe(q => {
        this.tasks = q[0];
        this.totalRecords = q[1];
      });
  }

  deleteTask(id:string) {
    this.taskService.deleteTask(id)
      .subscribe(() => this.getTasks(this.currentPage));
  }
}
