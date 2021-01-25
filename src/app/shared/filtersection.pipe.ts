import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersection'
})
export class FiltersectionPipe implements PipeTransform {

  transform(students, searchstudentsection: string): unknown {
    if (!searchstudentsection) {
      return students;
      }
    else{
      let filteredItems = students.filter(
        (item) =>
        (item.section === searchstudentsection));
          return filteredItems
        }
    
    
    }

}
