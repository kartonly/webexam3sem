import { Component, OnInit, Input } from '@angular/core';
import { MyStudent } from 'src/app/shared/students.model';
import { StudentsserviceService } from 'src/app/shared/studentsservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Список студентов';
  students: MyStudent[]=[];
  @Input() searchstudent: string;
  @Input() searchstudentgroup: string;
  @Input() searchstudentsection: string;
  constructor(private StudentsserviceService: StudentsserviceService) {  }
  ngOnInit() {
    this.getData();
  }
  async getData() {
    try {
      this.StudentsserviceService.getStudents().subscribe((data:MyStudent[]) => this.students=data);
    } catch (err) {
      console.log(err);
    }
  }
  getAll() {
    return Object.values(this.students);
  };
  onDeleteById(id: number) {
    let index = this.students.findIndex((student) => student.id === id);
    let index1:string = String(this.students[index].id);
    if (index !== -1) {
      this.StudentsserviceService.delStudent(index1).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }

  onDeleteRedStudent(redactdelStudent) {
    let index = this.students.findIndex((student) => student.id === redactdelStudent.id);
    let index1:string = String(this.students[index].id);
    if (index !== -1) {
      this.StudentsserviceService.delStudent(index1).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }

  onAddStudent(student) {
    let id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 0;
    student.id = id;
    this.students.push(student);
    this.StudentsserviceService.postStudent(student).subscribe(()=>this.getData(), (err) => console.log(err));
  }

  onRedactStudent(redactStudent){
    let index = this.students.findIndex((student) => student.id === redactStudent.id);
    if (index !== -1) {
      this.students.splice(index, 1, redactStudent);
      this.StudentsserviceService.redStudent(redactStudent).subscribe(()=>this.getData(), (err) => console.log(err));
    }
  }
}
