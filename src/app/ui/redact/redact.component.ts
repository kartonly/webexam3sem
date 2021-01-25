import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyStudent } from 'src/app/shared/students.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {
  myFormR : FormGroup = new FormGroup({
             
    "id": new FormControl(1, Validators.required),
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
  @Output() redactStudent = new EventEmitter<object>();
  @Output() redactdelStudent = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }
  onRedactStudent() {
    this.redactStudent.emit({
      id: this.myFormR.controls["id"].value,
      name: this.myFormR.controls["name"].value,
      surname: this.myFormR.controls["surname"].value,
      section: this.myFormR.controls["section"].value,
      group: this.myFormR.controls["group"].value,
      patr: this.myFormR.controls["patr"].value,
      bd: this.myFormR.controls["bd"].value,
      email: this.myFormR.controls["email"].value,
      phone: this.myFormR.controls["phone"].value });
  }
  onDeleteRedStudent() {
    this.redactdelStudent.emit({
      id: this.myFormR.controls["id"].value,
      name: this.myFormR.controls["name"].value,
      surname: this.myFormR.controls["surname"].value,
      section: this.myFormR.controls["section"].value,
      group: this.myFormR.controls["group"].value,
      patr: this.myFormR.controls["patr"].value,
      bd: this.myFormR.controls["bd"].value,
      email: this.myFormR.controls["email"].value,
      phone: this.myFormR.controls["phone"].value });
  }

}
