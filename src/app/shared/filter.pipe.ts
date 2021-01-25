import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students, searchstudent: string): unknown {
    if (!searchstudent) {
      return students;
      }
    else{
      let filteredItems = students.filter(
        (item) =>
        (item.group === searchstudent || item.surname === searchstudent  || item.section === searchstudent));
          return filteredItems
        }
    
    
    }
        

}
