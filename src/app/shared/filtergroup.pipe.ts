import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergroup'
})
export class FiltergroupPipe implements PipeTransform {
  transform(students, searchstudentgroup: string): unknown {
    if (!searchstudentgroup) {
      return students;
      }
    else{
      let filteredItems = students.filter(
        (item) =>
        (item.group === searchstudentgroup));
          return filteredItems
        }
    
    
    }
}
