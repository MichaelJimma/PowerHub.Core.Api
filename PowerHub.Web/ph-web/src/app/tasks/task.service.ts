import { Injectable } from '@angular/core';
import { TaskDto } from './models/task-dto';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/app-settings.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly baseUrl:string;
  constructor(private http: HttpClient, private config: AppSettingsService) {
    this.baseUrl = config.getSettings().apiUrl;
   }

  getTasks(): Observable<TaskDto[]> {
    let url = `${this.baseUrl}/test/gettasks`;
    return this.http.get<TaskDto[]>(url);
  }

  getTaskById (taskId: string) : Observable<TaskDto> {
    let url = `${this.baseUrl}/test/gettask/${taskId}`;
    return this.http.get<TaskDto>(url);
  }

  addTask (task: TaskDto) {
    let url = `${this.baseUrl}/test/create`;
    return this.http.post(url, task);
  }

  updateTask (task: TaskDto) {
    let url = `${this.baseUrl}/test/update/${task.id}`;
    return this.http.put(url, task);
  }

  deleteTask (id: string) {
    let url = `${this.baseUrl}/test/delete/${id}`;
    return this.http.delete(url)
  }
}
