import { Injectable } from '@angular/core';
import { MyStudent } from './students.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsserviceService {
  routeApi = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(this.routeApi);
  };
  delStudent(id) {
    return this.http.delete(this.routeApi+`/${id}`);
  };
  postStudent(student){
    return this.http.post(this.routeApi, student);
  };
  redStudent(redactStudent){
    const headers = { 'content-type': 'application/json'} 
    const body = JSON.stringify(redactStudent);
    return this.http.put(`http://localhost:3000/students/${redactStudent.id}`,body,{'headers':headers})
  }
}
