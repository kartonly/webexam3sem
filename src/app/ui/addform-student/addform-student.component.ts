import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyStudent } from 'src/app/shared/students.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-addform-student',
  templateUrl: './addform-student.component.html',
  styleUrls: ['./addform-student.component.css']
})
export class AddformStudentComponent implements OnInit {
  myForm : FormGroup = new FormGroup({
             
    "name": new FormControl("", Validators.required),
    "surname": new FormControl("", [
                Validators.required, 
    ]),
    "patr": new FormControl("", [
      Validators.required, 
]),
    "email": new FormControl("", Validators.required),
    "bd": new FormControl("", Validators.required),
    "section": new FormControl("", Validators.required),
    "group": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required) 
});

  @Output() addStudent = new EventEmitter<MyStudent>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddStudent() {
    this.addStudent.emit({
      name: this.myForm.controls["name"].value,
      surname: this.myForm.controls["surname"].value,
      section: this.myForm.controls["section"].value,
      group: this.myForm.controls["group"].value,
      patr: this.myForm.controls["patr"].value,
      bd: this.myForm.controls["bd"].value,
      email: this.myForm.controls["email"].value,
      phone: this.myForm.controls["phone"].value });
  }
}
