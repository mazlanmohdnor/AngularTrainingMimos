import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  constructor() { }

  transform(value: any, max?: number, changeTrail?: string): any {
    console.log(value);
    let limit = 10;
    const trail = changeTrail !== undefined ? changeTrail : '...';

    if (max !== undefined) {
      limit = max;
    } else {
    }


    if (value.length > limit) {
      return value.substring(0, limit) + trail;
    } else {
      return value;
    }
  }

}
