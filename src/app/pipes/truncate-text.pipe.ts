import { TextstateService } from './../services/textstate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  constructor(private textstate: TextstateService) { }

  transform(value: any, max?: number, changeTrail?: string): any {
    console.log(value);
    let limit = 10;
    const trail = changeTrail !== undefined ? changeTrail : '...';

    if (max !== undefined) {
      limit = max;
    } else {
    }


    if (value.length > limit) {
      this.textstate.setChangeState(true);
      console.log('text collapsed, set to true', this.textstate.getChangeState());
      return value.substring(0, limit) + trail;
    } else {
      this.textstate.setChangeState(false);
      console.log('text not collapsed, set false', this.textstate.getChangeState());
      return value;
    }
  }

}
