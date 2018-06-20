import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TasksRouting } from './tasks.routing';
import { TaskService } from 'src/app/tasks/task.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppSettingsService } from '../../shared/app-settings.service';
import { PaginationComponent } from 'src/app/pagination/pagination.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    TasksRouting,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    TasksListComponent, 
    TaskCreateComponent, 
    TaskUpdateComponent, 
    PaginationComponent],
  providers: [TaskService,AppSettingsService]
})
export class TasksModule { }
