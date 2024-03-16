import { Component, OnInit } from '@angular/core';
import { images } from 'src/assets/images';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task: any = images.task;

  ngOnInit(): void {
    this.task = this.task.length
  }

}
