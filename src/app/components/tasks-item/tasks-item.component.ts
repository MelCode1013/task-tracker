import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
 @Input() task!: Task;
 faTrashCan = faTrashCan;
}
