import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastnamepipe'
})
export class LastnamepipePipe implements PipeTransform {

  transform(values: any[]): any[] {
    return values.sort((a, b) => a.surname.localeCompare(b.surname));
  }

}
