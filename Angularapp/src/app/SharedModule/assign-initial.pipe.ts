import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignInitial'
})
export class AssignInitialPipe implements PipeTransform {

  transform(name: string, gender): string {
  if(gender.toLowerCase()=='male')
  {
    return 'Mr.'+ name;
  }

  else
  {
    return 'Ms.'+name;
  }
   
  }

}
