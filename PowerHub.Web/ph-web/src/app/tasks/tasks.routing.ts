import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const tasksRoutes: Routes = [
    { path: 'tasks',
        children: [
            { path: '', component: TasksListComponent },
            { path: 'create', component: TaskCreateComponent },
            { path: 'update/:id', component: TaskUpdateComponent }
        ]
    }
];
  
export const TasksRouting = RouterModule.forChild(tasksRoutes);