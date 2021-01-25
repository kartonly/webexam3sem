import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyStudent } from 'src/app/shared/students.model';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
  @Input() title: string;
  @Input() students: MyStudent[]=[];
  @Input() searchstudent: string;
  @Input() searchstudentgroup: string;
  @Input() searchstudentsection: string;
  @Output() deleteStudent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  direction=0;
  sorting= 'surname';
  reverseSortSur(){
    this.sorting = 'surname';
    if(this.direction) {this.direction = 0;}
    else this.direction = 1;
  }
  onDeleteStudent(id: number) {
    this.deleteStudent.emit(id);
  }  
}
